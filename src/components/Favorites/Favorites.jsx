import React from 'react';
import { Grid, Input, Icon, Segment } from 'semantic-ui-react';

import FavoritesRoutes from '../../components/FavoritesRoutes/FavoritesRoutes';

const Favorites = () => (
  <Grid centered padded>
    <Grid.Row>
      <Grid.Column largeScreen={10} mobile={16} widescreen={10}>
        <Segment stacked>
          <Grid container>
            <Grid.Row>
              <Grid.Column>
                <h1 className="font-style-oblique color-beige">
                  Favorites routes & bus stops
                </h1>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row textAlign="center">
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
              <FavoritesRoutes />
            </Grid.Row>
          </Grid>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Favorites;
