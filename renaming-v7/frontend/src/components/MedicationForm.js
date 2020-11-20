import React, { useEffect, useState } from "react";
import { Dropdown ,FormGroup, ModalWrapper, TextInput
} from "carbon-components-react"

const MedicationForm = () => {
    // const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [dosage, setDosage] = useState("");
    const [days, setDays] = useState("");
    const [amount, setAmount] = useState("");
    // const [observationType, setObservationType] = useState("");
    // const [observationValue, setObservationValue] = useState("");
    const [patientId, setPatientId] = useState();
    
    const handleFormSubmit = () => {
        console.log('Medication Name: ', name);
        console.log('Dosage: ', dosage);
        console.log('Days: ', days);
        console.log('Amount: ', amount);
        console.log('Patient Id: ', patientId);
    // console.log('Medication Id: ', id);
    // console.log('MedicationType: ', observationType);
    // console.log('ObservationValue: ', observationValue);
    
    };

    return (
        <div>
            <ModalWrapper 
                aria-label = "Add Medication" 
                buttonTriggerText = "Add Medication" 
                disabled={false}
                handleSubmit={handleFormSubmit}
                hasScrollingContent={false}
                id="add-medication-modal"
                modalHeading="Add Medication"
                primaryButtonText="Update"
                renderTriggerButtonIcon={undefined}
                secondaryButtonText = "Cancel"
                selectorPrimaryFocus = "[data-modeal-primary-focus]" 
                shouldCloseAfterSubmit
                triggerButtonKind = "primary"
            >

                {/* <FormGroup
                invalid={false}
                //legendText="Id"
                message={false}
                >
                <TextInput
                    id="medication-id-input"
                    invalid={false}
                    invalidText="A valid value is required"
                    labelText="Medication Id"
                    light={true}
                    type="text"
                    value={id} //variable
                    onChange={e => setId(e.target.value)}
                />
                </FormGroup> */}

                <FormGroup
                    invalid={false}
                    legendText="Medication Name"
                    message={false}
                >
                <TextInput
                    id="medication-name-input"
                    invalid={false}
                    invalidText="A valid value is required"
                    labelText=""
                    light={true}
                    type="text"
                    value={name} //variable
                    onChange={e => setName(e.target.value)}
                />
                </FormGroup>
{
/* 
                <FormGroup
                    invalid={false}
                    legendText="Medication Type"
                    message={false}
                >
                <Dropdown
                    ariaLabel="Medicatrion Type Dropdown"
                    id="medication-type-input"
                    invalidText="A valid value is required"
                    items={["Blood Pressure", "Temperature", "Other"]}
                    label="Select Observation Type"
                    onChange={e => setObservationType(e.selectedItem)}    
                />
                </FormGroup> */}

                <FormGroup
                    invalid={false}
                    legendText="Dosage"
                    message={false}
                >
                <TextInput
                    id="medication-dosage-input"
                    invalid={false}
                    invalidText="A valid value is required"
                    labelText=""
                    light={true}
                    type="text"
                    value={dosage}
                    onChange={e => setDosage(e.target.value)}
                />
                </FormGroup>
                
                <FormGroup
                    invalid={false}
                    legendText="Days"
                    message={false}
                >
                <TextInput
                    id="medication-days-input"
                    invalid={false}
                    invalidText="A valid value is required"
                    labelText=""
                    light={true}
                    type="text"
                    value={days}
                    onChange={e => setDays(e.target.value)}
                />
                </FormGroup>
                <FormGroup
                    invalid={false}
                    legendText="Amount"
                    message={false}
                >
                <TextInput
                    id="medication-amount-input"
                    invalid={false}
                    invalidText="A valid value is required"
                    labelText=""
                    light={true}
                    type="text"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                />
                </FormGroup>

                <FormGroup
                    invalid={false}
                    legendText="Patient Id"
                    message={false}
                >
                <TextInput
                    id="patient-id-input"
                    invalid={false}
                    invalidText="A valid value is required"
                    labelText=""
                    light={true}
                    type="text"
                    value={patientId}
                    onChange={e => setPatientId(e.target.value)}
                />
                </FormGroup>

        </ModalWrapper>
      </div>
    );
};

export default MedicationForm;