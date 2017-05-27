import loginForm from './loginForm';
import signupForm from './signupForm';
import searchRouteForm from './searchRouteForm';
import addUserForm from './addUserForm';

import { LOGIN_FORM } from '../../containers/Login/Login';
import { SIGN_UP_FORM } from '../../containers/Signup/Signup';
import { SEARCH_ROUTE } from '../../containers/SearchRouteForm/SearchRouteForm';
import { ADD_USER_FORM } from '../../containers/AddUser/AddUser';

export default {
  [LOGIN_FORM]: loginForm,
  [SIGN_UP_FORM]: signupForm,
  [SEARCH_ROUTE]: searchRouteForm,
  [ADD_USER_FORM]: addUserForm,
};
