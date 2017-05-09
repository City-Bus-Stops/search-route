import { call, put, takeLatest, take, race, fork, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { push } from 'react-router-redux';

import {
  fetchFindUsertLocation,
  fetchFindUserAddress,
  fetchSearchRoute,
  fetchRouteInfo,
  fetchRouteGeoData,
  fetchMapPointInfo,
  fetchUserPointInfo,
  fetchRouteBetweenPoints,
  fetchNearestBusStops,
  fetchFavorites,
} from '../api/api';
import {
  FIND_USER_LOCATION,
  FIND_USER_LOCATION_SUCCESS,
  FIND_USER_ADDRESS,
  FIND_USER_ADDRESS_SUCCESS,
  SEARCH_ROUTE,
  SEARCH_ROUTE_SUCCESS,
  LOAD_ROUTE_INFO,
  LOAD_ROUTE_INFO_SUCCESS,
  CLEAR_ROUTE_INFO,
  LOAD_ROUTE_GEODATA,
  LOAD_ROUTE_GEODATA_SUCCESS,
  LOAD_ROUTE_GEODATA_FAILURE,
  LOAD_MAP_POINT_INFO,
  LOAD_MAP_POINT_INFO_SUCCESS,
  LOAD_USER_POINT_INFO,
  LOAD_USER_POINT_INFO_SUCCESS,
  CLEAR_MAP_POINT_INFO,
  SEND_REQUEST,
  RECEIVE_RESPONSE,
  LOAD_ROUTE_BETWEEN_POINTS,
  LOAD_ROUTE_BETWEEN_POINTS_SUCCESS,
  FIND_NEAREST_BUS_STOPS,
  FIND_NEAREST_BUS_STOPS_SUCCESS,
  LOAD_FAVORITES,
  LOAD_FAVORITES_SUCCESS,
  showNotification,
} from '../actions/actions';

function* findUserLocation() {
  try {
    yield put({ type: SEND_REQUEST });
    const location = yield call(fetchFindUsertLocation);
    yield put({ type: RECEIVE_RESPONSE });
    yield put({ type: FIND_USER_LOCATION_SUCCESS, location });
  } catch (err) {
    yield put({ type: RECEIVE_RESPONSE });
    yield put(showNotification('error', 'Error', err.message));
  }
}

function* findUserAddress(action) {
  const { field } = action;
  try {
    yield put({ type: FIND_USER_LOCATION });
    const { location } = yield take(FIND_USER_LOCATION_SUCCESS);
    const { coords } = location;
    yield put({ type: SEND_REQUEST });
    const response = yield call(fetchFindUserAddress, coords);
    yield put({ type: RECEIVE_RESPONSE });
    const { address } = response;
    yield put({ type: FIND_USER_ADDRESS_SUCCESS, address, coords, field });
  } catch (err) {
    yield put({ type: RECEIVE_RESPONSE });
    yield put(showNotification('error', 'Error', err.message));
  }
}

function* searchRoute(action) {
  const { params: { from, to }, predicate } = action;
  try {
    yield put({ type: SEND_REQUEST });
    const response = yield call(fetchSearchRoute, from, to);
    yield put({ type: RECEIVE_RESPONSE });
    const { routes } = response;
    yield put({ type: SEARCH_ROUTE_SUCCESS, routes, predicate });
  } catch (err) {
    yield put({ type: RECEIVE_RESPONSE });
    yield put(showNotification('error', 'Error', err.message));
  }
}

function* loadRouteInfo(action) {
  const { routeId } = action;
  try {
    const response = yield call(fetchRouteInfo, routeId);
    const { info } = response;
    yield put({ type: LOAD_ROUTE_INFO_SUCCESS, info, routeId });
  } catch (err) {
    yield put(showNotification('error', 'Error', err.message));
  }
}

function* pollRouteInfo(routeId) {
  try {
    yield call(delay, 60000);
    yield put({ type: LOAD_ROUTE_INFO, routeId });
  } catch (err) {
    yield put({ type: RECEIVE_RESPONSE });
    yield put(showNotification('error', 'Error', err.message));
  }
}

function* watchPollRouteInfo() {
  while (true) {
    const { routeId } = yield take(LOAD_ROUTE_INFO_SUCCESS);
    yield race([
      call(pollRouteInfo, routeId),
      take(CLEAR_ROUTE_INFO),
    ]);
  }
}

function* pollPointInfo(pointId) {
  try {
    yield call(delay, 60000);
    yield put({ type: LOAD_MAP_POINT_INFO, pointId });
  } catch (err) {
    yield put({ type: RECEIVE_RESPONSE });
    yield put(showNotification('error', 'Error', err.message));
  }
}

function* watchPollPointInfo() {
  while (true) {
    const { pointId } = yield take(LOAD_MAP_POINT_INFO_SUCCESS);
    yield race([
      call(pollPointInfo, pointId),
      take(CLEAR_MAP_POINT_INFO),
    ]);
  }
}

function* loadRouteGeoData(action) {
  const { routeId } = action;
  try {
    yield put({ type: SEND_REQUEST });
    const response = yield call(fetchRouteGeoData, routeId);
    yield put({ type: RECEIVE_RESPONSE });
    const { geoData } = response;
    yield put({ type: LOAD_ROUTE_GEODATA_SUCCESS, geoData });
    yield put(push('/map'));
  } catch (err) {
    yield put({ type: RECEIVE_RESPONSE });
    yield put(showNotification('error', 'Error', err.message));
    yield put({ type: LOAD_ROUTE_GEODATA_FAILURE });
  }
}

function* loadMapPointInfo(action) {
  const { pointId } = action;
  try {
    const response = yield call(fetchMapPointInfo, pointId);
    const { info } = response;
    yield put({ type: LOAD_MAP_POINT_INFO_SUCCESS, info, pointId });
  } catch (err) {
    yield put(showNotification('error', 'Error', err.message));
  }
}

function* loadUserPointInfo() {
  try {
    yield put({ type: FIND_USER_LOCATION });
    const { location } = yield take(FIND_USER_LOCATION_SUCCESS);
    const { coords } = location;
    yield put({ type: SEND_REQUEST });
    const info = yield call(fetchUserPointInfo, coords);
    yield put({ type: RECEIVE_RESPONSE });
    yield put({ type: LOAD_USER_POINT_INFO_SUCCESS, info });
  } catch (err) {
    yield put({ type: RECEIVE_RESPONSE });
    yield put(showNotification('error', 'Error', err.message));
  }
}

function* loadRouteBetweenPoints(action) {
  const { startPoint, endPoint } = action;
  try {
    yield put({ type: SEND_REQUEST });
    const geoData = yield call(fetchRouteBetweenPoints, startPoint, endPoint);
    yield put({ type: RECEIVE_RESPONSE });
    yield put({ type: LOAD_ROUTE_BETWEEN_POINTS_SUCCESS, geoData });
  } catch (err) {
    yield put({ type: RECEIVE_RESPONSE });
    yield put(showNotification('error', 'Error', err.message));
  }
}

function* findNearestBusStops() {
  try {
    yield put({ type: FIND_USER_LOCATION });
    const { location } = yield take(FIND_USER_LOCATION_SUCCESS);
    const { coords } = location;
    yield put({ type: SEND_REQUEST });
    const geoData = yield call(fetchNearestBusStops, coords);
    yield put({ type: RECEIVE_RESPONSE });
    yield put({ type: FIND_NEAREST_BUS_STOPS_SUCCESS, geoData });
  } catch (err) {
    yield put({ type: RECEIVE_RESPONSE });
    yield put(showNotification('error', 'Error', err.message));
  }
}

function* loadFavorites() {
  try {
    yield put({ type: SEND_REQUEST });
    const favorites = yield call(fetchFavorites);
    yield put({ type: RECEIVE_RESPONSE });
    yield put({ type: LOAD_FAVORITES_SUCCESS, favorites });
  } catch (err) {
    yield put({ type: RECEIVE_RESPONSE });
    yield put(showNotification('error', 'Error', err.message));
  }
}

function* appSaga() {
  yield takeLatest(FIND_USER_LOCATION, findUserLocation);
  yield takeLatest(FIND_USER_ADDRESS, findUserAddress);
  yield takeLatest(SEARCH_ROUTE, searchRoute);
  yield takeLatest(LOAD_ROUTE_INFO, loadRouteInfo);
  yield takeLatest(LOAD_ROUTE_GEODATA, loadRouteGeoData);
  yield takeLatest(LOAD_MAP_POINT_INFO, loadMapPointInfo);
  yield takeLatest(LOAD_USER_POINT_INFO, loadUserPointInfo);
  yield takeEvery(LOAD_ROUTE_BETWEEN_POINTS, loadRouteBetweenPoints);
  yield takeEvery(FIND_NEAREST_BUS_STOPS, findNearestBusStops);
  yield takeEvery(LOAD_FAVORITES, loadFavorites);
  yield [fork(watchPollRouteInfo), fork(watchPollPointInfo)];
}
export default appSaga;
