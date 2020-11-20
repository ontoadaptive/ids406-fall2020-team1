const initialData = {
    smartlistData: [],
    isFetching: false,
    isError: '',
  };
  
  const smartlistReducer = (state = initialData, action) => {
    switch (action.type) {
      case "GET_SMARTLIST_STARTED":
        return {
          ...state,
          smartlistData: [],
          isFetching: true,
          isError: ''
        };
      case "GET_SMARTLIST_SUCCESS":
        return {
          ...state,
          smartlistData: action.data,
          isFetching: false,
          isError: ''
        };
      case "GET_SMARTLIST_FAILURE":
        return {
          ...state,
          isFetching: false,
          isError: action.error
        };
      default:
        return state;
    }
  };
  
  export default smartlistReducer;
  