import { connect } from 'react-redux';
import PlayerList from './PlayerList';
import { addPlayer, deletePlayer } from '../../actions/state';


const mapStateToProps = state => {
    return {
        playerList: state.playerList,
        fullPlayer: state.fullPlayer,
        submitted: state.submitted,
    };
};

const mapDispatchtoProps = dispatch => {
    return{
        addPlayer: PlayerList => dispatch(addPlayer(PlayerList)),
        deletePlayer: PlayerList => dispatch(deletePlayer(PlayerList)),
    }
};

export default connect(mapStateToProps, mapDispatchtoProps)(PlayerList);