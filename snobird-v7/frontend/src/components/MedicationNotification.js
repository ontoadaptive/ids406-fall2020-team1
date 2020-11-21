import React from 'react';
import { Button, ToastNotification,   } from "carbon-components-react"
//button that makes a notification

const MedicationNotification = () => {
    
    return (
        <>
            <Button kind = "danger">Alert</Button>
            <ToastNotification
                title = "Test Notification"
                caption = "Test"
                kind = "warning"
            />
        </>
    );
};

export default MedicationNotification;