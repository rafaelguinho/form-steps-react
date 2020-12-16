import {useReducer, useCallback} from 'react';
import asyncReducer from '../reducers/asyncReducer';
import REQUEST_STATUS from '../consts/requestStatus';

const useAsync = (initialState) => {
    const [state, dispatch] = useReducer(asyncReducer, {
      status: REQUEST_STATUS.IDLE,
      data: null,
      error: null,
      ...initialState,
    });
    const runPromise = useCallback((promise) => {
      dispatch({ type: REQUEST_STATUS.PENDING });
      promise.then(
        (data) => dispatch({ type: REQUEST_STATUS.RESOLVED, data }),
        (error) => dispatch({ type: REQUEST_STATUS.REJECTED, error })
      );
    }, []);
  
    return { ...state, runPromise };
  };

  export default useAsync;