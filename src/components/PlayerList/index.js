import { connect } from 'react-redux';
import PlayerList from './PlayerList';
import { addPlayer, deletePlayer, reset } from '../../actions/state';


const mapStateToProps = state => {
    return {
        playerList: state.playerList,
        position: state.position,
        fullPlayer: state.fullPlayer,
    };
};

const mapDispatchtoProps = dispatch => {
    return{
        addPlayer: PlayerList => dispatch(addPlayer(PlayerList)),
        deletePlayer: PlayerList => dispatch(deletePlayer(PlayerList)),
        handleReset: () => dispatch(reset()),
    }
};

export default connect(mapStateToProps, mapDispatchtoProps)(PlayerList);