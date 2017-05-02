import React from 'react';
import ReactDOM from 'react-dom';
import MapComponent from './Map';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MapComponent
      routeId="routeId"
      route={[]}
      pointInfo={{}}
      isSidebarOpen={false}
      actions={{
        getMapPointInfo: () => {},
        toggleSideBar: () => {},
        closeMapPointInfo: () => {},
        findUserLocation: () => {},
      }}
    />, div);
});
