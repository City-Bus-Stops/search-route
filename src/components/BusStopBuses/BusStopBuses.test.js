import React from 'react';
import ReactDOM from 'react-dom';
import BusStopBuses from './BusStopBuses';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BusStopBuses
      getBusScheduleOnBusStop={() => {}}
    />, div);
});
