import { combineReducers } from 'redux';

import geoData from './geoData';
import isSidebarOpen from './isSidebarOpen';
import pointInfo from './pointInfo';
import clusterGeoData from './clusterGeoData';
import mapOptions from './mapOptions';

import { createWrapperReducer, prepareMarkersForClusterLayer } from '../../utils';

import { MAP } from '../../containers/Map/Map';

export default combineReducers({
  geoData,
  isSidebarOpen,
  pointInfo: createWrapperReducer(pointInfo, action => action.predicate === MAP),
  clusterGeoData,
  mapOptions,
});

export const getGeoData = state => state.geoData;

export const getIsSidebarOpen = state => state.isSidebarOpen;

export const getMapPointInfo = state => state.pointInfo;

export const getClusterGeoData = state => prepareMarkersForClusterLayer(state.clusterGeoData);

export const mapOptionsSelector = state => state.mapOptions;
