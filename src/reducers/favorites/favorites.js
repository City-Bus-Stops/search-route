import { combineReducers } from 'redux';

import routes from '../routes';
import busStops from '../busStops';
import routeInfo from '../routeInfo';
import confirm from '../confirm';

import { createWrapperReducer } from '../../utils';

import { FAVORITES } from '../../containers/Favorites/Favorites';

export default combineReducers({
  routes: createWrapperReducer(routes, action => action.predicate === FAVORITES),
  busStops: createWrapperReducer(busStops, action => action.predicate === FAVORITES),
  routeInfo: createWrapperReducer(routeInfo, action => action.predicate === FAVORITES),
  confirm: createWrapperReducer(confirm, action => action.predicate === FAVORITES),
});

export const getRoutes = state => state.routes;

export const getBusStops = state => state.busStops;

export const getInfo = state => state.routeInfo;

export const getConfirmConfig = state => state.confirm;
