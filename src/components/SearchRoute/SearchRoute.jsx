import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';

import SeachRouteForm from '../SearchRouteForm/SearchRouteForm';
import FoundedRouteInfo from '../RouteInfo/RouteInfo';
import Route from '../Route/Route';

const SearchRoute = ({
  from,
  to,
  routes,
  errors,
  actions,
  routeInfo,
  findUserAddress,
  searchRoute,
  setFormField,
}) => (
  <div>
    <FoundedRouteInfo
      routeInfo={routeInfo}
      clearRouteInfo={actions.clearRouteInfo}
    />
    <SeachRouteForm
      from={from}
      to={to}
      errors={errors}
      setFormField={setFormField}
      findUserAddress={findUserAddress}
      searchRoute={searchRoute}
    />
    <div className="founded-routes">
      <Grid columns={4} stackable doubling>
        {
          routes && routes.map(route =>
            <Route
              key={route.id}
              route={route}
              getRouteInfo={actions.getRouteInfo}
              getRouteGeoData={actions.getRouteGeoData}
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
  findUserAddress: PropTypes.func.isRequired,
  searchRoute: PropTypes.func.isRequired,
  setFormField: PropTypes.func.isRequired,
  actions: PropTypes.shape({
    formSubmitFailed: PropTypes.func.isRequired,
    getRouteInfo: PropTypes.func.isRequired,
    clearRouteInfo: PropTypes.func.isRequired,
    getRouteGeoData: PropTypes.func.isRequired,
  }).isRequired,
};

export default SearchRoute;
