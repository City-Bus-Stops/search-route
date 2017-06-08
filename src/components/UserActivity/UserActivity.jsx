import React from 'react';
import { Grid, Card, Header } from 'semantic-ui-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  BarChart, Bar } from 'recharts';

const areaData = [
      { name: 'Jan 01', 'Registered users': 4000, 'Anonymous users': 2400 },
      { name: 'Jan 02', 'Registered users': 3000, 'Anonymous users': 1398 },
      { name: 'Jan 03', 'Registered users': 2000, 'Anonymous users': 9800 },
      { name: 'Jan 04', 'Registered users': 2780, 'Anonymous users': 3908 },
      { name: 'Jan 05', 'Registered users': 1890, 'Anonymous users': 4800 },
      { name: 'Jan 06', 'Registered users': 2390, 'Anonymous users': 3800 },
      { name: 'Jan 07', 'Registered users': 3490, 'Anonymous users': 4300 },
];

const barChartData = [
      { name: 'Jan 01', Chrome: 4000, Firefox: 2400, Opera: 2400, other: 100 },
      { name: 'Jan 02', Chrome: 3000, Firefox: 1398, Opera: 2210, other: 200 },
      { name: 'Jan 03', Chrome: 2000, Firefox: 9800, Opera: 2290, other: 300 },
      { name: 'Jan 04', Chrome: 2780, Firefox: 3908, Opera: 2000, other: 400 },
      { name: 'Jan 05', Chrome: 1890, Firefox: 4800, Opera: 2181, other: 500 },
      { name: 'Jan 06', Chrome: 2390, Firefox: 3800, Opera: 2500, other: 600 },
      { name: 'Jan 07', Chrome: 3490, Firefox: 4300, Opera: 2100, other: 700 },
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
      <Grid.Column largeScreen={4} mobile={16} widescreen={4}>
        <Card fluid color="yellow">
          <Card.Header>
            <Header as="h2" color="yellow" block>
              MOST BROWSER USED
            </Header>
          </Card.Header>
          <Card.Content>
            <ResponsiveContainer minHeight={400} height="30%" width="100%">
              <BarChart
                data={barChartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Bar dataKey="Firefox" stackId="bar" fill="#ffc658" />
                <Bar dataKey="Chrome" stackId="bar" fill="#82ca9d" />
                <Bar dataKey="Opera" stackId="bar" fill="#DB2828" />
                <Bar dataKey="other" stackId="bar" fill="#5f5757" />
              </BarChart>
            </ResponsiveContainer>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default UserActivity;
