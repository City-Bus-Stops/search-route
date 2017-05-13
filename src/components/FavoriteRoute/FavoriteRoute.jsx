import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, Icon } from 'semantic-ui-react';

const FavoriteRoute = ({ route, showOnTheMap, getRouteInfo, remove }) => (
  <Grid.Column
    className="font-size-15 padding-top-10 no-left-right-padding"
    mobile={16} widescreen={4} computer={4} tablet={8}
  >
    <Card fluid>
      <Card.Content>
        <Icon
          className="float-right"
          name="remove"
          size="large"
          color="red"
          link
          onClick={() => remove(route.id)}
        />
        <Card.Header>
          <Icon name="bus" size="large" color="blue" link />
          {route.busNumber}
        </Card.Header>
        <Card.Meta>Time in travel ~{route.timeInTravel} min</Card.Meta>
        <Card.Description>
          <p className="font-size-15"><strong>From: </strong>{route.from}</p>
          <p className="font-size-15"><strong>To: </strong>{route.to}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <span className="float-right" onClick={() => showOnTheMap(route.id)}>
          <Icon link name="map outline" color="green" />
        </span>
        <span className="cursor-pointer" onClick={() => getRouteInfo(route.id)}>
          <Icon name="info circle" />
          More info
        </span>
      </Card.Content>
    </Card>
  </Grid.Column>
);

FavoriteRoute.propTypes = {
  route: PropTypes.shape().isRequired,
  showOnTheMap: PropTypes.func.isRequired,
  getRouteInfo: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default FavoriteRoute;
