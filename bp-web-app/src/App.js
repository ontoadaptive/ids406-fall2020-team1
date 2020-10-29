import React from 'react';
import './App.css';
import { MedicationsViewer, ObservationsViewer, PatientsViewer } from "./components";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        Demo v4
      </header>
      <MedicationsViewer/>
      <br></br>
      <ObservationsViewer />
    </div>
  );
}

export default App;
