import React from 'react';
import PropTypes from 'prop-types';
import { Dimmer, Loader } from 'semantic-ui-react';

const Spinner = ({ IsSpinnerActive }) => (
  <Dimmer active={IsSpinnerActive} page>
    <Loader size="big">Loading...</Loader>
  </Dimmer>
);

Spinner.propTypes = {
  IsSpinnerActive: PropTypes.bool.isRequired,
};

export default Spinner;
