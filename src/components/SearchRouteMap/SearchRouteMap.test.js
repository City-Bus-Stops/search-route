import React from 'react';
import ReactDOM from 'react-dom';
import SearchRouteMap from './SearchRouteMap';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <SearchRouteMap
      routeId="routeId"
      route={[]}
      pointInfo={{}}
      isSidebarOpen={false}
      actions={{
        getMapPointInfo: () => {},
        toggleSideBar: () => {},
        loadRouteGeoData: () => {},
        clearRouteGeoData: () => {},
        clearMapPointInfo: () => {},
      }}
    />, div);
});
