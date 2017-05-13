import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { Link } from 'react-router';

const NotFound = () => (
  <Grid textAlign="center" verticalAlign="middle" className="not-found" container>
    <Grid.Column>
      <Segment raised padded="very" piled basic>
        <div className="error-box">
          <h1 className="not-found-status">404</h1>
          <p className="not-found-text">Not Found</p>
          <Link to="/dashboard" className="color-danger">
            Get back to the Dashboard page
          </Link>
        </div>
      </Segment>
    </Grid.Column>
  </Grid>
);

export default NotFound;
