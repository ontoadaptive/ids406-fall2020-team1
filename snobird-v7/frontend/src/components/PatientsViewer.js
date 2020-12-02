import React, { useEffect, useState } from "react";
import axios from "../axios/instance";
import { 
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell
} from 'carbon-components-react';
const PatientsViewer = () => {
  const [patientsData, setPatientsData] = useState([]);

  useEffect(() => {
    axios.get('patients/')
    .then(response => {
      const data = response.data.concat()
      setPatientsData(data)
    })
    .catch(error => {
      console.log("Error getting patient data")
    });
  }, []);
  console.log('patientdata', patientsData)
  return (
    <div>
      <StructuredListWrapper ariaLabel="Patients Structured List">
        <StructuredListHead>
          <StructuredListRow head tabIndex={0}>
            <StructuredListCell head>
              Id
            </StructuredListCell>
            <StructuredListCell head>
              Name
            </StructuredListCell>
            <StructuredListCell head>
              Address
            </StructuredListCell>
          </StructuredListRow>
        </StructuredListHead>
        <StructuredListBody>
          {patientsData.map((patient) =>
            <StructuredListRow tabIndex={0}>
              <StructuredListCell>
                {patient.id}
              </StructuredListCell>
              <StructuredListCell>
                {patient.name}
              </StructuredListCell>
              <StructuredListCell>
                {patient.address}
              </StructuredListCell>
            </StructuredListRow>
          )}
        </StructuredListBody>
      </StructuredListWrapper>
    </div>
  );
};

export default PatientsViewer;