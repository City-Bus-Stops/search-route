import { combineReducers } from 'redux';

import { createNamedWrapperReducer } from '../../utils';
import field from '../formField';
import errors from '../errors';

export default combineReducers({
  email: createNamedWrapperReducer(field, action => action.field === 'email' && action.formName === 'signupForm'),
  password: createNamedWrapperReducer(field, action => action.field === 'password' && action.formName === 'signupForm'),
  confirmPassword: createNamedWrapperReducer(field, action => action.field === 'confirmPassword' && action.formName === 'signupForm'),
  errors: createNamedWrapperReducer(errors, action => action.formName === 'signupForm'),
});

export const getEmail = state => state.email;

export const getPassword = state => state.password;

export const getConfirmPassword = state => state.confirmPassword;

export const getErrors = state => state.errors;

