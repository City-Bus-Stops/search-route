import { combineReducers } from 'redux';

import { createWrapperReducer } from '../../utils';

import coordinates from '../coordinates';
import address from '../address';

export default combineReducers({
  coordinates,
  address,
});

export const getCoordinates = state => state.coordinates;

export const getAddress = state => state.address;
