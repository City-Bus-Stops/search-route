import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import UsersAdministrationTable from '../../components/UsersAdministrationTable/UsersAdministrationTable';
import AddUserContainer from '../AddUser/AddUser';
import Confirm from '../../components/Confirm/Confirm';

import {
  loadUsers,
  deleteUser,
  changeUserStatus,
  toggleRegistrationModal,
  openConfirm,
  closeConfirm,
} from '../../actions/actions';

import { getUsers, getConfirmConfig } from '../../reducers/administration/administration';

export const USER_ADMINISTRATION = 'userAdministration';

class UsersAdministrationContainer extends Component {
  componentDidMount() {
    const { loadUsers } = this.props.actions;
    loadUsers();
  }

  confirmAndRemove = (id) => {
    const { openConfirm, closeConfirm, deleteUser } = this.props.actions;
    openConfirm({
      header: 'Delete User',
      question: 'Are you sure you want to delete user?',
      type: 'remove',
      onConfirm: () => {
        deleteUser(id, USER_ADMINISTRATION);
        closeConfirm(USER_ADMINISTRATION);
      },
      onCancel: () => closeConfirm(USER_ADMINISTRATION),
    }, USER_ADMINISTRATION);
  };

  render() {
    const { users, confirmConfig } = this.props;
    const { changeUserStatus, toggleRegistrationModal } = this.props.actions;

    return (
      <div>
        <UsersAdministrationTable
          users={users}
          deleteUser={this.confirmAndRemove}
          changeUserStatus={changeUserStatus}
          addUser={toggleRegistrationModal}
        />
        <AddUserContainer />
        <Confirm
          config={confirmConfig}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: getUsers(state.administration),
  confirmConfig: getConfirmConfig(state.administration),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    loadUsers,
    deleteUser,
    changeUserStatus,
    toggleRegistrationModal,
    openConfirm,
    closeConfirm,
  }, dispatch),
});

UsersAdministrationContainer.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  confirmConfig: PropTypes.shape().isRequired,
  actions: PropTypes.shape({
    loadUsers: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired,
    changeUserStatus: PropTypes.func.isRequired,
    toggleRegistrationModal: PropTypes.func.isRequired,
    openConfirm: PropTypes.func.isRequired,
    closeConfirm: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersAdministrationContainer);
