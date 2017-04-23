import { combineReducers } from 'redux';

import { createNamedWrapperReducer } from '../../utils';

import routes from '../routes';
import form from './form';

export default combineReducers({
  routes: createNamedWrapperReducer(routes, action => action.routesType === 'searchRoute'),
  form,
});

export const getForm = state => state.form;

export const getRoutes = state => state.routes;
