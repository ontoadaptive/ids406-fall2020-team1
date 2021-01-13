import React from "react";
import { MedicationsViewer, MedicationForm, MedicationNotification } from '../components';
import {instance} from "../axios/";
import {useEffect, useState} from "react";

const Medications = () => {
    const [user, setUser] = useState([]);
    useEffect(()=> {
        instance.get('/user/1')

        .then(response => {
            const data = response.data;
            console.log("userdata", data)
            setUser(data);
        })
        .catch(error => {
            console.log("Error getting user data");
        });
    }, []);

    console.log("medication testing", user.role);
    return (
        <>
        <MedicationsViewer />
        <br/>
        {user.role > 0 &&<MedicationForm/>}
        
        </>
    );
};

export default Medications;