  import React from 'react';
  import PropTypes from 'prop-types';
  import { Card, Label, Grid, Icon, Table, Header } from 'semantic-ui-react';

  const BusStopBuses = ({ buses }) => (
    <Grid.Row>
      <Grid.Column className="font-size-15">
        <Table basic="very" celled collapsing>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Employee</Table.HeaderCell>
              <Table.HeaderCell>Correct Guesses</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Header as="h4" image>
                  <Header.Content>
                Lena
                <Header.Subheader>Human Resources</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>
            22
          </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as="h4" image>
                  <Header.Content>
                Matthew
                <Header.Subheader>Fabric Design</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>
            15
          </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as="h4" image>
                  <Header.Content>
                Lindsay
                <Header.Subheader>Entertainment</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>
            12
          </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as="h4" image>
                  <Header.Content>
                Mark
                <Header.Subheader>Executive</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>
            11
          </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Card.Group stackable itemsPerRow={3}>
          {
            buses &&
            buses.map(bus =>
              <Card key={bus.id}>
                <Card.Content>
                  <Card.Description className="font-size-20">
                    <Icon name="bus" color="green" link />
                    {bus.number}
                    <Label
                      horizontal
                      color="red"
                      size="large"
                      className="float-right"
                    >
                      {bus.time} min
                    </Label>
                  </Card.Description>
                </Card.Content>
              </Card>,
            )}
        </Card.Group>
      </Grid.Column>
    </Grid.Row>
  );

  BusStopBuses.propTypes = {
    buses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  };

  BusStopBuses.defaultProps = {
    buses: [],
  };

  export default BusStopBuses;
