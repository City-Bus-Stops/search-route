import React from 'react';
import { Grid, Card, Icon, Header, Accordion, List, Button } from 'semantic-ui-react';

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
          <Grid columns={2} padded stackable>
            <Grid.Column>
              <Header as="h4" >
                From
                <Header.Subheader>
                  Фолюш
                </Header.Subheader>
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Header as="h4" >
                To
                <Header.Subheader>
                  Советская
                </Header.Subheader>
              </Header>
            </Grid.Column>
          </Grid>
          <Accordion styled>
            <Accordion.Title>
              <Icon name="dropdown" />
              <b>Bus stops</b>
            </Accordion.Title>
            <Accordion.Content>
              <List divided relaxed>
                <List.Item>
                  <List.Icon name="map outline" size="large" verticalAlign="middle" link />
                  <List.Content>
                    <List.Header>Фолюш</List.Header>
                    <List.Description>2 minutes</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="map outline" size="large" verticalAlign="middle" link />
                  <List.Content>
                    <List.Header>Улица Лизы Чайкиной</List.Header>
                    <List.Description>4 min</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="map outline" size="large" verticalAlign="middle" link />
                  <List.Content>
                    <List.Header>Улица Декабристов</List.Header>
                    <List.Description>6 min</List.Description>
                  </List.Content>
                </List.Item>
              </List>
            </Accordion.Content>
          </Accordion>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button positive > Build route </Button>
      </Card.Content>
    </Card>
  </Grid.Column>
);

export default FavoriteRoute;
