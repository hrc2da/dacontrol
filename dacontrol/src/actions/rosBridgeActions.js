/*
    Set the url for the rosbridge
*/
import ROSLIB from "roslib";
import {
  setRobotStatus,
  setupStop,
  setupRecalibrate,
  setupMoveDaPose,
  setupHome,
  setupPause,
  setupRestart,
  setupPoseListener
} from "./robotActions";
import { setupTuiConfigListener, setupBlockListener } from "./tuiActions";

export const SET_ROSBRIDGE_URL = "SET_ROSBRIDGE_URL";
export const SET_ROSBRIDGE_STATUS = "SET_ROSBRIDGE_STATUS";
export const SET_ROSBRIDGE_SERVER = "SET_ROSBRIDGE_SERVER";

export const setRosBridgeUrl = url => dispatch => {
  dispatch({
    type: SET_ROSBRIDGE_URL,
    payload: url
  });
};

// const setupEStop = (dispatch) => {
//     let eStopClient =
//     let fibonacciClient = new ROSLIB.ActionClient({
//         14     ros : ros,
//         15     serverName : '/fibonacci',
//         16     actionName : 'actionlib_tutorials/FibonacciAction'
//         17   });
//         18
// }

const setupRosBridge = (dispatch, getState, url) => {
  console.log("connecting to ", url);
  let ros = new ROSLIB.Ros({ url: url });

  ros.on("connection", () => {
    console.log("Connected to websocket server.");
    dispatch({
      type: SET_ROSBRIDGE_STATUS,
      payload: "connected to " + url
    });
  });
  ros.on("error", e => {
    console.log("Error connecting to websocket sever: ", e);
    dispatch({
      type: SET_ROSBRIDGE_STATUS,
      payload: "failed connecting to " + url
    });
  });
  ros.on("close", () => {
    console.log("Connection to websocket server closed.");
    dispatch({
      type: SET_ROSBRIDGE_STATUS,
      payload: "disconnected"
    });
  });

  setupStop(dispatch, ros);
  setupRecalibrate(dispatch, ros);
  setupHome(dispatch, ros);
  setupPause(dispatch, ros);
  setupRestart(dispatch, ros);
  setupTuiConfigListener(dispatch, ros);
  setupBlockListener(dispatch, ros);
  setupPoseListener(dispatch, getState, ros);
  setupMoveDaPose(dispatch, ros);
  return ros;
};

export const connectRosBridgeSocket = () => (dispatch, getState) => {
  try {
    const url = getState().rosBridge.url;
    dispatch({
      type: SET_ROSBRIDGE_STATUS,
      payload: "trying to connect to " + url + "..."
    });
    dispatch({
      type: SET_ROSBRIDGE_SERVER,
      payload: setupRosBridge(dispatch, getState, url)
    });
  } catch {
    return;
  }
};

export const getRosParams = ros => dispatch => {
  ros.getRosParams(params => {
    console.log(params);
  });
};
