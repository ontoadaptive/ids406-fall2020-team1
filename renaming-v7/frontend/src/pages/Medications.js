import React from "react";
import { MedicationsViewer, MedicationForm, MedicationNotification } from '../components';

const Medications = () => {
    return (
        <>
        <MedicationsViewer />
        <br/>
        <MedicationForm/>
        <br/>
        <MedicationNotification/>
        </>
    );
};

export default Medications;