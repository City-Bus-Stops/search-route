import React from 'react';
import ReactDOM from 'react-dom';
import FoundedRoute from './FoundedRoute';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FoundedRoute />, div);
});

