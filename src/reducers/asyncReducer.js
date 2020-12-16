import REQUEST_STATUS from '../consts/requestStatus';

  const asyncReducer = (state, action) => {
    switch (action.type) {
      case REQUEST_STATUS.PENDING:
        return {
          status: REQUEST_STATUS.PENDING,
          data: null,
          error: null,
        };
  
      case REQUEST_STATUS.RESOLVED:
        return {
          status: REQUEST_STATUS.RESOLVED,
          data: action.data,
          error: null,
        };
  
      case REQUEST_STATUS.REJECTED:
        return {
          status: REQUEST_STATUS.REJECTED,
          data: null,
          error: action.error,
        };
  
      default:
        throw Error(`Unhandled action: ${action.type}`);
    }
  };

  export default asyncReducer;