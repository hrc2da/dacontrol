import { connect } from "react-redux";
import {
  callStop,
  callRecalibrate,
  callHome,
  callPause,
  callUnPause,
  callRestart,
  updateGoal,
  callMoveDaPose
} from "../actions/robotActions";
import MovementComponent from "../components/movementComponent";

const mapStateToProps = state => {
  return {
    goalPositionX: state.robot.goal.position.x,
    goalPositionY: state.robot.goal.position.y,
    goalPositionZ: state.robot.goal.position.z,
    goalOrientationX: state.robot.goal.orientation.x,
    goalOrientationY: state.robot.goal.orientation.y,
    goalOrientationZ: state.robot.goal.orientation.z,
    goalOrientationW: state.robot.goal.orientation.w
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleStop: e => dispatch(callStop()),
    handleHome: e => dispatch(callHome()),
    handleCalibrate: e => dispatch(callRecalibrate()),
    handlePause: e => {
      dispatch(callPause());
      dispatch(callStop());
      dispatch(callRestart());
      dispatch(callHome());
      dispatch(callStop());
    },
    handleRestart: e => {
      dispatch(callRestart());
      dispatch(callUnPause());
    },
    handleGoalChange: e => dispatch(updateGoal(e.target.name, e.target.value)),
    handleMove: e => dispatch(callMoveDaPose())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovementComponent);
