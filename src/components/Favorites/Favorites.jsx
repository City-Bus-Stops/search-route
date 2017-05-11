import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Input, Icon, Segment } from 'semantic-ui-react';
import { isEmpty } from 'lodash';
import { Link } from 'react-router';

import FavoriteRoute from '../FavoriteRoute/FavoriteRoute';
import FavoriteBusStop from '../FavoriteBusStop/FavoriteBusStop';

const Favorites = ({
  routes, busStops, getRouteGeoData, getRouteInfo, loadBusStopGeoData, removeFromFavorites,
}) => (
  <Grid centered padded>
    <Grid.Row>
      <Grid.Column largeScreen={10} mobile={16} widescreen={10} className="no-left-right-padding">
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
              <Grid.Column
                largeScreen={10}
                mobile={16}
                widescreen={10}
                className="no-left-right-padding"
              >
                <Input
                  icon={<Icon name="search" color="blue" />}
                  size="large"
                  placeholder="Search..."
                  fluid
                />
              </Grid.Column>
            </Grid.Row>
            {
              !isEmpty(routes) &&
              <Grid.Row>
                <Grid.Column>
                  <h2 className="font-style-oblique color-beige">
                    Routes
                  </h2>
                </Grid.Column>
              </Grid.Row>
            }
            <Grid.Row stretched>
              {
                !isEmpty(routes) &&
                routes.map(route =>
                  <FavoriteRoute
                    key={route.id}
                    route={route}
                    getRouteGeoData={getRouteGeoData}
                    getRouteInfo={getRouteInfo}
                    remove={removeFromFavorites}
                  />,
                )
              }
            </Grid.Row>
            {
              !isEmpty(busStops) &&
              <Grid.Row>
                <Grid.Column>
                  <h2 className="font-style-oblique color-beige">
                    Bus Stops
                  </h2>
                </Grid.Column>
              </Grid.Row>
            }
            <Grid.Row stretched>
              {
                !isEmpty(busStops) &&
                busStops.map(busStop =>
                  <FavoriteBusStop
                    key={busStop.id}
                    busStop={busStop}
                    loadBusStopGeoData={loadBusStopGeoData}
                    remove={removeFromFavorites}
                  />,
                )
              }
            </Grid.Row>
            {
              isEmpty(busStops) &&
              isEmpty(routes) &&
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <h3 className="font-style-oblique color-beige">
                    Your favorites are empty.
                    Try to search
                    <Link
                      to="/search-route"
                      className="padding-left-5"
                    >
                      <Icon name="reply" color="blue" link circular />
                    </Link>
                  </h3>
                </Grid.Column>
              </Grid.Row>
            }
          </Grid>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

Favorites.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  busStops: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  getRouteGeoData: PropTypes.func.isRequired,
  getRouteInfo: PropTypes.func.isRequired,
  loadBusStopGeoData: PropTypes.func.isRequired,
  removeFromFavorites: PropTypes.func.isRequired,
};

export default Favorites;
