import React from 'react';
import PropTypes from 'prop-types';

import Notification from '../Notification/Notification';

const UserManagement = ({ children, notifications }) => (
  <div>
    <Notification
      notifications={notifications}
    />
    {children}
  </div>
);

UserManagement.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  notifications: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
UserManagement.defaultProps = {
  children: [],
};

export default UserManagement;
