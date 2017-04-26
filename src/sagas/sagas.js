import { call, put, takeLatest, take, race, fork } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import {
  fetchFindUsertLocation,
  fetchFindUserAddress,
  fetchSearchRoute,
  fetchRouteInfo,
  fetchRouteGeoData,
  fetchMapPointInfo,
} from '../api/api';
import {
  FIND_USER_LOCATION,
  FIND_USER_LOCATION_SUCCESS,
  FIND_USER_ADDRESS_SUCCESS,
  SEARCH_ROUTES,
  SEARCH_ROUTES_SUCCESS,
  LOAD_ROUTE_INFO,
  LOAD_ROUTE_INFO_SUCCESS,
  CLEAR_ROUTE_INFO,
  LOAD_ROUTE_GEODATA,
  LOAD_ROUTE_GEODATA_SUCCESS,
  LOAD_ROUTE_GEODATA_FAILURE,
  LOAD_MAP_POINT_INFO,
  LOAD_MAP_POINT_INFO_SUCCESS,
  CLEAR_MAP_POINT_INFO,
  showNotification,
} from '../actions/actions';

function* findUserLocation(action) {
  const { formName, field } = action;
  try {
    const location = yield call(fetchFindUsertLocation);
    yield put({ type: FIND_USER_LOCATION_SUCCESS, location, formName, field });
  } catch (err) {
    yield put(showNotification('error', 'Error', err.message));
  }
}

function* findUserAddress(action) {
  const { location, formName, field } = action;
  const { latitude, longitude } = location.coords;
  try {
    const response = yield call(fetchFindUserAddress, latitude, longitude);
    const { address } = response.data;
    yield put({ type: FIND_USER_ADDRESS_SUCCESS, address, formName, field });
  } catch (err) {
    yield put(showNotification('error', 'Error', err.message));
  }
}

function* searchRoutes(action) {
  const { routesType, params } = action;
  const { from, to } = params;
  try {
    const response = yield call(fetchSearchRoute, from, to);
    const { routes } = response.data;
    yield put({ type: SEARCH_ROUTES_SUCCESS, routes, routesType });
  } catch (err) {
    yield put(showNotification('error', 'Error', err.message));
  }
}

function* loadRouteInfo(action) {
  const { routeId, routeType } = action;
  try {
    const response = yield call(fetchRouteInfo, routeId);
    const { info } = response.data;
    yield put({ type: LOAD_ROUTE_INFO_SUCCESS, info, routeType, routeId });
  } catch (err) {
    yield put(showNotification('error', 'Error', err.message));
  }
}

function* pollRouteInfo(routeType, routeId) {
  try {
    yield call(delay, 60000);
    yield put({ type: LOAD_ROUTE_INFO, routeType, routeId });
  } catch (err) {
    yield put(showNotification('error', 'Error', err.message));
  }
}

function* watchPollRouteInfo() {
  while (true) {
    const { routeType, routeId } = yield take(LOAD_ROUTE_INFO_SUCCESS);
    yield race([
      call(pollRouteInfo, routeType, routeId),
      take(CLEAR_ROUTE_INFO),
    ]);
  }
}

function* pollPointInfo(pointType, pointId) {
  try {
    yield call(delay, 5000);
    yield put({ type: LOAD_MAP_POINT_INFO, pointType, pointId });
  } catch (err) {
    yield put(showNotification('error', 'Error', err.message));
  }
}

function* watchPollPointInfo() {
  while (true) {
    const { pointType, id } = yield take(LOAD_MAP_POINT_INFO_SUCCESS);
    yield race([
      call(pollPointInfo, pointType, id),
      take(CLEAR_MAP_POINT_INFO),
    ]);
  }
}

function* loadRouteGeoData(action) {
  const { routeId, routeType } = action;
  try {
    const response = yield call(fetchRouteGeoData, routeId);
    const { geoData } = response.data;
    yield put({ type: LOAD_ROUTE_GEODATA_SUCCESS, geoData, routeType });
  } catch (err) {
    yield put(showNotification('error', 'Error', err.message));
    yield put({ type: LOAD_ROUTE_GEODATA_FAILURE });
  }
}

function* loadMapPointInfo(action) {
  const { pointId, pointType } = action;
  try {
    const response = yield call(fetchMapPointInfo, pointId);
    const { id, info } = response.data;
    yield put({ type: LOAD_MAP_POINT_INFO_SUCCESS, pointType, id, info });
  } catch (err) {
    yield put(showNotification('error', 'Error', err.message));
  }
}

function* appSaga() {
  yield takeLatest(FIND_USER_LOCATION, findUserLocation);
  yield takeLatest(FIND_USER_LOCATION_SUCCESS, findUserAddress);
  yield takeLatest(SEARCH_ROUTES, searchRoutes);
  yield takeLatest(LOAD_ROUTE_INFO, loadRouteInfo);
  yield takeLatest(LOAD_ROUTE_GEODATA, loadRouteGeoData);
  yield takeLatest(LOAD_MAP_POINT_INFO, loadMapPointInfo);
  yield [fork(watchPollRouteInfo), fork(watchPollPointInfo)];
}
export default appSaga;
