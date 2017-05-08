import {
  LOGIN_SUCCESS,
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

    default:
      return state;
  }
};

export default loginForm;
