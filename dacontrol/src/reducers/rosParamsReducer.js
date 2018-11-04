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
      return {
        ...state, params: {
          ...state.params, [action.payload.param] : action.payload.value} //[key] is an ED6 thing...
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
