import {
  SEARCH_ROUTES_SUCCESS,
} from '../actions/actions';

const routes = (state = [], action) => {
  switch (action.type) {
    case SEARCH_ROUTES_SUCCESS:
      return action.routes;

    default:
      return state;
  }
};

export default routes;
