import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import routes from '../routes';
import busStops from '../busStops';
import routeInfo from '../routeInfo';
import confirm from '../confirm';
import filter from '../filter';

import { createWrapperReducer } from '../../utils';

import { FAVORITES } from '../../containers/Favorites/Favorites';

export default combineReducers({
  routes: createWrapperReducer(routes, action => action.predicate === FAVORITES),
  busStops: createWrapperReducer(busStops, action => action.predicate === FAVORITES),
  routeInfo: createWrapperReducer(routeInfo, action => action.predicate === FAVORITES),
  confirm: createWrapperReducer(confirm, action => action.predicate === FAVORITES),
  filter: createWrapperReducer(filter, action => action.predicate === FAVORITES),
});

export const routesSelector = state => state.routes;

export const filterSelector = state => state.filter;

export const getFilteredRoutes = createSelector(
  [routesSelector, filterSelector],
  (routes, filter) => routes.filter(route =>
    route.busNumber.toLowerCase().includes(filter) ||
    route.from.toLowerCase().includes(filter) ||
    route.to.toLowerCase().includes(filter),
  ),
);

export const busStopsSelector = state => state.busStops;

export const getFilteredBusStops = createSelector(
  [busStopsSelector, filterSelector],
  (busStops, filter) => busStops.filter(busStop =>
    busStop.name.toLowerCase().includes(filter),
  ),
);

export const getInfo = state => state.routeInfo;

export const getConfirmConfig = state => state.confirm;

export const getFilter = state => state.filter;
