import {instance} from "../axios/";
import React, {useEffect, useState} from "react";
import {TextInput, Button, FormGroup} from "carbon-components-react";

const LoginForm = () => {
    const [userAuth, setUserAuth] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginAttempts, setLoginAttempts] = useState(0);
    
    useEffect(()=> {
        const url = instance;
        url.get('/auth')

        .then(response => {
            const data = response.data;
            console.log(response)
            setUserAuth(data);
        })
        .catch(error => {
            console.log("Error getting user login data");
        }); 
    }, []);
    
    const handleSubmit = () => {
        const matches = userAuth.filter(auth => auth.username === username && auth.password === password);
    
        if (matches.length !== 1) {
            localStorage.clear()
            setLoginAttempts(loginAttempts + 1);
        } else {
            localStorage.setItem("user", JSON.stringify(matches[0]) )
            localStorage.setItem("isLoggedIn", "T")
            window.location.replace("/patients")
        }
    };



    return (
        <div>
            
            <FormGroup legendText="Login">
                <TextInput 
                    labelText = "Username:"
                    id = "usernameInput"
                    size="sm"
                    value = {username} 
                    onChange = {e => setUsername(e.target.value)}/>
                <TextInput.PasswordInput
                    labelText = "Password:"
                    id = "password_input"
                    size="sm"
                    value ={password}
                    onChange = {e => setPassword(e.target.value)}/>
                    {loginAttempts > 0 &&<p>login attempts: {loginAttempts}</p>}
                <br/><Button type="submit" onClick ={handleSubmit}>Login</Button>
            </FormGroup> 
        </div>
    );
};

export default LoginForm;
