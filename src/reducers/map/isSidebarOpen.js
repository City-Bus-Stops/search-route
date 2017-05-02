import {
  TOGGLE_SIDEBAR,
} from '../../actions/actions';

const isSidebarOpen = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return !state;

    default:
      return state;
  }
};

export default isSidebarOpen;
