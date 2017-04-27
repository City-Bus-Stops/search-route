import Notifications from 'react-notification-system-redux';

/** Search Routes actions **/
export const FIND_USER_LOCATION = 'FIND_USER_LOCATION';
export const FIND_USER_LOCATION_SUCCESS = 'FIND_USER_LOCATION_SUCCESS';
export const FIND_USER_ADDRESS = 'FIND_USER_ADDRESS';
export const FIND_USER_ADDRESS_SUCCESS = 'FIND_USER_ADDRESS_SUCCESS';
export const SEARCH_ROUTES = 'SEARCH_ROUTES';
export const SEARCH_ROUTES_SUCCESS = 'SEARCH_ROUTES_SUCCESS';
export const LOAD_ROUTE_INFO = 'LOAD_ROUTE_INFO';
export const LOAD_ROUTE_INFO_SUCCESS = 'LOAD_ROUTE_INFO_SUCCESS';

/** Forms actions **/
export const SET_FORM_FIELD = 'SET_FORM_FIELD';
export const FORM_SUBMIT_FAILED = 'FORM_SUBMIT_FAILED';

/** User Management actions **/
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const SIGNUP = 'SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';

/** Route Info actions **/
export const RECEIVE_ROUTE_INFO = 'RECEIVE_ROUTE_INFO';
export const CLEAR_ROUTE_INFO = 'CLEAR_ROUTE_INFO';

/** Map actions **/
export const LOAD_ROUTE_GEODATA = 'LOAD_ROUTE_GEODATA';
export const LOAD_ROUTE_GEODATA_SUCCESS = 'LOAD_ROUTE_GEODATA_SUCCESS';
export const LOAD_ROUTE_GEODATA_FAILURE = 'LOAD_ROUTE_GEODATA_FAILURE';
export const CLEAR_ROUTE_GEODATA = 'CLEAR_ROUTE_GEODATA';
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const LOAD_MAP_POINT_INFO = 'LOAD_MAP_POINT_INFO';
export const LOAD_MAP_POINT_INFO_SUCCESS = 'LOAD_MAP_POINT_INFO_SUCCESS';
export const CLEAR_MAP_POINT_INFO = 'CLEAR_MAP_POINT_INFO';

/** Spinner actions **/
export const SEND_REQUEST = 'SEND_REQUEST';
export const RECEIVE_RESPONSE = 'RECEIVE_RESPONSE';
export const TOGGLE_SPINNER = 'TOGGLE_SPINNER';

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

export const searchRoutes = (routesType, params) => ({
  type: SEARCH_ROUTES,
  routesType,
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
  type: SIGNUP,
  email,
  password,
});

export const putRouteInfo = (modalType, info) => ({
  type: RECEIVE_ROUTE_INFO,
  modalType,
  info,
});

export const clearRouteInfo = modalType => ({
  type: CLEAR_ROUTE_INFO,
  modalType,
});

export const getRouteInfo = (routeId, routeType) => ({
  type: LOAD_ROUTE_INFO,
  routeId,
  routeType,
});

export const loadRouteGeoData = (routeId, routeType) => ({
  type: LOAD_ROUTE_GEODATA,
  routeId,
  routeType,
});

export const clearRouteGeoData = routeType => ({
  type: CLEAR_ROUTE_GEODATA,
  routeType,
});

export const getMapPointInfo = (pointId, pointType) => ({
  type: LOAD_MAP_POINT_INFO,
  pointId,
  pointType,
});

export const clearMapPointInfo = pointType => ({
  type: CLEAR_MAP_POINT_INFO,
  pointType,
});

export const toggleSideBar = sidebarType => ({
  type: TOGGLE_SIDEBAR,
  sidebarType,
});

export const showNotification = (type, title, message) =>
  Notifications[type]({
    title,
    message,
    position: 'tr',
    autoDismiss: 5,
    dismissible: true,
  });
