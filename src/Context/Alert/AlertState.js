import React, { useReducer } from "react";
import AlertContext from "../Alert/AlertContext";
import AlertReducer from "../Alert/AlertReducer";

import { SET_ALERT, REMOVE_ALERT } from "../Types";

const AlertState = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //Set Alert

  const setAlert = (msg, type) => {
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
    dispatch({
      type: SET_ALERT,
      payload: { msg, type },
    });
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
