import React from "react";

import { Button } from "carbon-components-react";
import { FetchUserData } from "../services";

const ProfilePage = () => {
    const activeUser = FetchUserData
    console.log(activeUser)
    const handleSubmit = () => { 
        localStorage.setItem("isLoggedIn", "false")
        localStorage.removeItem("user")
        window.location.replace("/patients")
        
    }
    return (
        <>
            
            <Button onclick = {handleSubmit}>
                Logout
            </Button>
        </>
    );
};

export default ProfilePage;