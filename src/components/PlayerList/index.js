import { connect } from 'react-redux';
import PlayerList from './PlayerList';
import { addPlayer } from '../../actions/state';


const mapStateToProps = state => {
    return {
        playerList: state.playerList,
    };
};

const mapDispatchtoProps = dispatch => {
    return{
        addPlayer: PlayerList => dispatch(addPlayer(PlayerList))
    }
};

export default connect(mapStateToProps, mapDispatchtoProps)(PlayerList);