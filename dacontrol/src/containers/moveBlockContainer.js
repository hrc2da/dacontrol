import { connect } from "react-redux";
import { updateBlockGoal, callMoveBlock } from "../actions/robotActions";
import MoveBlockComponent from "../components/moveBlockComponent";

const mapStateToProps = state => {
  return {
    blockId: "",
    blockSource: "",
    blockTarget: ""
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleGoalChange: e => {
      console.log(e);
      dispatch(updateBlockGoal(e.target.name, e.target.value));
    },
    handleGoalSubmit: e => dispatch(callMoveBlock())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoveBlockComponent);
