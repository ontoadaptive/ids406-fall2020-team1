import { get } from "lodash";

// Observations Selectors
export const getObservationsData = state => get(state.observations, "observationsData");
export const getBloodPressureObservationsData = state => get(state.observations, "observationsData").filter(observation => observation.type === "blood-pressure");
export const getObservationsIsFetching = state => get(state.observations, "isFetching");
export const getObservationsIsError = state => get(state.observations, "isError");
