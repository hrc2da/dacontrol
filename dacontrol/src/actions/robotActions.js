import ROSLIB from "roslib";
import isEqual from "lodash.isequal";

export const SET_ROBOT_STATUS = "SET_ROBOT_STATUS";
export const SET_STOP_CLIENT = "SET_STOP_CLIENT";
export const SET_MOVEIT_CANCEL_CLIENT = "SET_MOVEIT_CANCEL_CLIENT";
export const SET_RECALIBRATE_CLIENT = "SET_RECALIBRATE_CLIENT";
export const SET_HOMING_CLIENT = "SET_HOMING_CLIENT";
export const SET_PAUSE_CLIENT = "SET_PAUSE_CLIENT";
export const SET_RESTART_CLIENT = "SET_RESTART_CLIENT";
export const SET_POSE = "SET_POSE";
export const SET_POSE_LISTENER = "SET_POSE_LISTENER";
export const SET_GOAL_POSITION = "SET_GOAL_POSITION";
export const SET_GOAL_POSITION_X = "SET_GOAL_POSITION_X";
export const SET_GOAL_POSITION_Y = "SET_GOAL_POSITION_Y";
export const SET_GOAL_POSITION_Z = "SET_GOAL_POSITION_Z";
export const SET_GOAL_ORIENTATION_X = "SET_GOAL_ORIENTATION_X";
export const SET_GOAL_ORIENTATION_Y = "SET_GOAL_ORIENTATION_Y";
export const SET_GOAL_ORIENTATION_Z = "SET_GOAL_ORIENTATION_Z";
export const SET_GOAL_ORIENTATION_W = "SET_GOAL_ORIENTATION_W";
export const SET_MOVE_POSE_DA_CLIENT = "SET_MOVE_POSE_DA_CLIENT";

export const setRobotStatus = status => dispatch => {
  return dispatch({
    type: SET_ROBOT_STATUS,
    payload: status
  });
};
/*****************************************************
 * Emergency stop functions
 *****************************************************/
