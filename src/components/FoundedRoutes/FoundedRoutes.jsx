import React from 'react';
import { PropTypes } from 'prop-types';
import { Grid } from 'semantic-ui-react';

import FoundedRoute from '../FoundedRoute/FoundedRoute';

const FoundedRoutes = ({ routes, getRouteInfo }) => (
  <div className="founded-routes">
    <Grid columns={4} stackable doubling>
      {
        routes && routes.map(route =>
          <FoundedRoute key={route.id} route={route} getRouteInfo={getRouteInfo} />,
        )
      }
    </Grid>
  </div>
);

FoundedRoutes.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  getRouteInfo: PropTypes.func.isRequired,
};

export default FoundedRoutes;
