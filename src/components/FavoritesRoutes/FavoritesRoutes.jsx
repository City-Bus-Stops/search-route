import React from 'react';
import { Grid, Input, Icon } from 'semantic-ui-react';

import FavoriteRoute from '../FavoriteRoute/FavoriteRoute';

const FavoritesRoutes = () => (
  <div>
    <Grid centered>
      <Grid.Column width="5">
        <Input
          icon={<Icon name="search" color="blue" link circular />}
          size="large"
          placeholder="Search..."
          fluid
        />
      </Grid.Column>
    </Grid>
    <Grid columns={3} padded stackable relaxed>
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
