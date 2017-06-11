import validate from 'validate.js';

export const isHaveSpaces = field => /\s+/g.test(field);

export const userNamePattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

export const isValidUserName = userName => userNamePattern.test(userName);

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
  username: {
    presence: true,
    length: {
      minimum: 5,
      message: 'must be at least 5 characters',
    },
  },
});

export const valdateAddUserForm = params => validate(params, {
  email: {
    presence: true,
    email: true,
  },
  userName: {
    presence: true,
    length: {
      minimum: 6,
      maximum: 20,
    },
    format: {
      pattern: userNamePattern,
      flags: 'i',
      message: 'must have at least 6 characters and contain the following: uppercase letters, lowercase letters.',
    },
  },
});
