/*
    Handles changes to the robot and its status (mostly its status)
*/
import { SET_ROBOT_STATUS, SET_PAUSE_CLIENT, 
    SET_RECALIBRATE_CLIENT, SET_HOMING_CLIENT, 
    SET_STOP_CLIENT, SET_RESTART_CLIENT, SET_POSE,
    SET_POSE_LISTENER, SET_MOVE_POSE_DA_CLIENT,
    SET_MOVEIT_CANCEL_CLIENT, SET_GOAL_POSITION,
    SET_GOAL_POSITION_X, SET_GOAL_POSITION_Y, SET_GOAL_POSITION_Z,
    SET_GOAL_ORIENTATION_X, SET_GOAL_ORIENTATION_Y,
    SET_GOAL_ORIENTATION_Z, SET_GOAL_ORIENTATION_W} from '../actions/robotActions'
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
        case SET_MOVEIT_CANCEL_CLIENT:
            return {
                ...state, cancelClient: action.payload
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
        case SET_GOAL_POSITION:
            return {
                ...state, goal: {
                    ...state.goal, position: action.payload
                }
            }
        case SET_GOAL_POSITION_X:
            return {
                ...state, goal: {
                    ...state.goal, position: {
                        ...state.goal.position, x: action.payload
                    }
                }
            }
        case SET_GOAL_POSITION_Y:
            return {
                ...state, goal: {
                    ...state.goal, position: {
                        ...state.goal.position, y: action.payload
                    }
                }
            }
        case SET_GOAL_POSITION_Z:
            return {
                ...state, goal: {
                    ...state.goal, position: {
                        ...state.goal.position, z: action.payload
                    }
                }
            }
        case SET_GOAL_ORIENTATION_X:
            return {
                ...state, goal: {
                    ...state.goal, orientation: {
                        ...state.goal.orientation, x: action.payload
                    }
                }
            }
        case SET_GOAL_ORIENTATION_Y:
            return {
                ...state, goal: {
                    ...state.goal, orientation: {
                        ...state.goal.orientation, y: action.payload
                    }
                }
            }
        case SET_GOAL_ORIENTATION_Z:
            return {
                ...state, goal: {
                    ...state.goal, orientation: {
                        ...state.goal.orientation, z: action.payload
                    }
                }
            }
        case SET_GOAL_ORIENTATION_W:
            return {
                ...state, goal: {
                    ...state.goal, orientation: {
                        ...state.goal.orientation, w: action.payload
                    }
                }
            }
        case SET_POSE_LISTENER:
            return {
                ...state, poseListener: action.payload
            }
        case SET_MOVE_POSE_DA_CLIENT:
            return {
                ...state, movePoseDaClient: action.payload
            }
        default:
            return state
    }
}