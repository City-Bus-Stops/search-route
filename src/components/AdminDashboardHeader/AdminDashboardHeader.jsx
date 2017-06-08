import React from 'react';
import { Grid, Card, Icon, Statistic } from 'semantic-ui-react';
import { TealText } from './AdminDashBoardStyledComponents';

const AdminDashboardHeader = () => (
  <Grid centered padded >
    <Grid.Row columns={4}>
      <Grid.Column mobile={16} tablet={8} computer={4} widescreen={4}>
        <Card fluid color="green">
          <Card.Content>
            <Card.Header>
              <Icon name="users" color="green" /> Total Users
            </Card.Header>
            <Card.Description>
              <Statistic color="green" value="2,204" />
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="triangle up" color="teal" />
            <TealText>4%</TealText> From last Week
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={4} widescreen={4}>
        <Card fluid color="yellow">
          <Card.Content>
            <Card.Header>
              <Icon name="dashboard" color="yellow" /> Total Connections
            </Card.Header>
            <Card.Description>
              <Statistic color="yellow" value="7,325" />
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="triangle up" color="teal" />
            <TealText>34%</TealText> From last Week
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={4} widescreen={4}>
        <Card fluid color="blue">
          <Card.Content>
            <Card.Header>
              <Icon name="bus" color="blue" /> Saved routes and bus stops
            </Card.Header>
            <Card.Description>
              <Statistic color="blue" value="515" />
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="triangle down" color="red" />
            <TealText>-5%</TealText> From last Week
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={4} widescreen={4}>
        <Card fluid color="red">
          <Card.Content>
            <Card.Header>
              <Icon name="signal" color="red" /> Requests per  day
            </Card.Header>
            <Card.Description>
              <Statistic color="red" value="1,105" />
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="triangle up" color="teal" />
            <TealText>12%</TealText> From last Week
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default AdminDashboardHeader;
