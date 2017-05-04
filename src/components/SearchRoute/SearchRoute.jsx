import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { Grid } from 'semantic-ui-react';

import SeachRouteForm from '../SearchRouteForm/SearchRouteForm';
import FoundedRouteInfo from '../RouteInfo/RouteInfo';
import Route from '../Route/Route';

import { validateSearchRouteForm } from '../../validation';

export const SEARCH_ROUTE = 'searchRoute';

const SearchRoute = ({ from, to, routes, errors, actions, routeInfo }) => (
  <div>
    <FoundedRouteInfo
      routeInfo={routeInfo}
      clearRouteInfo={() => actions.clearRouteInfo(SEARCH_ROUTE)}
    />
    <SeachRouteForm
      from={from}
      to={to}
      errors={errors}
      setFormField={(value, field) => actions.setFormField(SEARCH_ROUTE, field, value)}
      findUserAddress={field => actions.findUserAddress(SEARCH_ROUTE, field)}
      searchRoute={(params) => {
        const validateErrors = validateSearchRouteForm(params);
        if (isEmpty(validateErrors)) {
          actions.searchRoute(params);
        } else {
          actions.formSubmitFailed(SEARCH_ROUTE, validateErrors);
        }
      }}
    />
    <div className="founded-routes">
      <Grid columns={4} stackable doubling>
        {
          routes && routes.map(route =>
            <Route
              key={route.id}
              route={route}
              getRouteInfo={routeId => actions.getRouteInfo(routeId)}
              getRouteGeoData={routeId => actions.getRouteGeoData(routeId)}
            />,
          )
        }
      </Grid>
    </div>
  </div>
);

SearchRoute.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  errors: PropTypes.shape().isRequired,
  routeInfo: PropTypes.shape().isRequired,
  actions: PropTypes.shape({
    setFormField: PropTypes.func.isRequired,
    findUserAddress: PropTypes.func.isRequired,
    searchRoute: PropTypes.func.isRequired,
    formSubmitFailed: PropTypes.func.isRequired,
    getRouteInfo: PropTypes.func.isRequired,
    clearRouteInfo: PropTypes.func.isRequired,
    getRouteGeoData: PropTypes.func.isRequired,
  }).isRequired,
};

export default SearchRoute;
