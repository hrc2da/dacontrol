import { connect } from 'react-redux';
import { callStop, callRecalibrate, callHome,
    callPause, callRestart } from '../actions/robotActions';
import MovementComponent from '../components/movementComponent';

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleStop: (e)=>dispatch(callStop()),
        handleHome: (e)=>dispatch(callHome()),
        handleCalibrate: (e)=>dispatch(callRecalibrate()),
        handlePause: (e)=>dispatch(callPause()),
        handleRestart: (e)=>dispatch(callRestart())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MovementComponent)