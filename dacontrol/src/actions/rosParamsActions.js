import ROSLIB from "roslib";
export const SET_ROS_PARAMS = "SET_ROS_PARAMS";
export const SET_ROS_PARAM_ACCESSORS = "SET_ROS_PARAM_ACCESSORS";
// # orbit boundaries
// ORBITS_MIN: 0.165
// ORBITS_MAX: 0.72
// ORBITS_LEFT: 0.61
// ORBITS_RIGHT: 0.16

// # table boundaries
// TUIO_X_MIN: 0.09
// TUIO_Y_MIN: 0.17
// TUIO_X_MAX: 0.95
// TUIO_Y_MAX: 0.8
// ARM_X_DIST: 0.77
// ARM_Y_DIST: 0.37

// GRASP_HEIGHT: 0.1
// DROP_HEIGHT: 0.3

export const getRosParams = (dispatch, ros) => {
  console.log("GETTTINGTHEPARAMMMMMSS");
  ros.getParams(params => {
    console.log("Params", params);
    dispatch({
      type: SET_ROS_PARAMS,
      payload: params
    });
  });
};

export const setRosParam = (paramName, value) => (dispatch, getState) => {
  try {
    getState().rosParams.setters[paramName].set(value);
  } catch (e) {
    console.log(e);
  }
};

export const setupRosParamAccessors = (dispatch, rosInstance) => {
  let rosParamSetters = {};
  rosParamSetters["orbitsMin"] = new ROSLIB.Param({
    ros: rosInstance,
    name: "ORBITS_MIN"
  });
  rosParamSetters["orbitsMax"] = new ROSLIB.Param({
    ros: rosInstance,
    name: "ORBITS_MAX"
  });
  rosParamSetters["orbitsLeft"] = new ROSLIB.Param({
    ros: rosInstance,
    name: "ORBITS_LEFT"
  });
  rosParamSetters["orbitsRight"] = new ROSLIB.Param({
    ros: rosInstance,
    name: "ORBITS_RIGHT"
  });
  rosParamSetters["graspHeight"] = new ROSLIB.Param({
    ros: rosInstance,
    name: "GRASP_HEIGHT"
  });
  rosParamSetters["dropHeight"] = new ROSLIB.Param({
    ros: rosInstance,
    name: "DROP_HEIGHT"
  });
  rosParamSetters["tuioXMin"] = new ROSLIB.Param({
    ros: rosInstance,
    name: "TUIO_X_MIN"
  });
  rosParamSetters["tuioYMin"] = new ROSLIB.Param({
    ros: rosInstance,
    name: "TUIO_Y_MIN"
  });
  rosParamSetters["tuioXMax"] = new ROSLIB.Param({
    ros: rosInstance,
    name: "TUIO_X_MAX"
  });
  rosParamSetters["tuioYMax"] = new ROSLIB.Param({
    ros: rosInstance,
    name: "TUIO_Y_MAX"
  });
  rosParamSetters["armXMin"] = new ROSLIB.Param({
    ros: rosInstance,
    name: "ARM_X_MIN"
  });
  rosParamSetters["armYMin"] = new ROSLIB.Param({
    ros: rosInstance,
    name: "ARM_Y_MIN"
  });
  rosParamSetters["armXMax"] = new ROSLIB.Param({
    ros: rosInstance,
    name: "ARM_X_MAX"
  });
  rosParamSetters["armYMax"] = new ROSLIB.Param({
    ros: rosInstance,
    name: "ARM_Y_MAX"
  });
  dispatch({
    type: SET_ROS_PARAM_ACCESSORS,
    payload: rosParamSetters
  });
};
