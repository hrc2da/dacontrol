import { combineReducers } from 'redux';
import rosBridgeReducer from './rosBridgeReducer';
import robotReducer from './robotReducer';
import tuiReducer from './tuiReducer';

export default combineReducers({
    rosBridge: rosBridgeReducer,
    robot: robotReducer,
    tui: tuiReducer
})