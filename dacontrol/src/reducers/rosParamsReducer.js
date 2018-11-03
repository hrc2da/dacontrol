/*
    Handles changes to ros params
*/
import {
  SET_ROS_PARAMS,
  SET_ROS_PARAM_ACCESSORS
} from "../actions/rosParamsActions.js";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_ROS_PARAMS:
      console.log("setting params");
      return {
        ...state,
        params: action.payload
      }; //replace the entire state
    case SET_ROS_PARAM_ACCESSORS:
      return {
        ...state,
        accessors: action.payload
      };
    default:
      return state;
  }
};
