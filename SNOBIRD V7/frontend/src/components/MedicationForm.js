import React, { useEffect, useState } from "react";
import { Dropdown ,FormGroup, ModalWrapper, TextInput
} from "carbon-components-react"

const MedicationForm = () => {
    const [id, setId] = useState("");
    const [observationType, setObservationType] = useState("");
    const [observationValue, setObservationValue] = useState("");
    const [patientId, setPatientId] = useState();
    
    const handleFormSubmit = () => {
    console.log('Medication Id: ', id);
    console.log('MedicationType: ', observationType);
    console.log('ObservationValue: ', observationValue);
    console.log('Patient Id: ', patientId);
    };

    return (
        <div>
            <ModalWrapper 
                aria-label = "Add Medication" 
                buttonTriggerText = "Add Medication" 
                diabled={false}
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
                <FormGroup
                invalid={false}
                legendText="Observation Id"
                message={false}
                >
                <TextInput
                    id="observation-id-input"
                    invalid={false}
                    invalidText="A valid value is required"
                    labelText="Observation Id"
                    light={true}
                    type="text"
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
                </FormGroup>
                <FormGroup
                    invalid={false}
                    legendText="Observation Type"
                    message={false}
                >
                <Dropdown
                    ariaLabel="Observation Type Dropdown"
                    id="observation-type-input"
                    invalidText="A valid value is required"
                    items={["Blood Pressure", "Temperature", "Other"]}
                    label="Select Observation Type"
                    onChange={e => setObservationType(e.selectedItem)}    
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
                    labelText="Patient Id"
                    light={true}
                    type="text"
                    value={patientId}
                    onChange={e => setPatientId(e.target.value)}
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
                    labelText="Patient Id"
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