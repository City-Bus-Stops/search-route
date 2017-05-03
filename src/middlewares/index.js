import { isEmpty, includes } from 'lodash';
import { push } from 'react-router-redux';

import { validateLoginForm } from '../validation';
import { LOGIN_FORM } from '../reducers/login/login';

import {
  FIND_USER_ADDRESS_SUCCESS,
  SEND_REQUEST,
  RECEIVE_RESPONSE,
  TOGGLE_SPINNER,
  LOAD_ROUTE_GEODATA_SUCCESS,
  LOAD_ROUTE_BETWEEN_POINTS_SUCCESS,
  CLEAR_MAP_POINT_INFO,
  LOGIN,
  setFormField,
  formSubmitFailed,
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

export const handleIsGeoDataLoaded = store => next => (action) => {
  if (action.type === LOAD_ROUTE_GEODATA_SUCCESS) {
    store.dispatch(push('/map'));
  }
  next(action);
};

export const handleRouteBetweenPointsIsLoaded = store => next => (action) => {
  if (action.type === LOAD_ROUTE_BETWEEN_POINTS_SUCCESS) {
    store.dispatch({ type: CLEAR_MAP_POINT_INFO });
  }
  next(action);
};

export const handleLoginAction = store => next => (action) => {
  if (action.type === LOGIN) {
    const { email, password } = action;
    const validateErorrs = validateLoginForm({ email, password });
    if (isEmpty(validateErorrs)) {
      next(action);
    } else {
      store.dispatch(formSubmitFailed(LOGIN_FORM, validateErorrs));
    }
  } else {
    next(action);
  }
};
