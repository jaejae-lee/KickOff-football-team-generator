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

// const mapDispatchToProps = dispatch => {
//     return {
//       delete: todoText => dispatch({type: 'DELETE_TODO', payload: todoText })
//     }
//   }

export default connect(mapStateToProps, mapDispatchtoProps)(PlayerList);