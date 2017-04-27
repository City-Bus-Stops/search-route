import { isEmpty, includes } from 'lodash';
import { browserHistory } from 'react-router';

import {
  FIND_USER_ADDRESS_SUCCESS,
  LOAD_ROUTE_INFO_SUCCESS,
  LOAD_ROUTE_GEODATA_FAILURE,
  SEND_REQUEST,
  RECEIVE_RESPONSE,
  TOGGLE_SPINNER,
  putRouteInfo,
  setFormField,
} from '../actions/actions';

export const findUserAddressSuccess = store => next => (action) => {
  if (action.type === FIND_USER_ADDRESS_SUCCESS) {
    const { formName, field, address } = action;
    next(action);
    if (!isEmpty(formName) && !isEmpty(field)) {
      store.dispatch(setFormField(formName, field, address));
    }
  } else {
    next(action);
  }
};

export const getRouteInfoSuccess = store => next => (action) => {
  if (action.type === LOAD_ROUTE_INFO_SUCCESS) {
    const { info, routeType, routeId } = action;
    next(action);
    store.dispatch(putRouteInfo(routeType, { ...info, routeType, routeId }));
  } else {
    next(action);
  }
};

export const loadRouteGeoDataFailure = () => next => (action) => {
  if (action.type === LOAD_ROUTE_GEODATA_FAILURE) {
    browserHistory.goBack();
  }
  next(action);
};


export const spinnerMiddleware = store => next => (action) => {
  if (includes([SEND_REQUEST, RECEIVE_RESPONSE], action.type)) {
    next(action);
    store.dispatch({ type: TOGGLE_SPINNER });
  } else {
    next(action);
  }
};
