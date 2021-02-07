import React from "react";
import {
    SideNav,
    SideNavItems,
    SideNavLink,
    SideNavMenu,
    SideNavMenuItem,
    
} from "carbon-components-react";

const SideNavPanel = () => (
    <>
        <SideNav aria-label="Side navigation" expanded={true} isPersistent={true} >
            <SideNavItems>
                <SideNavMenu title ="Observations" >
                    <SideNavMenuItem href="/observation-manager">
                        Import New Data    
                    </SideNavMenuItem> 
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
    </>
);

export default SideNavPanel;