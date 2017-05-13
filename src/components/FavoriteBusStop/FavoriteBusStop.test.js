import React from 'react';
import ReactDOM from 'react-dom';
import FavoriteBusStop from './FavoriteBusStop';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <FavoriteBusStop
      busStop={{}}
      loadBusStopGeoData={() => {}}
      remove={() => {}}
    />, div);
});
