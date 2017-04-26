import {
  LOAD_ROUTE_GEODATA_SUCCESS,
  CLEAR_ROUTE_GEODATA,
} from '../actions/actions';

const geoRoute = (state = [], action) => {
  switch (action.type) {
    case LOAD_ROUTE_GEODATA_SUCCESS:
      return action.geoData;

    case CLEAR_ROUTE_GEODATA:
      return [];

    default:
      return state;
  }
};

export default geoRoute;
