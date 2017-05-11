import {
  SEND_REQUEST,
  RECEIVE_RESPONSE,
} from '../actions/actions';

const spinner = (state = false, action) => {
  switch (action.type) {
    case SEND_REQUEST:
    case RECEIVE_RESPONSE:
      return !state;

    default:
      return state;
  }
};

export default spinner;
