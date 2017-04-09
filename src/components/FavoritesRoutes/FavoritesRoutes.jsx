import React from 'react';
import { Grid } from 'semantic-ui-react';

import FavoriteRoute from '../FavoriteRoute/FavoriteRoute';

const FavoritesRoutes = () => (
  <div>
    <Grid columns={3} padded stackable>
      <FavoriteRoute />
      <FavoriteRoute />
      <FavoriteRoute />
      <FavoriteRoute />
      <FavoriteRoute />
      <FavoriteRoute />
      <FavoriteRoute />
    </Grid>
  </div>
);

export default FavoritesRoutes;
