import { combineReducers } from 'redux';

import { createWrapperReducer } from '../../utils';
import field from '../formField';
import errors from '../errors';

export default combineReducers({
  email: createWrapperReducer(field, action => action.field === 'email' && action.formName === 'loginForm'),
  password: createWrapperReducer(field, action => action.field === 'password' && action.formName === 'loginForm'),
  errors: createWrapperReducer(errors, action => action.formName === 'loginForm'),
});

export const getEmail = state => state.email;

export const getPassword = state => state.password;

export const getErrors = state => state.errors;

