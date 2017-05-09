import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import { findIndex, isEmpty } from 'lodash';

import geoData from './geoData';
import isSidebarOpen from './isSidebarOpen';
import pointInfo from './pointInfo';
import userLocation, { getAddress, getCoordinates } from './userLocation';

export default combineReducers({
  geoData,
  isSidebarOpen,
  pointInfo,
  userLocation,
});

export const getGeoData = state => state.geoData;

export const getIsSidebarOpen = state => state.isSidebarOpen;

export const getUserCoordinates = state => createSelector(
  getCoordinates,
  coordinates => coordinates,
)(state.userLocation);

export const getUserAddress = createSelector(
  getAddress,
  address => address,
);

export const getStartPointCoordinates = createSelector(
  getGeoData,
  (data) => {
    const startPointIndex = findIndex(data, point => point.properties.type === 'start');
    return startPointIndex !== -1 ?
      data[startPointIndex].geometry.coordinates :
      [];
  },
);

export const getMapCenter = createSelector(
  [getStartPointCoordinates, getUserCoordinates],
  (startPointCoordinates, userCoordinates) => !isEmpty(startPointCoordinates) ?
    [startPointCoordinates[1], startPointCoordinates[0]] :
    userCoordinates,
);
