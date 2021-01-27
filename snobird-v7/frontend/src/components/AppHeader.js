import React from "react";
import {
    Header,
    HeaderName,
    HeaderNavigation,
    HeaderMenuItem,
    HeaderGlobalAction,
    HeaderGlobalBar,
} from "carbon-components-react/lib/components/UIShell";
import { User32 } from '@carbon/icons-react';
import {LoginRedirect} from '../services/';

const AppHeader = () => {
    return (
        <>              
            <Header aria-label="SNOBIRD V7">
                <HeaderName id = "header-name" href="/" prefix = "">
                    SNOBIRDv7
                </HeaderName>
                <HeaderNavigation aria-label = "SNOBIRD Navigation">
                    <HeaderMenuItem id = "patient-menu-items" href = "/patients">
                        Patients
                    </HeaderMenuItem>
                </HeaderNavigation>
                <HeaderGlobalBar>
                    <HeaderGlobalAction id = "login-menu-items" aria-label="login" onClick={LoginRedirect}>
                        <User32/>
                    </HeaderGlobalAction>
                </HeaderGlobalBar>
            </Header>
        </>
    );
};

export default AppHeader;