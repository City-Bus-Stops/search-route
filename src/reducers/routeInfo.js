import {
  RECEIVE_ROUTE_INFO,
  CLEAR_ROUTE_INFO,
} from '../actions/actions';

const routeInfo = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ROUTE_INFO:
      return action.info;

    case CLEAR_ROUTE_INFO:
      return {};

    default:
      return state;
  }
};

export default routeInfo;
