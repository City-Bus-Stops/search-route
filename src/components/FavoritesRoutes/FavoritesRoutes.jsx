import React from 'react';
import { Grid } from 'semantic-ui-react';

import FavoriteRoute from '../FavoriteRoute/FavoriteRoute';

const FavoritesRoutes = () => (
  <Grid columns={3} stackable>
    <Grid.Row>
      <Grid.Column>
        <h2 className="font-style-oblique color-beige">
          Routes
        </h2>
      </Grid.Column>
    </Grid.Row>
    <FavoriteRoute />
    <FavoriteRoute />
    <FavoriteRoute />
    <FavoriteRoute />
    <FavoriteRoute />
    <FavoriteRoute />
    <FavoriteRoute />
  </Grid>
);

export default FavoritesRoutes;
