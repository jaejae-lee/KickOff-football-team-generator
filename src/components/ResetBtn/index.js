import { connect } from 'react-redux';
import ResetBtn from './ResetBtn';
import { reset } from '../../actions/state';

const mapStateToProps = state => {
    return {
        teamGenerated: state.teamGenerated,
    };
};

const mapDispatchToProps = dispatch => {
  return {
     handleReset: () => dispatch(reset()),
  }; 
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetBtn);