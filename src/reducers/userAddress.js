import {
  FIND_USER_ADDRESS_SUCCESS,
  LOAD_USER_POINT_INFO_SUCCESS,
} from '../actions/actions';

const userAddress = (state = '', action) => {
  switch (action.type) {
    case FIND_USER_ADDRESS_SUCCESS:
    case LOAD_USER_POINT_INFO_SUCCESS:
      return action.address;

    default:
      return state;
  }
};

export default userAddress;
