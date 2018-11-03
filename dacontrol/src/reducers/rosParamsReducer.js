/*
    Handles changes to ros params
*/
import { SET_ROS_PARAMS } from "../actions/rosParamsActions.js";

export default (state = {}, action) => {
  switch (action) {
    case SET_ROS_PARAMS:
      return action.payload; //replace the entire state
    default:
      return state;
  }
};
