import { connect } from "react-redux";
import { setRosParam } from "../actions/rosParamsActions";
import RosParamsComponent from "../components/rosParamsComponent";

const mapStateToProps = state => {
  return {
    rosParams: state.rosParams.params
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChange: (e)=>dispatch(setRosParam(e.target.name,parseFloat(e.target.value)))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RosParamsComponent);
