import React from "react";
import { MedicationsViewer, MedicationForm } from '../components';
import {FetchUserData} from "../services/";
const Medications = () => {
    const activeUser = FetchUserData()

    console.log("medication testing", activeUser.role);
    return (
        <>
        <MedicationsViewer />
        <br/>
        {activeUser.role > 1 &&<MedicationForm/>}
        
        </>
    );
};

export default Medications;