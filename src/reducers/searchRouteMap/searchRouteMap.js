import { combineReducers } from 'redux';

import { createNamedWrapperReducer } from '../../utils';

import geoRoute from '../geoRoute';
import sidebar from '../sidebar';
import pointInfo from '../pointInfo';

export default combineReducers({
  geoData: createNamedWrapperReducer(geoRoute, action => action.routeType === 'searchRoute'),
  sidebarIsOpen: createNamedWrapperReducer(sidebar, action => action.sidebarType === 'searchRoute'),
  pointInfo: createNamedWrapperReducer(pointInfo, action => action.pointType === 'searchRoute'),
});

export const getGeoData = state => state.geoData;

export const getIsSidebarOpen = state => state.sidebarIsOpen;

export const getPointInfo = state => state.pointInfo;
