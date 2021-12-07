'use strict';

import * as actionEvents from './events';
import * as dataRequests from './dataRequests';

export function getSettings() {
  return (dispatch) => {
    dispatch({
      type: actionEvents.SET_SETTINGS
    });
  };
}

export const getUsers = () => {
  console.log("getUsers");
  return dispatch => {
    console.log("GetUsers dispatch");
    dataRequests.getUsers()
      .then(res => {
        const usersRes = res.data;
        dispatch({
          type: actionEvents.SET_GET_USERS_DATA,
          payload: usersRes
        });
        return usersRes;
      })
  };
};
