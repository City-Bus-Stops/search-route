import {
  LOAD_BUS_ROUTES_SUCCESS,
} from '../../actions/actions';

const buses = (state = {}, action) => {
  switch (action.type) {
    case LOAD_BUS_ROUTES_SUCCESS: {
      return action.data;
    }

    default:
      return state;
  }
};

export default buses;
