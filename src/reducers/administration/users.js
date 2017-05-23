import {
  RECEIVE_USERS,
  DELETE_USER_SUCCESS,
  CHANGE_USER_STATUS_SUCCESS,
  REGISTER_USER_SUCCESS,
} from '../../actions/actions';

const users = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_USERS: {
      const { users } = action;
      return users;
    }

    case DELETE_USER_SUCCESS: {
      const { id } = action;

      return state.filter(user => user.id !== id);
    }

    case CHANGE_USER_STATUS_SUCCESS: {
      const { id, isActive } = action;
      return state.map(
        user => user.id === id ?
          { ...user, isActive }
          : user,
        );
    }

    case REGISTER_USER_SUCCESS: {
      const { user } = action;
      return [user, ...state];
    }

    default:
      return state;
  }
};

export default users;
