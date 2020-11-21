import React, { useEffect, useState } from "react";
import axios from "../axios/instance";

const PatientsViewer = () => {
  const [patientsData, setPatientsData] = useState([]);

  useEffect(() => {
    axios.get('/patients')
    .then(response => {
      const data = response.data.concat()
      setPatientsData(data)
    })
    .catch(error => {
      console.log("Error getting patient data")
    });
  }, []);

  return (
    <div>
      <p>Patient List</p>
      <p>{patientsData.map((patient) => 
        <ul>
          <li>{patient.id}</li>
          <li>{patient.name}</li>
          <li>{patient.address}</li>
        </ul>
      )}</p>
    </div>
  );
};

export default PatientsViewer;