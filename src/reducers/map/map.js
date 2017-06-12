import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import { isEmpty } from 'lodash';

import geoData from './geoData';
import isSidebarOpen from './isSidebarOpen';
import pointInfo from './pointInfo';

import { sortGeoDataByPointType, createWrapperReducer } from '../../utils';

import { MAP } from '../../containers/Map/Map';

export default combineReducers({
  geoData,
  isSidebarOpen,
  pointInfo: createWrapperReducer(pointInfo, action => action.predicate === MAP),
});

export const getGeoData = state => state.geoData;

export const getIsSidebarOpen = state => state.isSidebarOpen;

export const getMapPointInfo = state => state.pointInfo;

export const getGeoDataMainPoint = createSelector(
  getGeoData,
  (data) => {
    const sortedGeoData = Array.isArray(data) ? sortGeoDataByPointType(data) : [data];
    return !isEmpty(sortedGeoData[0]) ?
      sortedGeoData[0].geometry.coordinates :
      [];
  },
);
