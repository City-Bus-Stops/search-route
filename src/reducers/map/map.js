import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import { isEmpty } from 'lodash';

import geoData from './geoData';
import isSidebarOpen from './isSidebarOpen';
import pointInfo from './pointInfo';
import userLocation, { getAddress, getCoordinates } from './userLocation';

import { sortGeoDataByPointType } from '../../utils';

export default combineReducers({
  geoData,
  isSidebarOpen,
  pointInfo,
  userLocation,
});

export const getGeoData = state => state.geoData;

export const getIsSidebarOpen = state => state.isSidebarOpen;

export const getPointInfo = state => state.pointInfo;

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
    const sortedGeoData = sortGeoDataByPointType(data);
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
