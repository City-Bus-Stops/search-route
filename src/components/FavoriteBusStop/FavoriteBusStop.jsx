import React from 'react';
import { Grid, Card, Icon, Button } from 'semantic-ui-react';

const FavoriteBusStop = () => (
  <Grid.Column
    className="font-size-15 padding-top-10"
    mobile={16} widescreen={4} computer={4} tablet={8}
  >
    <Card fluid>
      <Card.Content>
        <Icon className="float-right" name="remove" size="large" color="red" link />
        <Card.Header>
          <Icon link circular name="point" color="blue" />
          Площадь Декабристов
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
                // onClick={() => loadRouteToBusStop(busStop)}
              >
                Watch on the map <Icon link name="map outline" color="green" />
              </Button>
            </Grid.Column>
            <Grid.Column mobile={8} widescreen={8} computer={8} stretched>
              <Button
                color="yellow"
                floated="right"
                basic
                icon
              >
                Watch schedule <Icon link name="calendar outline" color="yellow" />
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
    </Card>
  </Grid.Column>
);

export default FavoriteBusStop;
