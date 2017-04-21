import React from 'react';
import ReactDOM from 'react-dom';
import FoundedRoutes from './FoundedRoutes';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FoundedRoutes />, div);
});
