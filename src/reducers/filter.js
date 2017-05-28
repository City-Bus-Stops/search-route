import {
  SET_FILTER,
  CLEAR_FILTER,
} from '../actions/actions';

const filter = (state = '', action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;

    case CLEAR_FILTER:
      return '';

    default:
      return state;
  }
};

export default filter;
