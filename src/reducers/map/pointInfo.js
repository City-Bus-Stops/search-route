import {
  LOAD_MAP_POINT_INFO_SUCCESS,
  CLEAR_MAP_POINT_INFO,
  LOAD_USER_POINT_INFO_SUCCESS,
  LOAD_ROUTE_BETWEEN_POINTS_SUCCESS,
  SAVE_TO_FAVORITES_SUCCESS,
  LOAD_BUS_STOP_GEODATA_SUCCESS,
} from '../../actions/actions';

const pointInfo = (state = {}, action) => {
  switch (action.type) {
    case LOAD_MAP_POINT_INFO_SUCCESS:
    case LOAD_USER_POINT_INFO_SUCCESS:
      return action.info;

    case CLEAR_MAP_POINT_INFO:
    case LOAD_ROUTE_BETWEEN_POINTS_SUCCESS:
    case LOAD_BUS_STOP_GEODATA_SUCCESS:
      return {};

    case SAVE_TO_FAVORITES_SUCCESS:
      return {
        ...state,
        isSaved: true,
      };

    default:
      return state;
  }
};

export default pointInfo;
