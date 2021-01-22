import React from "react";
import { PatientsViewer } from '../components';

const Patient = () => {

    
    const user = localStorage.getItem("user")
    console.log(user);
    return (
        <PatientsViewer/>
    );
};

export default Patient;