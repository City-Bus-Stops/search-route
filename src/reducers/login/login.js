import { combineReducers } from 'redux';

import { createNamedWrapperReducer } from '../../utils';
import field from '../formField';
import errors from '../errors';

export default combineReducers({
  email: createNamedWrapperReducer(field, action => action.field === 'email' && action.formName === 'loginForm'),
  password: createNamedWrapperReducer(field, action => action.field === 'password' && action.formName === 'loginForm'),
  errors: createNamedWrapperReducer(errors, action => action.formName === 'loginForm'),
});

export const getEmail = state => state.email;

export const getPassword = state => state.password;

export const getErrors = state => state.errors;

