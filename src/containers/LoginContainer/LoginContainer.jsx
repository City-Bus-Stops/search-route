import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isEmpty } from 'lodash';

import Login from '../../components/Login/Login';

import { validateLoginForm } from '../../validation';

import { setFormField, logIn, formSubmitFailed } from '../../actions/actions';
import { getEmail, getPassword, getErrors } from '../../reducers/login/login';

export const LOGIN_FORM = 'loginForm';

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.setFormField = this.setFormField.bind(this);
    this.logIn = this.logIn.bind(this);
  }

  setFormField(field, value) {
    const { setFormField } = this.props.actions;
    setFormField(LOGIN_FORM, field, value);
  }

  logIn() {
    const { email, password } = this.props;
    const { logIn, formSubmitFailed } = this.props.actions;

    const errors = validateLoginForm({ email, password });
    if (isEmpty(errors)) {
      logIn(email, password);
    } else {
      formSubmitFailed(LOGIN_FORM, errors);
    }
  }

  render() {
    const { email, password, errors } = this.props;

    return (
      <Login
        email={email}
        password={password}
        errors={errors}
        logIn={this.logIn}
        setFormField={this.setFormField}
      />
    );
  }
}

const mapStateToProps = state => ({
  email: getEmail(state.login),
  password: getPassword(state.login),
  errors: getErrors(state.login),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    setFormField,
    logIn,
    formSubmitFailed,
  }, dispatch),
});

LoginContainer.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  errors: PropTypes.shape().isRequired,
  actions: PropTypes.shape({
    logIn: PropTypes.func.isRequired,
    setFormField: PropTypes.func.isRequired,
    formSubmitFailed: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
