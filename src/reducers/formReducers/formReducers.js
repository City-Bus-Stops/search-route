import loginForm from './loginForm';
import signupForm from './signupForm';
import searchRouteForm from './searchRouteForm';

import { LOGIN_FORM } from '../../containers/LoginContainer/LoginContainer';
import { SIGN_UP_FORM } from '../../containers/SignupContainer/SignupContainer';
import { SEARCH_ROUTE } from '../../containers/SearchRouteFormContainer/SearchRouteFormContainer';

export default {
  [LOGIN_FORM]: loginForm,
  [SIGN_UP_FORM]: signupForm,
  [SEARCH_ROUTE]: searchRouteForm,
};
