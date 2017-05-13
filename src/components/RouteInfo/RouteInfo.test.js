import React from 'react';
import ReactDOM from 'react-dom';
import RouteInfo from './RouteInfo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <RouteInfo
      routeInfo={{}}
      closeRouteInfo={() => {}}
    />, div);
});
