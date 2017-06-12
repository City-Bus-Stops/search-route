import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../../actions/actions';

const loginForm = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        values: {
          email: '',
          password: '',
        },
        fields: {
          ...state.fields,
          email: undefined,
          password: undefined,
        },
      };

    case LOGIN_FAILURE: {
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

export default loginForm;
