import React from 'react';
import ReactDOM from 'react-dom';
import PointInfo from './PointInfo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PointInfo />, div);
});
