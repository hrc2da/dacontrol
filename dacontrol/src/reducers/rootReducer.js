import { combineReducers } from "redux";
import rosBridgeReducer from "./rosBridgeReducer";
import robotReducer from "./robotReducer";
import tuiReducer from "./tuiReducer";
import rosParamsReducer from "./rosParamsReducer";

export default combineReducers({
  rosBridge: rosBridgeReducer,
  rosParams: rosParamsReducer,
  robot: robotReducer,
  tui: tuiReducer
});
