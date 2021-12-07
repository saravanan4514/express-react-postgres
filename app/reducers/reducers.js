'use strict';

import * as actionEvents from '../actions/events';

export function settings (state = 'settings', action) {
  let actionType = action.type,
      newState = (state !== undefined) ? state : {};

  if (actionType === actionEvents.SET_SETTINGS) {
    newState = {
      settings: 'settingsState'
    };
  }

  return newState;
}

export function getUsers (state, action) {
  let actionType = action.type,
      newState = Object.assign({}, state);

  if (actionType === actionEvents.SET_GET_USERS_DATA) {
    newState = action.payload;
  }
  return newState;
}
