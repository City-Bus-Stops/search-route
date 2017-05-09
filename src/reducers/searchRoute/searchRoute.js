import { combineReducers } from 'redux';

import routes from '../routes';
import routeInfo from '../routeInfo';

import { createWrapperReducer } from '../../utils';

import { SEARCH_ROUTE } from '../../containers/SearchRouteFormContainer/SearchRouteFormContainer';

export default combineReducers({
  routes: createWrapperReducer(routes, action => action.predicate === SEARCH_ROUTE),
  routeInfo: createWrapperReducer(routeInfo, action => action.predicate === SEARCH_ROUTE),
});

export const getRoutes = state => state.routes;

export const getInfo = state => state.routeInfo;
