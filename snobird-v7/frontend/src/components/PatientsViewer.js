import React, { useEffect, useState } from "react";
import { betaInstance, instance } from '../axios'

import { 
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell
} from 'carbon-components-react';

const Beta = false;
const PatientsViewer = () => {
  const [patientsData, setPatientsData] = useState([]);

  useEffect(() => {
    const url = Beta ? betaInstance : instance;
    url.get('patient/')
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