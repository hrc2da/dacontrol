/*
    Handles changes to the DA websocket url and connection status
*/
import {
  SET_ROSBRIDGE_URL,
  SET_ROSBRIDGE_STATUS,
  SET_ROSBRIDGE_SERVER
} from "../actions/rosBridgeActions.js";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_ROSBRIDGE_URL:
      return {
        ...state,
        url: action.payload
      };
    case SET_ROSBRIDGE_STATUS:
      return {
        ...state,
        status: action.payload
      };
    case SET_ROSBRIDGE_SERVER:
      return {
        ...state,
        server: action.payload
      };
    default:
      return state;
  }
};
