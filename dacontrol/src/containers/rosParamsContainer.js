import { connect } from "react-redux";

import RosParamsComponent from "../components/rosParamsComponent";

const mapStateToProps = state => {
  return {
    rosParams: state.rosParams.params
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RosParamsComponent);
