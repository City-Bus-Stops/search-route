import { combineReducers } from 'redux';

import users from './users';
import isRegistrationModalOpen from './isRegistrationModalOpen';
import confirm from '../confirm';

import { createWrapperReducer } from '../../utils';

import { USER_ADMINISTRATION } from '../../containers/UsersAdministration/UsersAdministration';

const predicate = action => action.predicate === USER_ADMINISTRATION;

export default combineReducers({
  users,
  isRegistrationModalOpen,
  confirm: createWrapperReducer(confirm, predicate),
});

export const getUsers = state => state.users;

export const getIsRegistrationModalOpen = state => state.isRegistrationModalOpen;

export const getConfirmConfig = state => state.confirm;
