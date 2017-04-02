import React from 'react';
import ReactDOM from 'react-dom';
import FavoritesRoutesTable from './FavoritesRoutesTable';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FavoritesRoutesTable />, div);
});
