import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isEmpty } from 'lodash';

import Signup from '../../components/Signup/Signup';

import { validateSignUpForm } from '../../validation';

import { setFormField, signUp, formSubmitFailed } from '../../actions/actions';
import { getEmail, getPassword, getConfirmPassword, getErrors } from '../../reducers/signup/signup';

export const SIGN_UP_FORM = 'signupForm';

class SignupContainer extends Component {
  constructor(props) {
    super(props);

    this.setFormField = this.setFormField.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  setFormField(field, value) {
    const { setFormField } = this.props.actions;
    setFormField(SIGN_UP_FORM, field, value)

    
  }

  signUp() {
    const { email, password, confirmPassword } = this.props;
    const { signUp, formSubmitFailed } = this.props.actions;

    const errors = validateSignUpForm({ email, password, confirmPassword });
    if (isEmpty(errors)) {
      signUp(email, password);
    } else {
      formSubmitFailed(SIGN_UP_FORM, errors);
    }
  }

  render() {
    const { email, password, confirmPassword, errors } = this.props;

    return (
      <Signup
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        errors={errors}
        setFormField={this.setFormField}
        signUp={this.signUp}
      />
    );
  }
}

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

SignupContainer.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  errors: PropTypes.shape().isRequired,
  actions: PropTypes.shape({
    signUp: PropTypes.func.isRequired,
    setFormField: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
