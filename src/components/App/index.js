import { connect } from 'react-redux';
import App from '../../App';


const mapStateToProps = state => {
    return {
        fullPlayer: state.fullPlayer,
    };
};

export default connect(mapStateToProps)(App);