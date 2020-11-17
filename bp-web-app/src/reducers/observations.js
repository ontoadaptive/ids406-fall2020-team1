const initialData = {
  observationsData: [],
  isFetching: false,
  isError: '',
};

const observationsReducer = (state = initialData, action) => {
  switch (action.type) {
    case "GET_OBSERVATIONS_STARTED":
      return {
        ...state,
        observationsData: [],
        isFetching: true,
        isError: ''
      };
    case "GET_OBSERVATIONS_SUCCESS":
      return {
        ...state,
        observationsData: action.data,
        isFetching: false,
        isError: ''
      };
    case "GET_OBSERVATIONS_FAILURE":
      return {
        ...state,
        isFetching: false,
        isError: action.error
      };
    default:
      return state;
  }
};

export default observationsReducer;
