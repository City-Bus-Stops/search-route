import {
  TOGGLE_SPINNER,
} from '../actions/actions';

const spinner = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_SPINNER:
      return !state;

    default:
      return state;
  }
};

export default spinner;
