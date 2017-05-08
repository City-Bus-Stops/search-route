import React from 'react';
import { Grid } from 'semantic-ui-react';

import FavoriteBusStop from '../FavoriteBusStop/FavoriteBusStop';

const FavoritesBusStops = () => (
  <Grid.Row stretched>
    <FavoriteBusStop />
    <FavoriteBusStop />
    <FavoriteBusStop />
    <FavoriteBusStop />
    <FavoriteBusStop />
    <FavoriteBusStop />
    <FavoriteBusStop />
  </Grid.Row>
);

export default FavoritesBusStops;
