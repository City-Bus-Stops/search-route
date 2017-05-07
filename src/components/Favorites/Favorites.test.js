import React from 'react';
import ReactDOM from 'react-dom';
import Favorites from './Favorites';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Favorites />, div);
});
