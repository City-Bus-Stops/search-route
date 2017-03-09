import React, { PropTypes } from 'react';

import Menu from '../Menu';
import InfoPanel from '../InfoPanel';
import TechnologiesPanel from '../TechnologiesPanel';
import Footer from '../Footer';

const Root = props => (
  <div>
    <Menu />
    {props.children}
    <InfoPanel />
    <TechnologiesPanel />
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
