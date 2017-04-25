import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Grid, Card, Label, Popup, Icon } from 'semantic-ui-react';

const FoundedRoute = ({ route, getRouteInfo }) => (
  <Grid.Column>
    <Card fluid color="blue">
      <Card.Content>
        <Card.Header>
          <Card.Meta>
            <Label ribbon color="blue" size="large">Bus number: {route.busNumber}</Label>
            <p className="float-right">Time in travel: {route.timeInTravel} minutes</p>
          </Card.Meta>
        </Card.Header>
        <Card.Description>
          <p className="font-size-18"><strong>From: </strong>{route.from}</p>
          <p className="font-size-18"><strong>To: </strong>{route.to}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Popup
          hideOnScroll
          on="hover"
          trigger={
            <Link to="/map" className="float-right">
              <i className="link map outline red icon" />
            </Link>
          }
          content="Watch on the map"
          position="bottom right"
        />
        <span className="cursor-pointer" onClick={() => getRouteInfo(route.id)}>
          <Icon name="info circle" />
          More info
        </span>
      </Card.Content>
    </Card>
  </Grid.Column>
);

FoundedRoute.propTypes = {
  route: PropTypes.shape({
    id: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    busNumber: PropTypes.string.isRequired,
    timeInTravel: PropTypes.string.isRequired,
  }).isRequired,
  getRouteInfo: PropTypes.func.isRequired,
};

export default FoundedRoute;
