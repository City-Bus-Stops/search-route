import React from 'react';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const AdminDashboard = ({ children }) => (
  <Grid centered padded>
    <Grid.Row>
      <Grid.Column>
        {children}
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

AdminDashboard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

AdminDashboard.defaultProps = {
  children: null,
};

export default AdminDashboard;
