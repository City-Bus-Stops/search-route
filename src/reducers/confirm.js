import {
  OPEN_CONFIRM,
  CLOSE_CONFIRM,
} from '../actions/actions';

const confirm = (state = {}, action) => {
  switch (action.type) {
    case OPEN_CONFIRM:
      return action.config;

    case CLOSE_CONFIRM:
      return {};

    default:
      return state;
  }
};

export default confirm;
