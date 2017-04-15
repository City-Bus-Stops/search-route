import React, { PropTypes } from 'react';

import Menu from '../Menu/Menu';

const Root = ({ children, location }) => (
  <div>
    <Menu pathname={location.pathname} />
    {children}
  </div>
);

Root.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  location: PropTypes.shape().isRequired,
};
Root.defaultProps = {
  children: [],
};

export default Root;
