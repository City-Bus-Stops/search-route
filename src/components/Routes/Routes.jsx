import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, Label, Icon } from 'semantic-ui-react';

const Route = ({ routes, getRouteInfo, getRouteGeoData }) => (
  <div className="founded-routes">
    <Grid columns={4} stackable doubling>
      {
        routes && routes.map(route =>
          <Grid.Column key={route.id}>
            <Card fluid color="blue">
              <Card.Content>
                <Card.Header>
                  <Card.Meta>
                    <Label ribbon color="blue" size="large">Bus number: {route.busNumber}</Label>
                    <p className="float-right">Time in travel: {route.timeInTravel} minutes</p>
                  </Card.Meta>
                </Card.Header>
                <Card.Description>
                  <p className="font-size-15"><strong>From: </strong>{route.from}</p>
                  <p className="font-size-15"><strong>To: </strong>{route.to}</p>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <span className="float-right" onClick={() => getRouteGeoData(route.id)}>
                  <Icon link name="map outline" color="red" />
                </span>
                <span className="cursor-pointer" onClick={() => getRouteInfo(route.id)}>
                  <Icon name="info circle" />
                    More info
                  </span>
              </Card.Content>
            </Card>
          </Grid.Column>,
          )
        }
    </Grid>
  </div>
);

Route.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    busNumber: PropTypes.string.isRequired,
    timeInTravel: PropTypes.string.isRequired,
  })).isRequired,
  getRouteInfo: PropTypes.func.isRequired,
  getRouteGeoData: PropTypes.func.isRequired,
};

export default Route;
