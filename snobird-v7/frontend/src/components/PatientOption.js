import React, { useEffect, useState } from "react";
import { instance} from "../axios"

const PatientOption = () => {
    const [patientOptionData, setPatientOptionData] = useState([]);

    useEffect(() => {
        instance.get('/patientoption')
        .then(response => {
            setPatientOptionData(response.data)
        })
        .catch(error =>{
            console.log("Error getting patientoption data")
        })
    }, []);
    console.log("patientOptionData: ",patientOptionData)
    patientOptionData.map(value => (
        console.log("map: ",value.options.role)

    ));
    
    return (
        <>

            <p>{patientOptionData.patient}</p>

        </>
    );
};

export default PatientOption;