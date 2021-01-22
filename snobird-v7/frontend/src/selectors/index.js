import { get } from "lodash";

// Smartlist Selector
export const getObservationsData = state => get(state.observations, "observationsData");
export const getObservationsIsFetching = state => get(state.observations, "isFetching");
export const getObservationsIsError = state => get(state.observations, "isError");

//user authentication selector
