import {
  SET_FORM_FIELD,
  FIND_USER_ADDRESS_SUCCESS,
} from '../actions/actions';

const field = (state = '', action) => {
  switch (action.type) {
    case SET_FORM_FIELD:
      return action.value;

    case FIND_USER_ADDRESS_SUCCESS:
      return action.address;

    default:
      return state;
  }
};

export default field;
