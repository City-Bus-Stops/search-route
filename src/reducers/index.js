import { combineReducers } from 'redux';
import { reducer as notifications } from 'react-notification-system-redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import formReducers from './formReducers/formReducers';

import searchRoute from './searchRoute/searchRoute';
import map from './map/map';
import userLocation from './userLocation';
import spinner from './spinner';
import favorites from './favorites/favorites';
import administration from './administration/administration';

export default combineReducers({
  searchRoute,
  notifications,
  map,
  userLocation,
  spinner,
  routing: routerReducer,
  form: formReducer.plugin(formReducers),
  favorites,
  administration,
});
