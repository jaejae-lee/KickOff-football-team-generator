import { connect } from 'react-redux';
import Form from './Form';
import { addPlayer } from '../../actions/state';

const mapStateToProps = state => {
    return {
        player: state.player,
        position: state.position,
        playerList: state.playerList,
        nameError: state.nameError,
        positionError: state.positionError,
        fullPlayer: state.fullPlayer,
    };
};

const mapDispatchtoProps = dispatch => {
    return{
        handleSave: (value) => dispatch(addPlayer(value))
    }
};

export default connect(mapStateToProps, mapDispatchtoProps)(Form);