import {
  LOAD_MAP_POINT_INFO_SUCCESS,
  CLEAR_MAP_POINT_INFO,
  LOAD_USER_POINT_INFO_SUCCESS,
} from '../../actions/actions';

const pointInfo = (state = {}, action) => {
  switch (action.type) {
    case LOAD_MAP_POINT_INFO_SUCCESS:
    case LOAD_USER_POINT_INFO_SUCCESS:
      return action.info;

    case CLEAR_MAP_POINT_INFO:
      return {};

    default:
      return state;
  }
};

export default pointInfo;
