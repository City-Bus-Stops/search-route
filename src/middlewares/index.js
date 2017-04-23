import { isEmpty } from 'lodash';

import {
  FIND_USER_ADDRESS_SUCCESS,
  setFormField,
} from '../actions/actions';

const findUserAddressSuccess = store => next => (action) => {
  if (action.type === FIND_USER_ADDRESS_SUCCESS) {
    const { formName, field, address } = action;
    if (!isEmpty(formName) && !isEmpty(field)) {
      store.dispatch(setFormField(formName, field, address));
    }
  }
  next(action);
};

export default findUserAddressSuccess;
