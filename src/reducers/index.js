import { combineReducers } from 'redux';
import { reducer as notifications } from 'react-notification-system-redux';

import searchRoute from './searchRoute/searchRoute';

export default combineReducers({
  searchRoute,
  notifications,
});
