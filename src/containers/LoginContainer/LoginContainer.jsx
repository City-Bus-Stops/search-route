import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isEmpty } from 'lodash';
import { reduxForm } from 'redux-form';

import Login from '../../components/Login/Login';

import { validateLoginForm } from '../../validation';

import { logIn } from '../../actions/actions';

export const LOGIN_FORM = 'loginForm';

class LoginContainer extends Component {
  validateAndLogin = (values) => {
    const { logIn } = this.props.actions;

    const errors = validateLoginForm(values);
    if (isEmpty(errors)) {
      logIn(values);
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Login
        logIn={this.validateAndLogin}
        handleSubmit={handleSubmit}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    logIn,
  }, dispatch),
});

LoginContainer.propTypes = {
  actions: PropTypes.shape({
    logIn: PropTypes.func.isRequired,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export const formConfig = {
  form: LOGIN_FORM,
  enableReinitialize: true,
  validate: validateLoginForm,
};

export default connect(null, mapDispatchToProps)(reduxForm(formConfig)(LoginContainer));
