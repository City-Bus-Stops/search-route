import { isEmpty } from 'lodash';
import { browserHistory } from 'react-router';

import {
  FIND_USER_ADDRESS_SUCCESS,
  LOAD_ROUTE_INFO_SUCCESS,
  LOAD_ROUTE_GEODATA_FAILURE,
  putRouteInfo,
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
