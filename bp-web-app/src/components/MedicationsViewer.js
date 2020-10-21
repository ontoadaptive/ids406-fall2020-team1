import React, { useEffect, useState } from "react";
import axios from "../axios/instance";

const MedicationsViewer = () => {
  const [medicationsData, setMedicationsData] = useState("");

  useEffect(() => {
    axios.get('/medications')
    .then(response => {
      const data = response.data;
      setMedicationsData(data)
    })
    .catch(error => {
      console.log("Error getting medication data")
    });
  }, []);

  return (
    <div style={{ backgroundColor: "LightGray", display: "block", marginRight: 'auto', marginLeft: 'auto', width: '300px' }} >
      <u>Medication Information</u>
      <p><strong>Id: </strong>{medicationsData.id}</p>
      <p><strong>Name: </strong>{medicationsData.name}</p>
      <p><strong>Dose: </strong>{medicationsData.dose}</p>
    </div>
  );
};

export default MedicationsViewer;