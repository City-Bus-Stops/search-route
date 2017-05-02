import { combineReducers } from 'redux';

import routes from './routes';
import form from './form';
import routeInfo from './routeInfo';

export default combineReducers({
  routes,
  routeInfo,
  form,
});

export const getForm = state => state.form;

export const getRoutes = state => state.routes;

export const getInfo = state => state.routeInfo;
