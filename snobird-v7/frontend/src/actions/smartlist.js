import store from '../store';
import axios from '../axios/instance';


export const fetchSmartlistStarted = () => {
    return {
      type: "GET_SMARTLIST_STARTED"
    };
  };
  
  export const fetchSmartlistSuccess = post => {
    return {
      type: "GET_SMARTLIST_SUCCESS",
      data: post
    };
  };
  
  export const fetchSmartlistFailure = error => {
    console.error('Unable to get smartlist data');
    return {
      type: "GET_SMARTLIST_FAILURE",
      data: error
    };
  };
  
  export const fetchSmartlist = () => {
    store.dispatch(fetchSmartlistStarted());
    return (dispatch) => {
      return axios.get('/smartlist')
        .then(response => {
          console.log(response);
          dispatch(fetchSmartlistSuccess(response.data));
        })
        .catch(error => {
          dispatch(fetchSmartlistFailure(error));
        });
    };
  };
  