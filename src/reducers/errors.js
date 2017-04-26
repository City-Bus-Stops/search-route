import { omit } from 'lodash';

import {
  FORM_SUBMIT_FAILED,
  SET_FORM_FIELD,
} from '../actions/actions';

const errors = (state = {}, action) => {
  switch (action.type) {
    case FORM_SUBMIT_FAILED:
      return action.errors;

    case SET_FORM_FIELD: {
      const { field } = action;
      return omit(state, [field]);
    }

    default:
      return state;
  }
};

export default errors;
