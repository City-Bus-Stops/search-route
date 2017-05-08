import React from 'react';
import { Grid } from 'semantic-ui-react';

import FavoriteRoute from '../FavoriteRoute/FavoriteRoute';

const FavoritesRoutes = () => (
  <Grid.Row stretched>
    <FavoriteRoute />
    <FavoriteRoute />
    <FavoriteRoute />
    <FavoriteRoute />
    <FavoriteRoute />
    <FavoriteRoute />
    <FavoriteRoute />
  </Grid.Row>
);

export default FavoritesRoutes;
