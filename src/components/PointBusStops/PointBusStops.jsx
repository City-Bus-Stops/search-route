import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Card, Grid, Button } from 'semantic-ui-react';
import { isEmpty } from 'lodash';
import { Text, StrongText } from './pointBusStopsComponents';

const PointBusStops = ({ busStops, loadBusStopGeoData }) => (
  <Grid columns={2} stackable doubling>
    {
      !isEmpty(busStops) &&
      <Grid.Row columns={1}>
        <Grid.Column>
          <StrongText>
            <Icon name="bus" color="blue" circular />
            Nearest bus stops:
          </StrongText>
        </Grid.Column>
      </Grid.Row>
    }
    {
      busStops.map(busStop =>
        <Grid.Column key={busStop.id} stretched>
          <Card fluid>
            <Card.Content>
              <Icon link circular name="bus" color="blue" size="big" />
              <Card.Header>
                <Text>
                  {busStop.name}
                </Text>
              </Card.Header>
              <Card.Meta>
                <Text>
                  {busStop.distance} meters from you
                </Text>
              </Card.Meta>
              <Card.Description>
                <Text>You can reach the bus stop in</Text>
                <StrongText> {busStop.timeToReach} minutes</StrongText>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Grid columns={2} doubling container>
                <Grid.Row>
                  <Grid.Column mobile={16} widescreen={8} computer={8} stretched>
                    <Button
                      color="green"
                      onClick={() => loadBusStopGeoData(busStop.id)}
                    >
                      <Text>
                        Watch on the map
                      </Text>
                    </Button>
                  </Grid.Column>
                  <Grid.Column mobile={16} widescreen={8} computer={8} stretched>
                    <Button color="yellow">
                      <Text>
                        Watch schedule
                      </Text>
                    </Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Card.Content>
          </Card>
        </Grid.Column>,
    )
  }
  </Grid>
);

PointBusStops.propTypes = {
  busStops: PropTypes.arrayOf(PropTypes.shape({})),
  loadBusStopGeoData: PropTypes.func.isRequired,
};

PointBusStops.defaultProps = {
  busStops: [],
};

export default PointBusStops;
