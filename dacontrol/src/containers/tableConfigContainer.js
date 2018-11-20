import { connect } from 'react-redux';
import {ORBITS_LEFT} from '../actions/rosParamsActions';
import TableConfigComponent from '../components/tableConfigComponent';

const mapStateToProps = (state) => {
    return {
        configString: state.tui.currentConfig,
        stagingBlocks: state.tui.blocks.filter(block => block.x>state.rosParams.params[ORBITS_LEFT]).map(b=>b.id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TableConfigComponent)