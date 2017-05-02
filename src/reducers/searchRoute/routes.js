import {
  SEARCH_ROUTE_SUCCESS,
} from '../../actions/actions';

const routes = (state = [], action) => {
  switch (action.type) {
    case SEARCH_ROUTE_SUCCESS:
      return action.routes;

    default:
      return state;
  }
};

export default routes;
