import React from 'react';
import PropTypes from 'prop-types';

import Menu from '../Menu/Menu';
import Notification from '../Notification/Notification';

const Root = ({ children, location, notifications }) => (
  <div>
    <Notification
      notifications={notifications}
    />
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
};
Root.defaultProps = {
  children: [],
};

export default Root;
