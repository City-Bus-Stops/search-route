import React from 'react';
import ReactDOM from 'react-dom';
import FavoriteRoute from './FavoriteRoute';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FavoriteRoute />, div);
});
