import {
  API_ERROR,
  showNotification,
 } from '../actions/actions';

export const handleApiError = store => next => (action) => {
  if (action.type === API_ERROR) {
    const { err } = action;
    store.dispatch(showNotification('error', 'Error', err.message));
  }
  next(action);
};
