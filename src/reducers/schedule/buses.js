import {
 LOAD_BUSES_SUCCESS,
} from '../../actions/actions';

const buses = (state = [], action) => {
  switch (action.type) {
    case LOAD_BUSES_SUCCESS: {
      return action.buses;
    }

    default:
      return state;
  }
};

export default buses;
