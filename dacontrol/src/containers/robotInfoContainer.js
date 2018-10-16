import { connect } from 'react-redux';

import RobotInfoComponent from '../components/robotInfoComponent';

const mapStateToProps = (state) => {
    return {
        status: state.robot.status,
        position: state.robot.pose.position,
        orientation: state.robot.pose.orientation
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RobotInfoComponent)