import { combineReducers } from 'redux';

import { createWrapperReducer } from '../../utils';
import field from '../formField';
import errors from '../errors';
import { SEARCH_ROUTE } from '../../components/SearchRoute/SearchRoute';

export default combineReducers({
  from: createWrapperReducer(field, action => action.field === 'from' && action.formName === SEARCH_ROUTE),
  to: createWrapperReducer(field, action => action.field === 'to' && action.formName === SEARCH_ROUTE),
  errors: createWrapperReducer(errors, action => action.formName === SEARCH_ROUTE),
});

export const getFrom = state => state.from;

export const getTo = state => state.to;

export const getErrors = state => state.errors;

