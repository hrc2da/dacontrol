/*
    Handles changes to the robot and its status (mostly its status)
*/
import { SET_ROBOT_STATUS, SET_PAUSE_CLIENT, 
    SET_RECALIBRATE_CLIENT, SET_HOMING_CLIENT, 
    SET_STOP_CLIENT, SET_RESTART_CLIENT, SET_POSE,
    SET_POSE_LISTENER } from '../actions/robotActions'
export default (state = {}, action) => {
    switch (action.type) {
        case SET_ROBOT_STATUS:
            return {
                ...state, status: action.payload
            }
        case SET_STOP_CLIENT:
            return {
                ...state, stopClient: action.payload
            }
        case SET_RECALIBRATE_CLIENT:
            return {
                ...state, recalibrateClient: action.payload
            }
        case SET_HOMING_CLIENT:
            return {
                ...state, homingClient: action.payload
            }
        case SET_PAUSE_CLIENT:
            return {
                ...state, pauseClient: action.payload
            }
        case SET_RESTART_CLIENT:
            return {
                ...state, restartClient: action.payload
            }
        case SET_POSE:
            return {
                ...state, pose: action.payload
            }
        case SET_POSE_LISTENER:
            return {
                ...state, poseListener: action.payload
            }
        default:
            return state
    }
}