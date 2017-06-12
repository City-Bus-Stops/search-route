import React from 'react';
import ReactDOM from 'react-dom';
import MapSidebar from './MapSidebar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MapSidebar
      isSidebarOpen={false}
      toggleSideBar={() => {}}
      isUserRegistered={false}
    />, div);
});
