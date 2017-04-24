import validate from 'validate.js';

export const validateSearchRouteForm = params => validate(params, {
  from: {
    presence: true,
    length: {
      minimum: 8,
      message: 'must be at least 8 characters',
    },
  },
  to: {
    presence: true,
    length: {
      minimum: 8,
      message: 'must be at least 8 characters',
    },
  },
});

export const validateLoginForm = params => validate(params, {
  email: {
    presence: true,
    email: true,
  },
  password: {
    presence: true,
    length: {
      minimum: 8,
      message: 'must be at least 8 characters',
    },
  },
});

export const validateSignUpForm = params => validate(params, {
  email: {
    presence: true,
    email: true,
  },
  password: {
    presence: true,
    length: {
      minimum: 8,
      message: 'must be at least 8 characters',
    },
  },
  confirmPassword: {
    presence: true,
    equality: 'password',
  },
});
