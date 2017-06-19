import {
  LOAD_ROUTE_BUS_STOP_SCHEDULE_SUCCESS,
} from '../../actions/actions';

const routeBusStop = (state = {}, action) => {
  switch (action.type) {
    case LOAD_ROUTE_BUS_STOP_SCHEDULE_SUCCESS: {
      return action.data;
    }

    default:
      return state;
  }
};

export default routeBusStop;
