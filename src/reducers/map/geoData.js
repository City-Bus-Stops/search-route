import {
  LOAD_ROUTE_GEODATA_SUCCESS,
  LOAD_ROUTE_BETWEEN_POINTS_SUCCESS,
  CLEAR_MAP_GEODATA,
} from '../../actions/actions';

const getData = (state = [], action) => {
  switch (action.type) {
    case LOAD_ROUTE_GEODATA_SUCCESS:
    case LOAD_ROUTE_BETWEEN_POINTS_SUCCESS:
      return action.geoData;

    case CLEAR_MAP_GEODATA:
      return [];

    default:
      return state;
  }
};

export default getData;
