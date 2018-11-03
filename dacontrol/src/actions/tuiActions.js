import ROSLIB from "roslib";

export const SET_TUI_CONFIG = "SET_TUI_CONFIG";
export const SET_TUI_CONFIG_LISTENER = "SET_TUI_CONFIG_LISTENER";

export const SET_BLOCKS = "SET_BLOCKS";
export const SET_BLOCK_LISTENER = "SET_BLOCK_LISTENER";

export const setupTuiConfigListener = (dispatch, rosInstance) => {
  const tuiConfigListener = new ROSLIB.Topic({
    ros: rosInstance,
    name: "/tui_state_configs",
    messageType: "std_msgs/String"
  });

  tuiConfigListener.subscribe(message => {
    dispatch({
      type: SET_TUI_CONFIG,
      payload: message.data
    });
  });
  console.log("subscribe to tui configs");
  dispatch({
    type: SET_TUI_CONFIG_LISTENER,
    payload: tuiConfigListener
  });
};

export const setupBlockListener = (dispatch, rosInstance) => {
  const blockListener = new ROSLIB.Topic({
    ros: rosInstance,
    name: "/blocks",
    messageType: "std_msgs/String"
  });
  blockListener.subscribe(message => {
    dispatch({
      type: SET_BLOCKS,
      payload: JSON.parse(message.data)
    });
  });
  dispatch({
    type: SET_BLOCK_LISTENER,
    payload: blockListener
  });
};
