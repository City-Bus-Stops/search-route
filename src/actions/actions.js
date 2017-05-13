import Notifications from 'react-notification-system-redux';

/** Search Routes actions **/
export const FIND_USER_LOCATION = 'FIND_USER_LOCATION';
export const FIND_USER_LOCATION_SUCCESS = 'FIND_USER_LOCATION_SUCCESS';
export const FIND_USER_ADDRESS = 'FIND_USER_ADDRESS';
export const FIND_USER_ADDRESS_SUCCESS = 'FIND_USER_ADDRESS_SUCCESS';
export const SEARCH_ROUTE = 'SEARCH_ROUTE';
export const SEARCH_ROUTE_SUCCESS = 'SEARCH_ROUTE_SUCCESS';

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

/** Favorites actions **/
export const LOAD_FAVORITES = 'LOAD_FAVORITES';
export const LOAD_FAVORITES_SUCCESS = 'LOAD_FAVORITES_SUCCESS';
export const LOAD_BUS_STOP_GEODATA = 'LOAD_BUS_STOP_GEODATA';
export const LOAD_BUS_STOP_GEODATA_SUCCESS = 'LOAD_BUS_STOP_GEODATA_SUCCESS';
export const SAVE_TO_FAVORITES = 'SAVE_TO_FAVORITES';
export const SAVE_TO_FAVORITES_SUCCESS = 'SAVE_TO_FAVORITES_SUCCESS';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

/** Confirm actions **/
export const OPEN_CONFIRM = 'OPEN_CONFIRM';
export const CLOSE_CONFIRM = 'CLOSE_CONFIRM';

export const findUserLocation = () => ({
  type: FIND_USER_LOCATION,
});

export const findUserAddress = field => ({
  type: FIND_USER_ADDRESS,
  field,
});

export const searchRoute = (params, predicate) => ({
  type: SEARCH_ROUTE,
  params,
  predicate,
});

export const logIn = ({ email, password }) => ({
  type: LOGIN,
  email,
  password,
});

export const signUp = ({ email, password }) => ({
  type: SIGN_UP,
  email,
  password,
});

export const getRouteInfo = (routeId, predicate) => ({
  type: LOAD_ROUTE_INFO,
  routeId,
  predicate,
});

export const clearRouteInfo = predicate => ({
  type: CLEAR_ROUTE_INFO,
  predicate,
});

export const getRouteGeoData = (routeId, predicate) => ({
  type: LOAD_ROUTE_GEODATA,
  routeId,
  predicate,
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

export const loadFavorites = predicate => ({
  type: LOAD_FAVORITES,
  predicate,
});

export const loadBusStopGeoData = busStopId => ({
  type: LOAD_BUS_STOP_GEODATA,
  busStopId,
});

export const saveToFavorites = id => ({
  type: SAVE_TO_FAVORITES,
  id,
});

export const removeFromFavorites = (id, predicate) => ({
  type: REMOVE_FROM_FAVORITES,
  id,
  predicate,
});

export const openConfirm = (config, predicate) => ({
  type: OPEN_CONFIRM,
  config,
  predicate,
});

export const closeConfirm = predicate => ({
  type: CLOSE_CONFIRM,
  predicate,
});

export const showNotification = (type, title, message) =>
  Notifications[type]({
    title,
    message,
    position: 'tr',
    autoDismiss: 5,
    dismissible: true,
  });
