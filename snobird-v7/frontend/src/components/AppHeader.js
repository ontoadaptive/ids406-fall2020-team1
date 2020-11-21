import React from "react";
import {
    Header,
    HeaderName,
    HeaderNavigation,
    HeaderMenuItem
} from "carbon-components-react/lib/components/UIShell";
import App from "../App";

const AppHeader = () => (
    <Header aria-label="SNOBIRD V7">
        <HeaderName id = "header-name" href="/" prefix = "">
            SNOBIRDv7
        </HeaderName>
        <HeaderNavigation aria-label = "SNOBIRD Navigation">
                <HeaderMenuItem id = "medications-menu-items" href="/medications">
                    Medication
                </HeaderMenuItem>
                <HeaderMenuItem id = "patient-menu-items" href = "/patients">
                    Patients
                </HeaderMenuItem>
                <HeaderMenuItem id = "timeline-menu-items" href="/timeline">
                    Timeline
                </HeaderMenuItem>
                <HeaderMenuItem id = "smartlist-menu-items" href="/smartlist">
                    Smartlist
                </HeaderMenuItem>
        </HeaderNavigation>
    </Header>
);

export default AppHeader;