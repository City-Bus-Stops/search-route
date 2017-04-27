import { combineReducers } from 'redux';

import { createWrapperReducer } from '../../utils';

import geoRoute from '../geoRoute';
import sidebar from '../sidebar';
import pointInfo from '../pointInfo';

export default combineReducers({
  geoData: createWrapperReducer(geoRoute, action => action.routeType === 'searchRoute'),
  sidebarIsOpen: createWrapperReducer(sidebar, action => action.sidebarType === 'searchRoute'),
  pointInfo: createWrapperReducer(pointInfo, action => action.pointType === 'searchRoute'),
});

export const getGeoData = state => state.geoData;

export const getIsSidebarOpen = state => state.sidebarIsOpen;

export const getPointInfo = state => state.pointInfo;
