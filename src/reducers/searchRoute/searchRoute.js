import { combineReducers } from 'redux';

import { createWrapperReducer } from '../../utils';

import routes from '../routes';
import form from './form';
import routeInfo from '../routeInfo';

export default combineReducers({
  routes: createWrapperReducer(routes, action => action.routesType === 'searchRoute'),
  routeInfo: createWrapperReducer(routeInfo, action => action.modalType === 'searchRoute'),
  form,
});

export const getForm = state => state.form;

export const getRoutes = state => state.routes;

export const getInfo = state => state.routeInfo;
