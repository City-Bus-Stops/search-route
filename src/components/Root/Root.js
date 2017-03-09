import React, { PropTypes } from 'react';

import Menu from '../Menu';
import Footer from '../Footer';

const Root = props => (
  <div>
    <Menu />
    {props.children}
    <Footer />
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
