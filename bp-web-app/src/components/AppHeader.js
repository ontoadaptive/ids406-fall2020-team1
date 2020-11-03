import React from "react";
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem
} from "carbon-components-react/lib/components/UIShell";

const AppHeader = () => (
  <Header aria-label="Blood Pressure - Web App Example">
    <HeaderName id="header-name" href="/" prefix="">
        BP Web App
    </HeaderName>
    <HeaderNavigation aria-label="BP Web App Navigation">
      <HeaderMenuItem id="patients-menu-item" href="/">
        Patients
      </HeaderMenuItem>
      <HeaderMenuItem id="medications-menu-item" href="/medications">
        Medications
      </HeaderMenuItem>
      <HeaderMenuItem id="observations-menu-item" href="/observations">
        Observations
      </HeaderMenuItem>
    </HeaderNavigation>
  </Header>
);

export default AppHeader;
