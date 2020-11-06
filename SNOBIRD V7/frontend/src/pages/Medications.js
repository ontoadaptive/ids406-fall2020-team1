import React from "react";
import { MedicationsViewer, MedicationForm } from '../components';

const Medications = () => {
    return (
        <>
        <MedicationsViewer />
        <br/>
        <MedicationForm/>
        </>
    );
};

export default Medications;