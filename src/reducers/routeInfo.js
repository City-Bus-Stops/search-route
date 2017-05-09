import {
  LOAD_ROUTE_INFO_SUCCESS,
  SAVE_TO_FAVORITES_SUCCESS,
  CLEAR_ROUTE_INFO,
} from '../actions/actions';

const routeInfo = (state = {}, action) => {
  switch (action.type) {
    case LOAD_ROUTE_INFO_SUCCESS:
      return action.info;

    case SAVE_TO_FAVORITES_SUCCESS:
      return {
        ...state,
        isSaved: true,
      };

    case CLEAR_ROUTE_INFO:
      return {};

    default:
      return state;
  }
};

export default routeInfo;
