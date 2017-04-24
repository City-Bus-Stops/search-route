import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

import FoundedRoutes from '../FoundedRoutes/FoundedRoutes';
import SeachRouteForm from '../SearchRouteForm/SearchRouteForm';

import { validateSearchRouteForm } from '../../validation';

const SearchRoute = ({ from, to, routes, errors, actions }) => (
  <div>
    <SeachRouteForm
      from={from}
      to={to}
      errors={errors}
      setFormField={(value, field) => actions.setFormField('searchRoute', field, value)}
      findUserLocation={field => actions.findUserLocation('searchRoute', field)}
      searchRoutes={(params) => {
        const validateErorrs = validateSearchRouteForm(params);
        if (isEmpty(validateErorrs)) {
          actions.searchRoutes('searchRoute', params);
        } else {
          actions.formSubmitFailed('searchRoute', validateErorrs);
        }
      }}
    />
    <FoundedRoutes
      routes={routes}
    />
  </div>
);

SearchRoute.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  errors: PropTypes.shape().isRequired,
  actions: PropTypes.shape({
    setFormField: PropTypes.func.isRequired,
    findUserLocation: PropTypes.func.isRequired,
    searchRoutes: PropTypes.func.isRequired,
    formSubmitFailed: PropTypes.func.isRequired,
  }).isRequired,
};

export default SearchRoute;
