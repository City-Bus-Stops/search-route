import {
  LOAD_MAP_POINT_INFO_SUCCESS,
  CLEAR_MAP_POINT_INFO,
  LOAD_USER_POINT_INFO_SUCCESS,
  LOAD_ROUTE_BETWEEN_POINTS_SUCCESS,
} from '../../actions/actions';

const pointInfo = (state = {}, action) => {
  switch (action.type) {
    case LOAD_MAP_POINT_INFO_SUCCESS:
    case LOAD_USER_POINT_INFO_SUCCESS:
      return action.info;

    case CLEAR_MAP_POINT_INFO:
    case LOAD_ROUTE_BETWEEN_POINTS_SUCCESS:
      return {};

    default:
      return state;
  }
};

export default pointInfo;
