import { isEmpty, includes } from 'lodash';
import { push } from 'react-router-redux';

import {
  FIND_USER_ADDRESS_SUCCESS,
  SEND_REQUEST,
  RECEIVE_RESPONSE,
  TOGGLE_SPINNER,
  LOAD_ROUTE_GEODATA_SUCCESS,
  LOAD_ROUTE_BETWEEN_POINTS_SUCCESS,
  CLEAR_MAP_POINT_INFO,
  setFormField,
} from '../actions/actions';

export const findUserAddressSuccess = store => next => (action) => {
  if (action.type === FIND_USER_ADDRESS_SUCCESS) {
    const { formName, field, address } = action;
    if (!isEmpty(formName) && !isEmpty(field)) {
      store.dispatch(setFormField(formName, field, address));
    }
  }
  next(action);
};

export const spinnerMiddleware = store => next => (action) => {
  if (includes([SEND_REQUEST, RECEIVE_RESPONSE], action.type)) {
    store.dispatch({ type: TOGGLE_SPINNER });
  }
  next(action);
};

export const checkIsGeoDataLoaded = store => next => (action) => {
  if (action.type === LOAD_ROUTE_GEODATA_SUCCESS) {
    store.dispatch(push('/map'));
  }
  next(action);
};

export const checkIsRouteBetweenPointsIsLoaded = store => next => (action) => {
  if (action.type === LOAD_ROUTE_BETWEEN_POINTS_SUCCESS) {
    store.dispatch({ type: CLEAR_MAP_POINT_INFO });
  }
  next(action);
};
