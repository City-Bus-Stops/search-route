import {
  FIND_USER_ADDRESS_SUCCESS,
} from '../../actions/actions';

const searchRouteForm = (state, action) => {
  switch (action.type) {
    case FIND_USER_ADDRESS_SUCCESS: {
      const { values } = state;
      const { address, field } = action;
      return {
        ...state,
        values: {
          ...values,
          [field]: address,
        },
      };
    }

    default:
      return state;
  }
};

export default searchRouteForm;
