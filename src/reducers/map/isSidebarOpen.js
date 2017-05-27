import {
  TOGGLE_SIDEBAR,
  FIND_NEAREST_BUS_STOPS_SUCCESS,
  CLOSE_SIDEBAR,
} from '../../actions/actions';

const isSidebarOpen = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return !state;

    case FIND_NEAREST_BUS_STOPS_SUCCESS:
    case CLOSE_SIDEBAR:
      return false;

    default:
      return state;
  }
};

export default isSidebarOpen;
