import { get } from "lodash";

// Smartlist Selector
export const getSmartlistData = state => get(state.smartlist, "smartlistData");
export const getSmartlistIsFetching = state => get(state.smartlist, "isFetching");
export const getSmartlistIsError = state => get(state.smartlist, "isError");