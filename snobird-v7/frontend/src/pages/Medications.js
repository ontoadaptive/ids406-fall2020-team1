import React from "react";
import { MedicationsViewer, MedicationForm } from '../components';
import {FetchUserData} from "../services/";
const Medications = () => {
    const activeUser = FetchUserData()

    return (
        <>
            <MedicationsViewer />
            <br/>
            {activeUser.role > 1 &&<MedicationForm/>}
            
        </>
    );
};

export default Medications;