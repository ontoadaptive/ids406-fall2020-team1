import React, {useEffect, useState} from "react";

import {TextInput, Button, FormGroup} from "carbon-components-react";
import {betaInstance, instance} from "../axios/";
const Beta = false;

const LoginForm = () => {
    const [userAuth, setUserAuth] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginAttempts, setLoginAttempts] = useState(0);

    const handleSubmit = () => {
        const matches = userAuth.filter(auth => auth.username === username && auth.password === password);   
        if (matches === undefined || matches.length == 0) {
            setLoginAttempts(loginAttempts + 1);
            console.log("failure", loginAttempts);
        } else {
            setLoginAttempts(0);

            console.log("success", matches[0]);
            const data = {
                loggedIn: true,
                id : 1,
                userID: matches[0].id,
                username : matches[0].username,
                role : matches[0].role
            }
            instance.patch("/user/1", data)

        }
    };

    useEffect(()=> {
        const url = Beta ? betaInstance : instance;
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

    return (
        <div>
            {loginAttempts > 0 &&<p>login attempts: {loginAttempts}</p>}
            <FormGroup>
                username:<TextInput 
                    size="sm"
                    value = {username} 
                    onChange = {e => setUsername(e.target.value)}/>
                password:<TextInput.PasswordInput
                    size="sm"
                    value ={password}
                    onChange = {e => setPassword(e.target.value)}/>
                <br/><Button type="submit" onClick ={handleSubmit}>Login</Button>
            </FormGroup> 
        </div>
    );
};

export default LoginForm;
