import {
  TOGGLE_SIDEBAR,
  CLOSE_SIDEBAR,
} from '../../actions/actions';

const isSidebarOpen = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return !state;

    case CLOSE_SIDEBAR:
      return false;

    default:
      return state;
  }
};

export default isSidebarOpen;
