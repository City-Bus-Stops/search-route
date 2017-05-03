import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Signup from '../../components/Signup/Signup';

import { setFormField, signUp, formSubmitFailed } from '../../actions/actions';
import { getEmail, getPassword, getConfirmPassword, getErrors } from '../../reducers/signup/signup';

const mapStateToProps = state => ({
  email: getEmail(state.signup),
  password: getPassword(state.signup),
  confirmPassword: getConfirmPassword(state.signup),
  errors: getErrors(state.signup),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    setFormField,
    signUp,
    formSubmitFailed,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
