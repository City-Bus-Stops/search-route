import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Grid, Segment, Icon, List, Header } from 'semantic-ui-react';

const RouteSchedule = ({ data }) => (
  <Grid centered padded>
    <Grid.Row>
      <Grid.Column largeScreen={12} mobile={16} widescreen={12}>
        <Segment padded stacked>
          <Grid padded>
            <h1 className="font-style-oblique color-beige">
              <Icon name="point" color="red" size="large" />
              Bus schedule №{data.routeNumber} in Grodno
            </h1>
            <Grid.Row columns={2}>
              {
                data.directions && data.directions.map(direction =>
                  <Grid.Column
                    key={direction.directionId}
                    largeScreen={6}
                    mobile={16}
                    widescreen={6}
                  >
                    <Header as="h3" color="grey">
                      {direction.directionName}
                    </Header>
                    <List divided relaxed selection>
                      {
                        direction.busStops && direction.busStops.map(busStop =>
                          <List.Item key={busStop.id}>
                            <List.Icon name="bus" size="large" verticalAlign="middle" color="blue" />
                            <List.Content>
                              <Link to={`/schedule/buses/${data.routeId}/bus-stops/${busStop.id}`}>
                                <List.Header as="p">
                                  {busStop.name}
                                </List.Header>
                              </Link>
                            </List.Content>
                          </List.Item>,
                        )
                      }
                    </List>
                  </Grid.Column>,
                )
              }
            </Grid.Row>
          </Grid>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

RouteSchedule.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default RouteSchedule;
