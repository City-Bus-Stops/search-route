import React, { PropTypes } from 'react';

import Menu from '../Menu/Menu';

const Root = props => (
  <div>
    <Menu />
    {props.children}
  </div>
);

Root.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
Root.defaultProps = {
  children: [],
};

export default Root;
