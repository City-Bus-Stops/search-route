import {
  LOAD_BUS_STOPS_GEODATA_SUCCESS,
  FIND_NEAREST_BUS_STOPS_SUCCESS,
  LOAD_BUS_STOP_GEODATA_SUCCESS,
} from '../../actions/actions';

const clusterGeoData = (state = [], action) => {
  switch (action.type) {
    case LOAD_BUS_STOPS_GEODATA_SUCCESS:
    case FIND_NEAREST_BUS_STOPS_SUCCESS:
    case LOAD_BUS_STOP_GEODATA_SUCCESS: {
      return action.geoData;
    }

    default:
      return state;
  }
};

export default clusterGeoData;
