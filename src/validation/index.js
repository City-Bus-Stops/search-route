import validate from 'validate.js';

const validateSearchRouteForm = params => validate(params, {
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

export default validateSearchRouteForm;
