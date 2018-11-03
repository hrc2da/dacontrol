/*
    Handles changes to tui configs and beliefs
*/
import {
  SET_TUI_CONFIG,
  SET_TUI_CONFIG_LISTENER,
  SET_BLOCKS,
  SET_BLOCK_LISTENER
} from "../actions/tuiActions.js";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_TUI_CONFIG:
      return {
        ...state,
        currentConfig: action.payload
      };
    case SET_TUI_CONFIG_LISTENER:
      return {
        ...state,
        configListener: action.payload
      };
    case SET_BLOCKS:
      return {
        ...state,
        blocks: action.payload
      };
    case SET_BLOCK_LISTENER:
      return {
        ...state,
        blockListener: action.payload
      };
    default:
      return state;
  }
};
