import React from 'react';
import { Grid, Card, Icon } from 'semantic-ui-react';

const FavoriteRoute = () => (
  <Grid.Column>
    <Card fluid>
      <Card.Content>
        <Icon className="float-right" name="remove" size="large" color="red" link />
        <Card.Header>
          <Icon name="bus" size="large" color="blue" link />
          23
        </Card.Header>
        <Card.Meta>Time in travel ~15 min</Card.Meta>
        <Card.Description>
          <p className="font-size-15"><strong>From: </strong>Фолюш</p>
          <p className="font-size-15"><strong>To: </strong>Советская</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <span className="float-right">
          <Icon link name="map outline" color="red" />
        </span>
        <span className="cursor-pointer">
          <Icon name="info circle" />
          More info
        </span>
      </Card.Content>
    </Card>
  </Grid.Column>
);

export default FavoriteRoute;
