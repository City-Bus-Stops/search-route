import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Segment, Icon, Table, Header } from 'semantic-ui-react';
import { times } from 'lodash';

import { getScheduleMinutesFromHour } from '../../../utils';

const RouteBusStop = ({ data }) => (
  <Grid centered padded>
    <Grid.Row>
      <Grid.Column largeScreen={14} mobile={16} widescreen={14}>
        <Segment padded stacked>
          <Grid padded>
            <h1 className="font-style-oblique color-beige">
              <Icon name="bus" color="blue" size="large" />
              {
                data.route &&
                data.route.routeNumber &&
                <span>Bus schedule №{data.route.routeNumber} in Grodno</span>
              }
            </h1>
            <Grid.Row>
              <Header as="h2" color="grey">
                <Icon name="point" color="red" /> Bus stop: {data.busStopName}
              </Header>
            </Grid.Row>
            <Grid.Row>
              <Header as="h2" color="grey">
                <Icon name="road" color="grey" />
                {
                  data.route &&
                  data.route.busDirection
                }
              </Header>
            </Grid.Row>
            <Grid.Row>
              {
                data.route &&
                data.route.schedule &&
                <Table stackable celled color="blue" padded>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell />
                      {
                        times(24).map(time =>
                          <Table.HeaderCell key={time}>
                            {time}
                          </Table.HeaderCell>,
                        )
                      }
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>Working Day</Table.Cell>
                      {
                        times(24).map(time =>
                          <Table.Cell key={time}>
                            {getScheduleMinutesFromHour(data.route.schedule, time, false)}
                          </Table.Cell>,
                        )
                      }
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Day Off</Table.Cell>
                      {
                        times(24).map(time =>
                          <Table.Cell key={time}>
                            {getScheduleMinutesFromHour(data.route.schedule, time, true)}
                          </Table.Cell>,
                        )
                      }
                    </Table.Row>
                  </Table.Body>
                </Table>
              }
            </Grid.Row>
          </Grid>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

RouteBusStop.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default RouteBusStop;
