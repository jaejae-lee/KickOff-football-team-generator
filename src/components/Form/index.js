import { connect } from 'react-redux';
import Form from './Form';
import { addPlayer } from '../../actions/state';

const mapStateToProps = state => {
    return {
        player: state.player,
        playerList: state.playerList,
        nameError: state.nameError,
        submitted: state.submitted,
        fullPlayer: state.fullPlayer,
        teamAsize: state.teamAsize,
        teamBsize: state.teamBsize,
    };
};

const mapDispatchtoProps = dispatch => {
    return{
        handleSave: (value) => dispatch(addPlayer(value))
    }
};

export default connect(mapStateToProps, mapDispatchtoProps)(Form);