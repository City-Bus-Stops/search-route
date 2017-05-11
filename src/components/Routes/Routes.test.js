import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Routes
      routes={[{
        id: 'testId',
        from: 'from',
        to: 'to',
        busNumber: '3',
        timeInTravel: '15',
      }]}
      getRouteInfo={() => {}}
      getRouteGeoData={() => {}}
    />, div);
});

