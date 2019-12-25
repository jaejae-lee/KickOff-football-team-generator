import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = state => {
    return {
        submitted: state.submitted,
        fullPlayer: state.fullPlayer
    };
};

export default connect(mapStateToProps)(App);