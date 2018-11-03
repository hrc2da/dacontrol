import { connect } from "react-redux";
import {
  setRosBridgeUrl,
  connectRosBridgeSocket
} from "../actions/rosBridgeActions";
import RosBridgeComponent from "../components/rosBridgeComponent";

const mapStateToProps = state => {
  return {
    url: state.rosBridge.url,
    status: state.rosBridge.status
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleUrlChange: e => dispatch(setRosBridgeUrl(e.target.value)),
    handleSubmit: e => dispatch(connectRosBridgeSocket())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RosBridgeComponent);
