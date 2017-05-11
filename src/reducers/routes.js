import {
  SEARCH_ROUTE_SUCCESS,
  LOAD_FAVORITES_SUCCESS,
  REMOVE_FROM_FAVORITES,
} from '../actions/actions';

const routes = (state = [], action) => {
  switch (action.type) {
    case SEARCH_ROUTE_SUCCESS:
      return action.routes;

    case LOAD_FAVORITES_SUCCESS: {
      const { favorites } = action;
      return favorites.routes;
    }

    case REMOVE_FROM_FAVORITES: {
      const { id } = action;
      const index = state.findIndex(route => route.id === id);

      return index !== -1 ?
        [...state.slice(0, index), ...state.slice(index + 1)] :
        state;
    }

    default:
      return state;
  }
};

export default routes;
