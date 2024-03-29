import React, { useState } from "react";
import { FormGroup, ModalWrapper, TextInput
} from "carbon-components-react"
import betaInstance from "../axios/betaInstance";
import instance from "../axios/instance";

const Beta = true;

const MedicationForm = () => {
    const [name, setName] = useState("");
    const [dose, setDose] = useState("");
    const [days, setDays] = useState("");
    const [times,setTimes] = useState("")
    const [amount, setAmount] = useState("");

    const [patientId, setPatientId] = useState();

    const handleFormSubmit = () => {
        const data = {
            name: name,
            dose: dose,
            days: days,
            times: times,
            amount: amount,
            patient: patientId
        };

        const url = Beta ? betaInstance : instance;
        url.post("/medication/", data)
        .then(response => {
            console.log(response)
        })
        .catch( error => {
            console.log("Error sending medication data to API") 
        });
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
                primaryButtonText="Add"
                renderTriggerButtonIcon={undefined}
                secondaryButtonText = "Cancel"
                selectorPrimaryFocus = "[data-modeal-primary-focus]" 
                shouldCloseAfterSubmit
                triggerButtonKind = "primary"
            >

                <FormGroup
                    invalid={false}
                    legendText="Medication Name"
                    message={false}
                >
                <TextInput
                    id="medication-name-input"
                    invalid={false}
                    invalidText="A valid value is required"
                    light={true}
                    type="text"
                    value={name} 
                    onChange={e => setName(e.target.value)}
                />
                </FormGroup>

                <FormGroup
                    invalid={false}
                    legendText="Dose"
                    message={false}
                >
                <TextInput
                    id="medication-dose-input"
                    invalid={false}
                    invalidText="A valid value is required"
                    light={true}
                    type="text"
                    value={dose}
                    onChange={e => setDose(e.target.value)}
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
                    legendText="Time"
                    message={false}
                >
                <TextInput
                    id="medication-times-input"
                    invalid={false}
                    invalidText="A valid value is required"
                    labelText=""
                    light={true}
                    type="text"
                    value={times}
                    onChange={e => setTimes(e.target.value)}
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