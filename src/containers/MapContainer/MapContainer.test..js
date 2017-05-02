import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import SearchRouteMapContainer from './MapContainer';
import configureStore from '../../configureStore';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={configureStore()}>
      <SearchRouteMapContainer />
    </Provider>, div);
});
