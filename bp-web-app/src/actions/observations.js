import store from '../store';
import axios from '../axios/instance';

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
    type: "GET_INVENTORY_FAILURE",
    data: error
  };
};

export const fetchObservations = () => {
  store.dispatch(fetchObservationsStarted());
  return (dispatch) => {
    return axios.get('/observations')
      .then(response => {
        dispatch(fetchObservationsSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchObservationsFailure(error));
      });
  };
};
