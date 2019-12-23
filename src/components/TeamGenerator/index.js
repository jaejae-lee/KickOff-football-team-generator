import { connect } from 'react-redux';
import TeamGenerator from './TeamGenerator';
import { generateTeams } from '../../actions/state';

const mapStateToProps = state => {
    return {
         fullPlayer: state.fullPlayer,
         teamA: state.teamA,
         teamB: state.teamB,
    };
};

const mapDispatchtoProps = dispatch => {
    return{
        generateTeams: (value) => dispatch(generateTeams(value))
    }
};

export default connect(mapStateToProps, mapDispatchtoProps)(TeamGenerator);