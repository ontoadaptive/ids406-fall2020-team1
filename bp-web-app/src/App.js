import React from 'react';
import './App.css';
import { MedicationsViewer, ObservationsViewer, PatientsViewer } from "./components";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        Blood Pressure - Web App Example
      </header>
      <br />
      <PatientsViewer />
      <br />
      <MedicationsViewer />
      <br />
      <ObservationsViewer />
    </div>
  );
}

export default App;
