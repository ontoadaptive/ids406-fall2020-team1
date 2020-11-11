import React from 'react';
import './App.css';
import { AppHeader} from "./components";
import { Medications, Timeline, Patient } from "./pages";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Content } from "carbon-components-react/lib/components/UIShell";


const App = () => {
  return (
    //models Patient
    //timeline -> patient
    //view timeline -> filter timeline -> by patient 
    <div className="App">
      <AppHeader />
      <Content>
        <Router>
          <Switch>
            <Route path="/medications/">
              <Medications />
            </Route>
            <Route path="/timeline/">
              <Timeline />
            </Route>
            <Route path="/patient/">
              <Patient/>
            </Route>
            <Route path = "*">
              <Timeline/>
            </Route>
          </Switch>
        </Router>
      </Content>
    </div>
  );
}

export default App;
