import React from 'react';
import PropTypes from 'prop-types';

import Menu from '../Menu/Menu';
import Notification from '../Notification/Notification';
import Spinner from '../Spinner/Spinner';

const Root = ({ children, location, notifications, IsSpinnerActive }) => (
  <div>
    <Notification
      notifications={notifications}
    />
    <Spinner IsSpinnerActive={IsSpinnerActive} />
    <Menu
      pathname={location.pathname}
      userName="Denis Krivichanin"
    />
    {children}
  </div>
);

Root.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  location: PropTypes.shape().isRequired,
  notifications: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  IsSpinnerActive: PropTypes.bool.isRequired,
};
Root.defaultProps = {
  children: [],
};

export default Root;
