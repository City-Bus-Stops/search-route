import React from 'react';
import { Grid, Card, Header } from 'semantic-ui-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const areaData = [
      { name: 'Jan 01', 'Registered users': 4000, 'Anonymous users': 2400 },
      { name: 'Jan 02', 'Registered users': 3000, 'Anonymous users': 1398 },
      { name: 'Jan 03', 'Registered users': 2000, 'Anonymous users': 9800 },
      { name: 'Jan 04', 'Registered users': 2780, 'Anonymous users': 3908 },
      { name: 'Jan 05', 'Registered users': 1890, 'Anonymous users': 4800 },
      { name: 'Jan 06', 'Registered users': 2390, 'Anonymous users': 3800 },
      { name: 'Jan 07', 'Registered users': 3490, 'Anonymous users': 4300 },
];

const UserActivity = () => (
  <Grid>
    <Grid.Row columns={2}>
      <Grid.Column largeScreen={12} mobile={16} widescreen={12}>
        <Card fluid color="green">
          <Card.Header>
            <Header as="h2" color="green" block>
              USER ACTIVITIES
            </Header>
          </Card.Header>
          <Card.Content>
            <ResponsiveContainer minHeight={400} height="30%" width="100%">
              <AreaChart
                data={areaData}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="Registered users" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="Anonymous users" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
              </AreaChart>
            </ResponsiveContainer>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default UserActivity;
