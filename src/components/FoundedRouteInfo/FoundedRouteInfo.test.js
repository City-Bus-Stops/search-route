import React from 'react';
import ReactDOM from 'react-dom';
import FoundedRouteInfo from './FoundedRouteInfo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <FoundedRouteInfo
      routeInfo={{}}
      clearRouteInfo={() => {}}
    />, div);
});
