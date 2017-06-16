import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import { isEmpty } from 'lodash';

import geoData from './geoData';
import isSidebarOpen from './isSidebarOpen';
import pointInfo from './pointInfo';
import clusterGeoData from '../clusterGeoData';

import { sortGeoDataByPointType, createWrapperReducer, prepareMarkersForClusterLayer } from '../../utils';

import { MAP } from '../../containers/Map/Map';

export default combineReducers({
  geoData,
  isSidebarOpen,
  pointInfo: createWrapperReducer(pointInfo, action => action.predicate === MAP),
  clusterGeoData,
});

export const getGeoData = state => state.geoData;

export const getIsSidebarOpen = state => state.isSidebarOpen;

export const getMapPointInfo = state => state.pointInfo;

export const getClusterGeoData = state => prepareMarkersForClusterLayer(state.clusterGeoData);

export const getGeoDataMainPoint = createSelector(
  getGeoData,
  (data) => {
    const sortedGeoData = Array.isArray(data) ? sortGeoDataByPointType(data) : [data];
    return !isEmpty(sortedGeoData[0]) ?
      sortedGeoData[0].geometry.coordinates :
      [];
  },
);
