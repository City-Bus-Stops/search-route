import React from 'react';
import { PropTypes } from 'prop-types';
import { Grid } from 'semantic-ui-react';

import FoundedRoute from '../FoundedRoute/FoundedRoute';

const FoundedRoutes = ({ routes }) => (
  <div className="founded-routes">
    <Grid columns={4} padded stackable doubling>
      {
        routes && routes.map(route =>
          <FoundedRoute key={route.id} route={route} />,
        )
      }
    </Grid>
  </div>
);

FoundedRoutes.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default FoundedRoutes;
