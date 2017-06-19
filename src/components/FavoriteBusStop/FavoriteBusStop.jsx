import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, Icon, Button } from 'semantic-ui-react';

const FavoriteBusStop = ({ busStop, loadBusStopGeoData, remove }) => (
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
          onClick={() => remove(busStop.id)}
        />
        <Card.Header className="font-size-15">
          <Icon link circular name="point" color="blue" />
          {busStop.name}
        </Card.Header>
      </Card.Content>
      <Card.Content extra className="padding-left-5 padding-right-5">
        <Grid columns={2} doubling container>
          <Grid.Row>
            <Grid.Column mobile={8} widescreen={8} computer={8} stretched>
              <Button
                className="point-info-button"
                color="green"
                basic
                icon
                onClick={() => loadBusStopGeoData(busStop.id)}
              >
                Watch on the map <Icon link name="map outline" color="green" />
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
    </Card>
  </Grid.Column>
);

FavoriteBusStop.propTypes = {
  busStop: PropTypes.shape().isRequired,
  loadBusStopGeoData: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default FavoriteBusStop;
