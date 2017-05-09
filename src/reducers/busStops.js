import {
  LOAD_FAVORITES_SUCCESS,
  REMOVE_FROM_FAVORITES,
} from '../actions/actions';

const busStops = (state = [], action) => {
  switch (action.type) {
    case LOAD_FAVORITES_SUCCESS: {
      const { favorites } = action;
      return favorites.busStops;
    }

    case REMOVE_FROM_FAVORITES: {
      const { id } = action;
      const index = state.findIndex(busStop => busStop.id === id);

      return index !== -1 ?
        [...state.slice(0, index), ...state.slice(index + 1)] :
        state;
    }

    default:
      return state;
  }
};

export default busStops;
