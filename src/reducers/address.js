import {
  FIND_USER_ADDRESS_SUCCESS,
  LOAD_USER_POINT_INFO_SUCCESS,
  LOAD_MAP_POINT_INFO_SUCCESS,
} from '../actions/actions';

const address = (state = '', action) => {
  switch (action.type) {
    case FIND_USER_ADDRESS_SUCCESS:
      return action.address;

    case LOAD_USER_POINT_INFO_SUCCESS:
    case LOAD_MAP_POINT_INFO_SUCCESS: {
      const { info } = action.info;
      return info.address;
    }

    default:
      return state;
  }
};

export default address;
