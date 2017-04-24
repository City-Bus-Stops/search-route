import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { flow } from 'lodash';

import Signup from '../../components/Signup/Signup';

import { setFormField, signUp, formSubmitFailed } from '../../actions/actions';
import { getEmail, getPassword, getConfirmPassword, getErrors } from '../../reducers/signup/signup';

const mapStateToProps = state => ({
  email: flow([getEmail])(state.signup),
  password: flow([getPassword])(state.signup),
  confirmPassword: flow([getConfirmPassword])(state.signup),
  errors: flow([getErrors])(state.signup),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    setFormField,
    signUp,
    formSubmitFailed,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
