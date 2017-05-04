import {
  FIND_USER_ADDRESS_SUCCESS,
  LOAD_USER_POINT_INFO_SUCCESS,
} from '../actions/actions';

const userAddress = (state = '', action) => {
  switch (action.type) {
    case FIND_USER_ADDRESS_SUCCESS:
      return action.address;

    case LOAD_USER_POINT_INFO_SUCCESS: {
      const { address } = action.info;
      return address;
    }

    default:
      return state;
  }
};

export default userAddress;
