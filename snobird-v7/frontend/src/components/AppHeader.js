import React from "react";
import {
    HeaderContainer,
    Header,
    HeaderName,
    HeaderNavigation,
    HeaderMenuItem,
    HeaderMenuButton,
    HeaderGlobalAction,
    HeaderGlobalBar,
    SideNav,
    SideNavItems,
    SideNavLink,
    SideNavMenu,
    SideNavMenuItem
} from "carbon-components-react/lib/components/UIShell";
import { User32 } from '@carbon/icons-react';
import {LoginRedirect} from '../services/';

const AppHeader = () => {
    return (
    <>
        <HeaderContainer
        render={({isSideNavExpanded,onClickSideNavExpand}) => (
            <Header aria-label="SNOBIRD V7">
                
                <HeaderMenuButton
                    aria-label="open menu"
                    onClick={onClickSideNavExpand}
                    isActive={isSideNavExpanded}
                />
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
                <SideNav aria-label="Side navigation" expanded={isSideNavExpanded} isRail = {true}>
                    <SideNavItems>
                        <SideNavMenu title ="Observations" > 
                            <SideNavMenuItem href="/medications">
                                Medication
                            </SideNavMenuItem>
                        </SideNavMenu>
                        <SideNavLink href ="/timeline">
                            Timeline
                        </SideNavLink>
                        <SideNavLink href ="/smartlists">
                            Smartlist
                        </SideNavLink>
                    </SideNavItems>
                </SideNav>
            </Header>
        )}
    />
    </>
    );
    };

export default AppHeader;