import store from '../store';
import { betaInstance, instance } from '../axios';


export const fetchObservationsStarted = () => {
    return {
      type: "GET_OBSERVATIONS_STARTED"
    };
  };
  
  export const fetchObservationsSuccess = post => {
    return {
      type: "GET_OBSERVATIONS_SUCCESS",
      data: post
    };
  };
  
  export const fetchObservationsFailure = error => {
    console.error('Unable to get observations data');
    return {
      type: "GET_OBSERVATIONS_FAILURE",
      data: error
    };
  };
  const Beta = true; 
  export const fetchObservations = () => {
    const url = Beta ? betaInstance : instance;
  
    store.dispatch(fetchObservationsStarted());
    return (dispatch) => {
      return url.get('/observation')
        .then(response => {
          dispatch(fetchObservationsSuccess(response.data));
        })
        .catch(error => {
          dispatch(fetchObservationsFailure(error));
        });
    };
  };
  