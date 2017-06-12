import {
  LOAD_BUS_STOPS_GEODATA_SUCCESS,
} from '../actions/actions';

const clusterGeoData = (state = [], action) => {
  switch (action.type) {
    case LOAD_BUS_STOPS_GEODATA_SUCCESS: {
      return action.geoData;
    }

    default:
      return state;
  }
};

export default clusterGeoData;
