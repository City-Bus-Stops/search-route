import { combineReducers } from 'redux';

import userCoordinates from '../userCoordinates';
import userAddress from '../userAddress';

export default combineReducers({
  coordinates: userCoordinates,
  address: userAddress,
});

export const getCoordinates = state => state.coordinates;

export const getAddress = state => state.address;
