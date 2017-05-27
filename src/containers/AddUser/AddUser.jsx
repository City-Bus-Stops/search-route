import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isEmpty } from 'lodash';
import { reduxForm } from 'redux-form';

import { valdateAddUserForm } from '../../validation';

import AddUserComponent from '../../components/AddUser/AddUser';

import { getIsRegistrationModalOpen } from '../../reducers/administration/administration';

import { registerUser, toggleRegistrationModal } from '../../actions/actions';

export const ADD_USER_FORM = 'addUserForm';

class AddUserContainer extends Component {
  validateAndRegisterUser = (values) => {
    const { registerUser } = this.props.actions;

    const errors = valdateAddUserForm(values);
    if (isEmpty(errors)) {
      registerUser(values);
    }
  };

  render() {
    const { handleSubmit, isRegistrationModalOpen } = this.props;
    const { toggleRegistrationModal } = this.props.actions;

    return (
      <AddUserComponent
        saveUser={this.validateAndRegisterUser}
        handleSubmit={handleSubmit}
        isOpen={isRegistrationModalOpen}
        onClose={toggleRegistrationModal}
      />
    );
  }
}

const mapStateToProps = state => ({
  isRegistrationModalOpen: getIsRegistrationModalOpen(state.administration),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    registerUser,
    toggleRegistrationModal,
  }, dispatch),
});

AddUserContainer.propTypes = {
  isRegistrationModalOpen: PropTypes.bool.isRequired,
  actions: PropTypes.shape({
    registerUser: PropTypes.func.isRequired,
    toggleRegistrationModal: PropTypes.func.isRequired,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const formConfig = {
  form: ADD_USER_FORM,
  validate: valdateAddUserForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm(formConfig)(AddUserContainer),
);
