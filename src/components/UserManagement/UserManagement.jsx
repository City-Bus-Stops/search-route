import React from 'react';
import PropTypes from 'prop-types';

import Notification from '../Notification/Notification';
import Spinner from '../Spinner/Spinner';

const UserManagement = ({ children, notifications, IsSpinnerActive }) => (
  <div>
    <Notification
      notifications={notifications}
    />
    <Spinner IsSpinnerActive={IsSpinnerActive} />
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
  IsSpinnerActive: PropTypes.bool.isRequired,
};
UserManagement.defaultProps = {
  children: [],
};

export default UserManagement;
