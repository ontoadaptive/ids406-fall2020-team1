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
                <HeaderMenuItem id = "patients-menu-items" href="/medications">
                Medication
                </HeaderMenuItem>
                
        </HeaderNavigation>
    </Header>
);

export default AppHeader;