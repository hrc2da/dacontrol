import ROSLIB from "roslib";

export const SET_ROBOT_STATUS = "SET_ROBOT_STATUS";
export const SET_STOP_CLIENT = "SET_STOP_CLIENT";
export const SET_RECALIBRATE_CLIENT = "SET_RECALIBRATE_CLIENT";
export const SET_HOMING_CLIENT = "SET_HOMING_CLIENT";
export const SET_PAUSE_CLIENT = "SET_PAUSE_CLIENT";
export const SET_RESTART_CLIENT = "SET_RESTART_CLIENT";
export const SET_POSE = "SET_POSE";
export const SET_POSE_LISTENER = "SET_POSE_LISTENER";

export const setRobotStatus = status => dispatch => {
  return dispatch({
    type: SET_ROBOT_STATUS,
    payload: status
  });
};

export const callStop = () => (dispatch, getState) => {
  try {
    const client = getState().robot.stopClient;
    const request = new ROSLIB.ServiceRequest({
      //command: "stop_arm"
    });
    dispatch(setRobotStatus("sending stop command"));
    client.callService(request, result => {
      dispatch(setRobotStatus("robot is stopped"));
    });
  } catch {
    return;
  }
};

export const callRecalibrate = () => (dispatch, getState) => {
  try {
    const client = getState().robot.recalibrateClient;
    const goal = new ROSLIB.Goal({
      actionClient: client,
      goalMessage: {
        empty: "calibration request from dacontrol"
      }
    });
    dispatch(setRobotStatus("sending calibrate command"));
    goal.on("start", () => {
      dispatch(setRobotStatus("calibration goal received"));
    });
    goal.on("feedback", feedback => {
      console.log("Feedback: " + feedback.status);
      dispatch(setRobotStatus(feedback.status));
    });

    goal.on("result", result => {
      //console.log('Goal Completion Status: ' + status);
      console.log("Final Result: " + JSON.stringify(result));
      if (result.length > 1) {
        dispatch(setRobotStatus("successfully calibrated"));
      } else {
        dispatch(setRobotStatus("calibration failed to return params"));
      }
    });
    goal.send();
  } catch {
    return;
  }
};

export const callHome = () => (dispatch, getState) => {
  try {
    const client = getState().robot.homingClient;
    const request = new ROSLIB.ServiceRequest({
      command: "home_arm"
    });
    dispatch(setRobotStatus("sending homing command"));
    client.callService(request, result => {
      dispatch(setRobotStatus("done homing"));
    });
  } catch {
    return;
  }
};

export const callPause = () => (dispatch, getState) => {
  try {
    const client = getState().robot.pauseClient;
    const request = new ROSLIB.ServiceRequest({
      command: "pause_arm"
    });
    dispatch(setRobotStatus("sending pause command"));
    client.callService(request, result => {
      dispatch(setRobotStatus("robot is paused"));
    });
  } catch {
    return;
  }
};

export const callRestart = () => (dispatch, getState) => {
  try {
    const client = getState().robot.restartClient;
    const request = new ROSLIB.ServiceRequest({
      command: "restart_arm"
    });
    dispatch(setRobotStatus("sending restart command"));
    client.callService(request, result => {
      dispatch(setRobotStatus("robot is restarted"));
    });
  } catch {
    return;
  }
};

export const setupStop = (dispatch, rosInstance) => {
  /*
        Emergency Stopow
    */
  const stopClient = new ROSLIB.Service({
    ros: rosInstance,
    // name: '/stop_arm',
    // serviceType: '/dabot/ArmCommand'
    name: "/j2s7s300_driver/in/stop",
    serviceType: "/moveit_msgs/MoveGroupActionFeedback"
  });
  dispatch({
    type: SET_STOP_CLIENT,
    payload: stopClient
  });
};

export const setupRecalibrate = (dispatch, rosInstance) => {
  const recalibrateClient = new ROSLIB.ActionClient({
    ros: rosInstance,
    serverName: "/calibrate_arm",
    actionName: "/dabot/CalibrateAction"
  });
  dispatch({
    type: SET_RECALIBRATE_CLIENT,
    payload: recalibrateClient
  });
};

export const setupHome = (dispatch, rosInstance) => {
  const homingClient = new ROSLIB.Service({
    ros: rosInstance,
    name: "/home_arm",
    serviceType: "/dabot/ArmCommand"
  });
  dispatch({
    type: SET_HOMING_CLIENT,
    payload: homingClient
  });
};

export const setupPause = (dispatch, rosInstance) => {
  const pauseClient = new ROSLIB.Service({
    ros: rosInstance,
    name: "/pause_arm",
    serviceType: "/dabot/CalibrateAction"
  });
  dispatch({
    type: SET_PAUSE_CLIENT,
    payload: pauseClient
  });
};

export const setupRestart = (dispatch, rosInstance) => {
  const restartClient = new ROSLIB.Service({
    ros: rosInstance,
    name: "/restart_arm",
    serviceType: "/dabot/ArmCommand"
    // name: '/j2s7s300_driver/in/start',
    // serviceType: '/moveit_msgs/MoveGroupActionFeedback'
  });
  dispatch({
    type: SET_RESTART_CLIENT,
    payload: restartClient
  });
};

export const setupPoseListener = (dispatch, rosInstance) => {
  const poseListener = new ROSLIB.Topic({
    ros: rosInstance,
    name: "/j2s7s300_driver/out/tool_pose",
    messageType: "geometry_msgs/PoseStamped"
  });
  poseListener.subscribe(message => {
    dispatch({
      type: SET_POSE,
      payload: message.pose
    });
  });
  dispatch({
    type: SET_POSE_LISTENER,
    payload: poseListener
  });
};

/*******************************************************
 * Show current RosParams (and update them)
 *******************************************************/
/////////////////////////////////////////////////////////
export const setupRosParamListener = (dispatch, rosInstance) => {};
