import { get } from "lodash";

// Smartlist Selector
export const getSmartlistData = state => get(state.smartlist, "smartlistData").filter(smartlist => smartlist.bp_value >= 140);
export const getSmartlistIsFetching = state => get(state.smartlist, "isFetching");
export const getSmartlistIsError = state => get(state.smartlist, "isError");