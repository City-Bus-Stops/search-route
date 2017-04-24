import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { flow } from 'lodash';

import Login from '../../components/Login/Login';

import { setFormField, logIn, formSubmitFailed } from '../../actions/actions';
import { getEmail, getPassword, getErrors } from '../../reducers/login/login';

const mapStateToProps = state => ({
  email: flow([getEmail])(state.login),
  password: flow([getPassword])(state.login),
  errors: flow([getErrors])(state.login),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    setFormField,
    logIn,
    formSubmitFailed,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
