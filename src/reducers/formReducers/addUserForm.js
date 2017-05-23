import {
  TOGGLE_REGISTRATION_MODAL,
} from '../../actions/actions';

const addUserForm = (state, action) => {
  switch (action.type) {
    case TOGGLE_REGISTRATION_MODAL:
      return {
        ...state,
        values: {
          email: '',
          userName: '',
        },
        fields: {
          ...state.fields,
          email: undefined,
          userName: undefined,
        },
      };

    default:
      return state;
  }
};

export default addUserForm;
