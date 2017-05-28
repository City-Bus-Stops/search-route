  import React from 'react';
  import PropTypes from 'prop-types';
  import { Label, Grid, Icon, Table } from 'semantic-ui-react';

  import { getDateWithAddedMinutes } from '../../utils';

  const BusStopBuses = ({ buses, getBusScheduleOnBusStop }) => (
    <Grid.Row>
      <Grid.Column className="font-size-15">
        <Table basic="very" celled selectable sortable>
          <Table.Body>
            {
              buses &&
              buses.map(bus =>
                <Table.Row key={bus.id} onClick={() => getBusScheduleOnBusStop(bus.id)}>
                  <Table.Cell className="font-size-20 color-grey">
                    <Icon name="bus" link color="green" />
                    <strong>{bus.number}</strong>
                  </Table.Cell>
                  <Table.Cell>
                    {
                      bus.startPoint &&
                      bus.endPoint &&
                      <span>
                        {bus.startPoint} - {bus.endPoint}
                      </span>
                    }
                  </Table.Cell>
                  <Table.Cell>
                    <strong>{bus.time} min</strong>
                    <Label horizontal circular color="blue">
                      {getDateWithAddedMinutes(bus.time)}
                    </Label>
                  </Table.Cell>
                </Table.Row>,
            )}
          </Table.Body>
        </Table>
      </Grid.Column>
    </Grid.Row>
  );

  BusStopBuses.propTypes = {
    buses: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      startPoint: PropTypes.string.isRequired,
      endPoint: PropTypes.string.isRequired,
    })).isRequired,
    getBusScheduleOnBusStop: PropTypes.func.isRequired,
  };

  BusStopBuses.defaultProps = {
    buses: [],
  };

  export default BusStopBuses;
