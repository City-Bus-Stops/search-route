import Notifications from 'react-notification-system-redux';

export const SET_FORM_FIELD = 'SET_FORM_FIELD';
export const FIND_USER_LOCATION = 'FIND_USER_LOCATION';
export const FIND_USER_LOCATION_SUCCESS = 'FIND_USER_LOCATION_SUCCESS';
export const FIND_USER_ADDRESS_SUCCESS = 'FIND_USER_ADDRESS_SUCCESS';
export const SEARCH_ROUTES = 'SEARCH_ROUTES';
export const SEARCH_ROUTES_SUCCESS = 'SEARCH_ROUTES_SUCCESS';
export const FORM_SUBMIT_FAILED = 'FORM_SUBMIT_FAILED';

export const setFormField = (formName, field, value) => ({
  type: SET_FORM_FIELD,
  formName,
  field,
  value,
});

export const findUserLocation = (formName, field) => ({
  type: FIND_USER_LOCATION,
  formName,
  field,
});

export const searchRoutes = (routesType, params) => ({
  type: SEARCH_ROUTES,
  routesType,
  params,
});

export const formSubmitFailed = (formName, errors) => ({
  type: FORM_SUBMIT_FAILED,
  formName,
  errors,
});

export const showNotification = (type, title, message) =>
  Notifications[type]({
    title,
    message,
    position: 'tr',
    autoDismiss: 5,
    dismissible: true,
  });
