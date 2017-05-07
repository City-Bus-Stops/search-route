import { combineReducers } from 'redux';

import { createWrapperReducer } from '../../utils';
import field from '../formField';
import errors from '../errors';
import { SIGN_UP_FORM } from '../../containers/SignupContainer/SignupContainer';

export default combineReducers({
  email: createWrapperReducer(field, action => action.field === 'email' && action.formName === SIGN_UP_FORM),
  password: createWrapperReducer(field, action => action.field === 'password' && action.formName === SIGN_UP_FORM),
  confirmPassword: createWrapperReducer(field, action => action.field === 'confirmPassword' && action.formName === SIGN_UP_FORM),
  errors: createWrapperReducer(errors, action => action.formName === SIGN_UP_FORM),
});

export const getEmail = state => state.email;

export const getPassword = state => state.password;

export const getConfirmPassword = state => state.confirmPassword;

export const getErrors = state => state.errors;

