import { combineReducers } from 'redux';

import routes from './routes';
import routeInfo from './routeInfo';

export default combineReducers({
  routes,
  routeInfo,
});

export const getRoutes = state => state.routes;

export const getInfo = state => state.routeInfo;