///////////////////////////////////////////////////////
export const setupStop = (dispatch, rosInstance) => {
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

export const callStop = () => (dispatch, getState) => {
  try {
    const client = getState().robot.stopClient;
    const request = new ROSLIB.ServiceRequest({
      //command: "stop_arm"
    });
    dispatch(setRobotStatus("sending stop command"));
    client.callService(request, result => {
      dispatch(setRobotStatus("robot is stoppe"));
    });
  } catch {
    return;
  }
};

/*****************************************************
 * Recalibration Functions
 *****************************************************/
/////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////
export const setupHome = (dispatch, rosInstance) => {
  const homingClient = new ROSLIB.Service({
    ros: rosInstance,
    // name: '/home_arm',
    // serviceType: '/dabot/ArmCommand'
    name: "/j2s7s300_driver/in/home_arm",
    serviceType: "/moveit_msgs/MoveGroupActionFeedback"
  });
  dispatch({
    type: SET_HOMING_CLIENT,
    payload: homingClient
  });
};
export const callHome = () => (dispatch, getState) => {
  try {
    const client = getState().robot.homingClient;
    const request = new ROSLIB.ServiceRequest({
      //command: "home_arm"
    });
    dispatch(setRobotStatus("sending homing command"));
    client.callService(request, result => {
      dispatch(setRobotStatus("done homing"));
    });
  } catch {
    return;
  }
};

/*****************************************************
 * Pause functions
 *****************************************************/
/////////////////////////////////////////////////////////////
// export const setupPause = (dispatch, rosInstance) => {
//     const pauseClient = new ROSLIB.Service({
//         ros: rosInstance,
//         name: '/pause_arm',
//         serviceType: '/dabot/CalibrateAction'
//     });
//     dispatch({
//         type: SET_PAUSE_CLIENT,
//         payload: pauseClient
//     });
// }
// export const callPause = () => (dispatch, getState) => {
//     try{
//         const client = getState().robot.pauseClient;
//         const request = new ROSLIB.ServiceRequest({
//             command: "pause_arm"
//         });
//         dispatch(setRobotStatus("sending pause command"));
//         client.callService(request, (result)=>{
//             dispatch(setRobotStatus("robot is paused"));
//         })
//     }
//     catch{
//         return;
//     }
// }

export const setupPause = (dispatch, rosInstance) => {
  const pauseClient = new ROSLIB.Topic({
    ros: rosInstance,
    name: "/config_to_action_sleep",
    messageType: "std_msgs/String"
  });
  dispatch({
    type: SET_PAUSE_CLIENT,
    payload: pauseClient
  });
};
export const callPause = () => (dispatch, getState) => {
  try {
    const client = getState().robot.pauseClient;
    const message = new ROSLIB.Message({
      data: "sleep"
    });
    client.publish(message);
    dispatch(setRobotStatus("robot is paused"));
  } catch {
    return;
  }
};

export const callUnPause = () => (dispatch, getState) => {
  try {
    const client = getState().robot.pauseClient;
    const message = new ROSLIB.Message({
      data: "awake"
    });
    client.publish(message);
    dispatch(setRobotStatus("robot is paused"));
  } catch {
    return;
  }
};

/*****************************************************
 * Restart Arm Functions
 *****************************************************/
/////////////////////////////////////////////////////////////
export const setupRestart = (dispatch, rosInstance) => {
  const restartClient = new ROSLIB.Service({
    ros: rosInstance,
    // name: '/restart_arm',
    // serviceType: '/dabot/ArmCommand'
    name: "/j2s7s300_driver/in/start",
    serviceType: "/moveit_msgs/MoveGroupActionFeedback"
  });
  dispatch({
    type: SET_RESTART_CLIENT,
    payload: restartClient
  });
};
export const callRestart = () => (dispatch, getState) => {
  try {
    const client = getState().robot.restartClient;
    const request = new ROSLIB.ServiceRequest({
      //command: "restart_arm"
    });
    dispatch(setRobotStatus("sending restart command"));
    client.callService(request, result => {
      dispatch(setRobotStatus("robot is restarted"));
    });
  } catch {
    return;
  }
};

/*****************************************************
 * Cancel Moveit Goal
 *****************************************************/
/////////////////////////////////////////////////////////////
export const setupCancelMoveIt = (dispatch, rosInstance) => {
  const cancelClient = new ROSLIB.Service({
    ros: rosInstance,
    name: "/move_block/cancel",
    serviceType: "/actionlib_msgs/GoalID"
  });
  dispatch({
    type: SET_MOVEIT_CANCEL_CLIENT,
    payload: cancelClient
  });
};

/*****************************************************
 * Update the Goal Pose
 *****************************************************/
//////////////////////////////////////////////////////////
export const updateGoal = (updateSelector, value) => dispatch => {
  dispatch({
    type: updateSelector,
    payload: parseFloat(value) //stupid html inputs are converting to string
  });
};

/*****************************************************
 * Send Pose commands to the DaBot
 *****************************************************/
//////////////////////////////////////////////////////////
export const setupMoveDaPose = (dispatch, rosInstance) => {
  const movePoseDaClient = new ROSLIB.ActionClient({
    ros: rosInstance,
    serverName: "/move_pose",
    actionName: "/dabot/MovePoseAction"
  });
  dispatch({
    type: SET_MOVE_POSE_DA_CLIENT,
    payload: movePoseDaClient
  });
};
export const callMoveDaPose = () => (dispatch, getState) => {
  try {
    const state = getState();
    const client = state.robot.movePoseDaClient;
    const poseGoal = state.robot.goal;
    const goal = new ROSLIB.Goal({
      actionClient: client,
      goalMessage: {
        target: {
          position: {
            x: poseGoal.position.x,
            y: poseGoal.position.y,
            z: poseGoal.position.z
          },
          orientation: {
            x: poseGoal.orientation.x,
            y: poseGoal.orientation.y,
            z: poseGoal.orientation.z,
            w: poseGoal.orientation.w
          }
        }
      }
    });
    dispatch(setRobotStatus("sending calibrate command"));
    goal.on("start", () => {
      dispatch(setRobotStatus("move pose goal received"));
    });
    goal.on("feedback", feedback => {
      console.log("Feedback: " + feedback.location);
      dispatch(setRobotStatus(feedback.location));
    });

    goal.on("result", result => {
      //console.log('Goal Completion Status: ' + status);
      dispatch(setRobotStatus("finished moving to pose"));
    });
    goal.send();
  } catch (e) {
    console.log("calling move pose failed", e);
    return;
  }
};

/*****************************************************
 * Update the robot pose
 *****************************************************/
////////////////////////////////////////////////////////
export const setupPoseListener = (dispatch, getState, rosInstance) => {
  /*
    *   Update the current pose
    */
  const poseListener = new ROSLIB.Topic({
    ros: rosInstance,
    name: "/j2s7s300_driver/out/tool_pose",
    messageType: "geometry_msgs/PoseStamped"
  });
  poseListener.subscribe(message => {
    const curPose = getState().robot.pose;
    dispatch({
      type: SET_POSE,
      payload: message.pose
    });
    if (!poseEqual(curPose, message.pose)) {
      dispatch({
        type: SET_GOAL_POSITION,
        payload: message.pose.position
      });
    }
  });
  dispatch({
    type: SET_POSE_LISTENER,
    payload: poseListener
  });
};
export const poseEqual = (pose1, pose2) => {
  if (pose1.position.x.toFixed(2) != pose2.position.x.toFixed(2)) {
    return false;
  }
  if (pose1.position.y.toFixed(2) != pose2.position.y.toFixed(2)) {
    return false;
  }
  if (pose1.position.z.toFixed(2) != pose2.position.z.toFixed(2)) {
    return false;
  }
  if (pose1.orientation.x.toFixed(2) != pose2.orientation.x.toFixed(2)) {
    return false;
  }
  if (pose1.orientation.y.toFixed(2) != pose2.orientation.y.toFixed(2)) {
    return false;
  }
  if (pose1.orientation.z.toFixed(2) != pose2.orientation.z.toFixed(2)) {
    return false;
  }
  if (pose1.orientation.w.toFixed(2) != pose2.orientation.w.toFixed(2)) {
    return false;
  }
  return true;
};
