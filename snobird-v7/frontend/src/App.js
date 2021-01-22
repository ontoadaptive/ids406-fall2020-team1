import React from 'react';
import './App.css';
import { AppHeader} from "./components";
import { Medications, Timeline, Patient, Smartlist, Login, Profile } from "./pages";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Content } from "carbon-components-react/lib/components/UIShell";


const App = () => {
  return (
    <div className="App">
      <AppHeader />
      <Content>
        <Router>
          <Switch>
            <Route path="/patients/">
              <Patient />
            </Route>
            <Route path="/medications/">
              <Medications />
            </Route>
            <Route path="/timeline/">
              <Timeline />
            </Route>
            <Route path="/smartlist/">
              <Smartlist/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/profile">
              <Profile/>
            </Route>
            <Route path = "*">
              <Patient />
            </Route>
          </Switch>
        </Router>
      </Content>
    </div>
  );
}

export default App;
