import Notifications from 'react-notification-system-redux';

/** Search Routes actions **/
export const FIND_USER_LOCATION = 'FIND_USER_LOCATION';
export const FIND_USER_LOCATION_SUCCESS = 'FIND_USER_LOCATION_SUCCESS';
export const FIND_USER_ADDRESS = 'FIND_USER_ADDRESS';
export const FIND_USER_ADDRESS_SUCCESS = 'FIND_USER_ADDRESS_SUCCESS';
export const SEARCH_ROUTE = 'SEARCH_ROUTE';
export const SEARCH_ROUTE_SUCCESS = 'SEARCH_ROUTE_SUCCESS';

/** Forms actions **/
export const SET_FORM_FIELD = 'SET_FORM_FIELD';
export const FORM_SUBMIT_FAILED = 'FORM_SUBMIT_FAILED';

/** User Management actions **/
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';

/** Route Info actions **/
export const LOAD_ROUTE_INFO = 'LOAD_ROUTE_INFO';
export const LOAD_ROUTE_INFO_SUCCESS = 'LOAD_ROUTE_INFO_SUCCESS';
export const CLEAR_ROUTE_INFO = 'CLEAR_ROUTE_INFO';

/** Map actions **/
export const LOAD_ROUTE_GEODATA = 'LOAD_ROUTE_GEODATA';
export const LOAD_ROUTE_GEODATA_SUCCESS = 'LOAD_ROUTE_GEODATA_SUCCESS';
export const LOAD_ROUTE_GEODATA_FAILURE = 'LOAD_ROUTE_GEODATA_FAILURE';
export const CLEAR_MAP_GEODATA = 'CLEAR_MAP_GEODATA';
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const LOAD_MAP_POINT_INFO = 'LOAD_MAP_POINT_INFO';
export const LOAD_MAP_POINT_INFO_SUCCESS = 'LOAD_MAP_POINT_INFO_SUCCESS';
export const CLEAR_MAP_POINT_INFO = 'CLEAR_MAP_POINT_INFO';
export const LOAD_USER_POINT_INFO = 'LOAD_USER_POINT_INFO';
export const LOAD_USER_POINT_INFO_SUCCESS = 'LOAD_USER_POINT_INFO_SUCCESS';
export const LOAD_ROUTE_BETWEEN_POINTS = 'LOAD_ROUTE_BETWEEN_POINTS';
export const LOAD_ROUTE_BETWEEN_POINTS_SUCCESS = 'LOAD_ROUTE_BETWEEN_POINTS_SUCCESS';
export const FIND_NEAREST_BUS_STOPS = 'FIND_NEAREST_BUS_STOPS';
export const FIND_NEAREST_BUS_STOPS_SUCCESS = 'FIND_NEAREST_BUS_STOPS_SUCCESS';

/** Spinner actions **/
export const SEND_REQUEST = 'SEND_REQUEST';
export const RECEIVE_RESPONSE = 'RECEIVE_RESPONSE';

export const setFormField = (formName, field, value) => ({
  type: SET_FORM_FIELD,
  formName,
  field,
  value,
});

export const findUserLocation = () => ({
  type: FIND_USER_LOCATION,
});

export const findUserAddress = (formName, field) => ({
  type: FIND_USER_ADDRESS,
  formName,
  field,
});

export const searchRoute = params => ({
  type: SEARCH_ROUTE,
  params,
});

export const formSubmitFailed = (formName, errors) => ({
  type: FORM_SUBMIT_FAILED,
  formName,
  errors,
});

export const logIn = (email, password) => ({
  type: LOGIN,
  email,
  password,
});

export const signUp = (email, password) => ({
  type: SIGN_UP,
  email,
  password,
});

export const getRouteInfo = routeId => ({
  type: LOAD_ROUTE_INFO,
  routeId,
});

export const clearRouteInfo = () => ({
  type: CLEAR_ROUTE_INFO,
});

export const getRouteGeoData = routeId => ({
  type: LOAD_ROUTE_GEODATA,
  routeId,
});

export const clearMapGeoData = () => ({
  type: CLEAR_MAP_GEODATA,
});

export const getMapPointInfo = pointId => ({
  type: LOAD_MAP_POINT_INFO,
  pointId,
});

export const getUserPointInfo = () => ({
  type: LOAD_USER_POINT_INFO,
});

export const closeMapPointInfo = () => ({
  type: CLEAR_MAP_POINT_INFO,
});

export const toggleSideBar = () => ({
  type: TOGGLE_SIDEBAR,
});

export const loadRouteBetweenPoints = (startPoint, endPoint) => ({
  type: LOAD_ROUTE_BETWEEN_POINTS,
  startPoint,
  endPoint,
});

export const findNearestButStops = () => ({
  type: FIND_NEAREST_BUS_STOPS,
});

export const showNotification = (type, title, message) =>
  Notifications[type]({
    title,
    message,
    position: 'tr',
    autoDismiss: 5,
    dismissible: true,
  });
