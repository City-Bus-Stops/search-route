import {
  SIGN_UP_SUCCESS,
} from '../../actions/actions';

const signupForm = (state, action) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        values: {
          email: '',
          password: '',
          confirmPassword: '',
        },
        fields: {
          ...state.fields,
          email: undefined,
          password: undefined,
          confirmPassword: undefined,
        },
      };

    default:
      return state;
  }
};

export default signupForm;
