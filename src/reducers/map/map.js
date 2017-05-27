import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import { isEmpty } from 'lodash';

import geoData from './geoData';
import isSidebarOpen from './isSidebarOpen';
import pointInfo from './pointInfo';
import userLocation, { getAddress, getCoordinates } from './userLocation';

import { sortGeoDataByPointType, createWrapperReducer } from '../../utils';

import { MAP } from '../../containers/Map/Map';

export default combineReducers({
  geoData,
  isSidebarOpen,
  pointInfo: createWrapperReducer(pointInfo, action => action.predicate === MAP),
  userLocation,
});

export const getGeoData = state => state.geoData;

export const getIsSidebarOpen = state => state.isSidebarOpen;

export const getMapPointInfo = state => state.pointInfo;

export const getUserCoordinates = state => createSelector(
  getCoordinates,
  coordinates => coordinates,
)(state.userLocation);

export const getUserAddress = createSelector(
  getAddress,
  address => address,
);

export const getGeoDataCenter = createSelector(
  getGeoData,
  (data) => {
    const sortedGeoData = Array.isArray(data) ? sortGeoDataByPointType(data) : [data];
    return !isEmpty(sortedGeoData[0]) ?
      sortedGeoData[0].geometry.coordinates :
      [];
  },
);

export const getMapCenter = createSelector(
  [getGeoDataCenter, getUserCoordinates],
  (geoDataCenter, userCoordinates) => !isEmpty(geoDataCenter) ?
    [geoDataCenter[1], geoDataCenter[0]] :
    userCoordinates,
);
