import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Grid, Segment, Header } from 'semantic-ui-react';

const Buses = ({ buses }) => (
  <Grid centered padded>
    <Grid.Row>
      <Grid.Column largeScreen={12} mobile={16} widescreen={12}>
        <Segment padded stacked>
          <Grid centered padded>
            <h1 className="font-style-oblique color-beige">
              Hrodna buses
            </h1>
            <Grid.Row columns={10}>
              {
                buses && buses.map(bus =>
                  <Link to={`/schedule/buses/${bus.id}`} key={bus.id}>
                    <Segment
                      circular
                      style={{ width: 100, height: 100 }}
                    >
                      <Header as="h2">
                        {bus.number}
                      </Header>
                    </Segment>
                  </Link>,
                )
              }
            </Grid.Row>
          </Grid>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

Buses.propTypes = {
  buses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Buses;
