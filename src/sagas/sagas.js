import { call, put, takeLatest } from 'redux-saga/effects';

import {
  fetchFindUsertLocation,
  fetchFindUserAddress,
  fetchSearchRoute,
} from '../api/api';
import {
  FIND_USER_LOCATION,
  FIND_USER_LOCATION_SUCCESS,
  FIND_USER_ADDRESS_SUCCESS,
  SEARCH_ROUTES,
  SEARCH_ROUTES_SUCCESS,
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
    const reponse = yield call(fetchSearchRoute, from, to);
    const { routes } = reponse.data;
    yield put({ type: SEARCH_ROUTES_SUCCESS, routes, routesType });
  } catch (err) {
    yield put(showNotification('error', 'Error', err.message));
  }
}

function* appSaga() {
  yield takeLatest(FIND_USER_LOCATION, findUserLocation);
  yield takeLatest(FIND_USER_LOCATION_SUCCESS, findUserAddress);
  yield takeLatest(SEARCH_ROUTES, searchRoutes);
}
export default appSaga;
