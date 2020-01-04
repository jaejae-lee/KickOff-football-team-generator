import { connect } from 'react-redux';
import ResetBtn from './ResetBtn';
import { reset } from '../../actions/state';

const mapDispatchToProps = dispatch => {
  return {
     handleReset: () => dispatch(reset()),
  }; 
};

export default connect(null, mapDispatchToProps)(ResetBtn);