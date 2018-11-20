import ROSLIB from "roslib";
export const SET_ROS_PARAMS = "SET_ROS_PARAMS";
export const SET_ROS_PARAM_ACCESSORS = "SET_ROS_PARAM_ACCESSORS";
export const ORBITS_MIN = "ORBITS_MIN";
export const ORBITS_MAX = "ORBITS_MAX";
export const ORBITS_LEFT = "ORBITS_LEFT";
export const ORBITS_RIGHT = "ORBITS_RIGHT";
export const TUIO_X_MIN = "TUIO_X_MIN";
export const TUIO_Y_MIN = "TUIO_Y_MIN";
export const TUIO_X_MAX = "TUIO_X_MAX";
export const TUIO_Y_MAX = "TUIO_Y_MAX";
export const ARM_X_MIN = "ARM_X_MIN";
export const ARM_Y_MIN = "ARM_Y_MIN";
export const ARM_X_DIST = "ARM_X_DIST";
export const ARM_Y_DIST = "ARM_Y_DIST";
export const GRASP_HEIGHT = "GRASP_HEIGHT";
export const DROP_HEIGHT = "DROP_HEIGHT";

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

//get ALL of the ros params
export const getRosParams = (dispatch, getState) => {
  console.log("GETTTINGTHEPARAMMMMMSS");
  // ros.getParams(params => {
  //   console.log("Params", params);
  //   dispatch({
  //     type: SET_ROS_PARAMS,
  //     payload: params
  //   });
  // });
  // ^^ this gets a LIST of params. NOT what we want

  //iterate over the accessors and call each one.
  const state = getState();
  console.log("GOT THE STATE");
  const accessors = state.rosParams.accessors;
  console.log("ACCESSORS", accessors);
 for(let param in accessors){
   const accessor = accessors[param];
    accessor.get((val)=>{
      dispatch({
        type: SET_ROS_PARAMS,
        payload: {param: accessor.name, value: val}
      });
    });
  }
};

//get a single ros param
export const getRosParam = (paramName) => (dispatch, getState) =>{
  try {
    const accessor = getState().rosParams.accessors[paramName];
    accessor.get((val)=>{
      dispatch({
        type: SET_ROS_PARAMS,
        payload: {param: accessor.name, value: val}
      });
    })
  }
  catch(e) {
    console.log(e);
  }

}


export const setRosParam = (paramName, value) => (dispatch, getState) => {
  try {
    getState().rosParams.accessors[paramName].set(value);
  } catch (e) {
    console.log(e);
  }
  setTimeout(500,dispatch(getRosParam(paramName))); //this is very hacky
};

export const setupRosParamAccessors = (dispatch, getState, rosInstance) => {
  let rosParamSetters = {};
  rosParamSetters[ORBITS_MIN] = new ROSLIB.Param({
    ros: rosInstance,
    name: ORBITS_MIN
  });
  rosParamSetters[ORBITS_MAX] = new ROSLIB.Param({
    ros: rosInstance,
    name: ORBITS_MAX
  });
  rosParamSetters[ORBITS_LEFT] = new ROSLIB.Param({
    ros: rosInstance,
    name: ORBITS_LEFT
  });
  rosParamSetters[ORBITS_RIGHT] = new ROSLIB.Param({
    ros: rosInstance,
    name: ORBITS_RIGHT
  });
  rosParamSetters[GRASP_HEIGHT] = new ROSLIB.Param({
    ros: rosInstance,
    name: GRASP_HEIGHT
  });
  rosParamSetters[DROP_HEIGHT] = new ROSLIB.Param({
    ros: rosInstance,
    name: DROP_HEIGHT
  });
  rosParamSetters[TUIO_X_MIN] = new ROSLIB.Param({
    ros: rosInstance,
    name: TUIO_X_MIN
  });
  rosParamSetters[TUIO_Y_MIN] = new ROSLIB.Param({
    ros: rosInstance,
    name: TUIO_Y_MIN
  });
  rosParamSetters[TUIO_X_MAX] = new ROSLIB.Param({
    ros: rosInstance,
    name: TUIO_X_MAX
  });
  rosParamSetters[TUIO_Y_MAX] = new ROSLIB.Param({
    ros: rosInstance,
    name: TUIO_Y_MAX
  });
  rosParamSetters[ARM_X_MIN] = new ROSLIB.Param({
    ros: rosInstance,
    name: ARM_X_MIN
  });
  rosParamSetters[ARM_Y_MIN] = new ROSLIB.Param({
    ros: rosInstance,
    name: ARM_Y_MIN
  });
  rosParamSetters[ARM_X_DIST] = new ROSLIB.Param({
    ros: rosInstance,
    name: ARM_X_DIST
  });
  rosParamSetters[ARM_Y_DIST] = new ROSLIB.Param({
    ros: rosInstance,
    name: ARM_Y_DIST
  });
  dispatch({
    type: SET_ROS_PARAM_ACCESSORS,
    payload: rosParamSetters
  });
  console.log("CALLLLLINNNGGG GETROSPARAMSSSSSSS");
  getRosParams(dispatch,getState);
  console.log("IT'S BEEN CALLED");
}
// # table boundaries
// TUIO_X_MIN: 0.09
// TUIO_Y_MIN: 0.17
// TUIO_X_MAX: 0.95
// TUIO_Y_MAX: 0.8
// ARM_X_DIST: 0.77
// ARM_Y_DIST: 0.37

// GRASP_HEIGHT: 0.1
// DROP_HEIGHT: 0.3
