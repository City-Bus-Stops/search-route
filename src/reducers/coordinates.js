import {
  FIND_USER_LOCATION_SUCCESS,
} from '../actions/actions';

const userCoordinates = (state = [], action) => {
  switch (action.type) {
    case FIND_USER_LOCATION_SUCCESS: {
      const { latitude, longitude } = action.location.coords;
      return [latitude, longitude];
    }

    default:
      return state;
  }
};

export default userCoordinates;
