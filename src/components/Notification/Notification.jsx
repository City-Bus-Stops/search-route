import React from 'react';
import PropTypes from 'prop-types';
import Notifications from 'react-notification-system-redux';

const notificationStyle = {
  NotificationItem: {
    DefaultStyle: {
      margin: '10px 5px 2px 1px',
      minWidth: '200px',
      minHeight: '70px',
      borderTop: 'none',
      fontSize: '16px',
    },
    success: {
      color: '#5bbb10',
    },
    error: {
      color: '#f0515a',
    },
    info: {
      color: '#378efb',
    },
  },
};

const Notification = ({ notifications }) => (
  <Notifications
    notifications={notifications}
    style={notificationStyle}
  />
);

Notification.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Notification;
