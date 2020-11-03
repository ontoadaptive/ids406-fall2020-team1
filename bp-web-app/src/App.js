import React from 'react';
import './App.css';
import { AppHeader } from "./components";
import { Medications, Observations, Patients } from "./pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Content } from "carbon-components-react/lib/components/UIShell";

const App = () => {
  return (
    <div className="App">
      <AppHeader />
      <Content>
        <Router>
          <Switch>
            <Route path="/medications">
              <Medications />
            </Route>
            <Route path="/observations">
              <Observations />
            </Route>
            <Route path="/" exact>
              <Patients />
            </Route>
            <Route path="*">
              <Patients />
            </Route>
          </Switch>
        </Router>
      </Content>
    </div>
  );
}

export default App;
