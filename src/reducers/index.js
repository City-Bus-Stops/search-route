import { combineReducers } from 'redux';
import { reducer as notifications } from 'react-notification-system-redux';
import { routerReducer } from 'react-router-redux';

import searchRoute from './searchRoute/searchRoute';
import login from './login/login';
import signup from './signup/signup';
import map from './map/map';
import spinner from './spinner';

export default combineReducers({
  searchRoute,
  notifications,
  login,
  signup,
  map,
  spinner,
  routing: routerReducer,
});
