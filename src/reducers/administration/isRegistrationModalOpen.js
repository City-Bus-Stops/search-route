import {
  TOGGLE_REGISTRATION_MODAL,
  REGISTER_USER_SUCCESS,
} from '../../actions/actions';

const isRegistrationModalOpen = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_REGISTRATION_MODAL:
      return !state;

    case REGISTER_USER_SUCCESS:
      return false;

    default:
      return state;
  }
};

export default isRegistrationModalOpen;
