import React from 'react';
import PropTypes from 'prop-types';
import { Dimmer, Loader } from 'semantic-ui-react';

const Spinner = ({ isActive }) => (
  <Dimmer active={isActive} page blurring>
    <Loader size="big">Loading...</Loader>
  </Dimmer>
);

Spinner.propTypes = {
  isActive: PropTypes.bool,
};

Spinner.defaultProps = {
  isActive: false,
};

export default Spinner;
