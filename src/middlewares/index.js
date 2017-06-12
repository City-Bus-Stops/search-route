import { browserHistory } from 'react-router';

import {
  API_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  showNotification,
 } from '../actions/actions';

import Auth from '../auth';

export const handleApiError = store => next => (action) => {
  if (action.type === API_ERROR) {
    const { err } = action;
    store.dispatch(showNotification('error', 'Error', err.message));
  }
  next(action);
};

export const handleLoginSuccess = () => next => (action) => {
  if (action.type === LOGIN_SUCCESS) {
    const { userData } = action;
    Auth.setUserCredentials(userData);
  }
  next(action);
};

export const handleLogout = () => next => (action) => {
  if (action.type === LOGOUT) {
    Auth.deauthenticateUser();
    browserHistory.push('/');
  }
  next(action);
};
