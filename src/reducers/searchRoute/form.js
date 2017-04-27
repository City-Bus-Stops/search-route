import { combineReducers } from 'redux';

import { createWrapperReducer } from '../../utils';
import field from '../formField';
import errors from '../errors';

export default combineReducers({
  from: createWrapperReducer(field, action => action.field === 'from' && action.formName === 'searchRoute'),
  to: createWrapperReducer(field, action => action.field === 'to' && action.formName === 'searchRoute'),
  errors: createWrapperReducer(errors, action => action.formName === 'searchRoute'),
});

export const getFrom = state => state.from;

export const getTo = state => state.to;

export const getErrors = state => state.errors;

