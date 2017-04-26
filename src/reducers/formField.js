import { SET_FORM_FIELD } from '../actions/actions';

const field = (state = '', action) => {
  switch (action.type) {
    case SET_FORM_FIELD:
      return action.value;

    default:
      return state;
  }
};

export default field;
