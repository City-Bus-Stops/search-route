import React from 'react';
import ReactDOM from 'react-dom';
import FavoritesRoutes from './FavoritesRoutes';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FavoritesRoutes />, div);
});
