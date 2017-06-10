import { combineReducers } from 'redux';

import coordinates from './coordinates';
import address from './address';

export default combineReducers({
  coordinates,
  address,
});

export const getUserCoordinates = state => state.coordinates;

export const getUserAddress = state => state.address;

