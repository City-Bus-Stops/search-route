import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isEmpty } from 'lodash';
import { reduxForm } from 'redux-form';

import Signup from '../../components/Signup/Signup';

import { validateSignUpForm } from '../../validation';

import { signUp } from '../../actions/actions';

export const SIGN_UP_FORM = 'signupForm';

class SignupContainer extends Component {
  validateAndSignup = (values) => {
    const { signUp } = this.props.actions;

    const errors = validateSignUpForm(values);
    if (isEmpty(errors)) {
      signUp(values);
    }
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <Signup
        signUp={this.validateAndSignup}
        handleSubmit={handleSubmit}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    signUp,
  }, dispatch),
});

SignupContainer.propTypes = {
  actions: PropTypes.shape({
    signUp: PropTypes.func.isRequired,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const formConfig = {
  form: SIGN_UP_FORM,
  enableReinitialize: true,
  validate: validateSignUpForm,
};

export default connect(null, mapDispatchToProps)(reduxForm(formConfig)(SignupContainer));
