import React from 'react';
import { Grid, Input, Icon, Segment } from 'semantic-ui-react';

import FavoritesRoutes from '../../components/FavoritesRoutes/FavoritesRoutes';
import FavoritesBusStops from '../../components/FavoritesBusStops/FavoritesBusStops';

const Favorites = () => (
  <Grid centered padded>
    <Grid.Row>
      <Grid.Column largeScreen={10} mobile={16} widescreen={10}>
        <Segment stacked>
          <Grid container>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <h1 className="font-style-oblique color-beige">
                  Favorites routes & bus stops
                </h1>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
              <Grid.Column largeScreen={10} mobile={16} widescreen={10}>
                <Input
                  icon={<Icon name="search" color="blue" circular />}
                  size="large"
                  placeholder="Search..."
                  fluid
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <h2 className="font-style-oblique color-beige">
                  Routes
                </h2>
              </Grid.Column>
            </Grid.Row>
            <FavoritesRoutes />
            <Grid.Row>
              <Grid.Column>
                <h2 className="font-style-oblique color-beige">
                  Bus Stops
                </h2>
              </Grid.Column>
            </Grid.Row>
            <FavoritesBusStops />
          </Grid>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Favorites;
