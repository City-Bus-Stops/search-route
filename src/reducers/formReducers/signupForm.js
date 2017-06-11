import {
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
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

    case SIGN_UP_FAILURE: {
      const { response: { data } } = action.err;
      return {
        ...state,
        syncErrors: data,
      };
    }

    default:
      return state;
  }
};

export default signupForm;
