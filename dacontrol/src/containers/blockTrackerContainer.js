import { connect } from 'react-redux';

import BlockTrackerComponent from '../components/blockTrackerComponent';

const mapStateToProps = (state) => {
    return {
        blocks: state.tui.blocks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BlockTrackerComponent)