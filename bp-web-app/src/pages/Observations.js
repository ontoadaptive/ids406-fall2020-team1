import React from "react";
import { NewObservationForm, ObservationsViewer } from "../components";

const Observations = () => {
  return (
    <>
    <ObservationsViewer />
    <br />
    <NewObservationForm />
    </>
  );
};

export default Observations;
