import React from 'react';
import ReactDOM from 'react-dom';
import FavoritesBusStops from './FavoritesBusStops';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FavoritesBusStops />, div);
});
