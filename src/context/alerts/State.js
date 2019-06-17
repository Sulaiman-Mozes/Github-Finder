import React, { useReducer } from 'react';
import AlertContext from './index';
import AlertReducer from './Reducer';
import * as types from '../actionTypes';

const AlertState = props => {
  const initialState = {
    alert: null,
  }

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set Alert
  const setAlert = (msg, type) => {
    dispatch({
      type: types.SET_ALERT,
      payload: { msg, type }
    })

    setTimeout(() => dispatch({ type: types.REMOVE_ALERT }), 3000);
  };

  const { alert } = state;

  return <AlertContext.Provider
    value={{ alert, setAlert }}
  >
    {props.children}
  </AlertContext.Provider>
}

export default AlertState;
