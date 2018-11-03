import { connect } from "react-redux";

import TableConfigComponent from "../components/tableConfigComponent";

const mapStateToProps = state => {
  return {
    configString: state.tui.currentConfig
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableConfigComponent);
