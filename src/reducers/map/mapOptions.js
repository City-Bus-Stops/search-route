import { head } from 'lodash';

import {
  FIND_USER_LOCATION_SUCCESS,
  FIND_NEAREST_BUS_STOPS_SUCCESS,
  LOAD_ROUTE_GEODATA_SUCCESS,
  LOAD_BUS_STOP_GEODATA_SUCCESS,
  LOAD_MAP_POINT_INFO_SUCCESS,
} from '../../actions/actions';

import { findStartPointIndexInGeoData } from '../../utils';

/* Default map options */
const MIN_ZOOM = 5;
const MAX_ZOOM = 18;
const DEFAULT_ZOOM = 15;

const initialState = {
  mapCenter: [53.66946, 23.824368],
  zoom: DEFAULT_ZOOM,
  maxZoom: MAX_ZOOM,
  minZoom: MIN_ZOOM,
  zoomControl: false,
};

const mapOptions = (state = initialState, action) => {
  switch (action.type) {
    case FIND_USER_LOCATION_SUCCESS: {
      const { location: { coords: { latitude, longitude } } } = action;
      return {
        ...state,
        mapCenter: [latitude, longitude],
        zoom: 18,
      };
    }

    case FIND_NEAREST_BUS_STOPS_SUCCESS: {
      return {
        ...state,
        zoom: DEFAULT_ZOOM,
      };
    }

    // IN PROGRESS
    case LOAD_ROUTE_GEODATA_SUCCESS: {
      const { geoData } = action;
      const startPointIndex = findStartPointIndexInGeoData(geoData);
      const newMapCenter = geoData[startPointIndex].geometry.coordinates;
      return {
        ...state,
        mapCenter: startPointIndex > -1 && [newMapCenter[1], newMapCenter[0]],
        zoom: DEFAULT_ZOOM,
      };
    }

    case LOAD_BUS_STOP_GEODATA_SUCCESS: {
      const { lat, lng } = head(action.geoData);
      return {
        ...state,
        mapCenter: [lat, lng],
        zoom: 16,
      };
    }

    case LOAD_MAP_POINT_INFO_SUCCESS: {
      const { info: { coords } } = action;
      return {
        ...state,
        mapCenter: coords,
        zoom: 17,
      };
    }

    default:
      return state;
  }
};

export default mapOptions;

export const mapCenterSelector = state => state.mapCenter;

export const mapZoomSelector = state => state.zoom;

export const mapMaxZoomSelector = state => state.maxZoom;

export const mapMinZoomSelector = state => state.minZoom;

export const mapZoomControlSelector = state => state.zoomControl;
