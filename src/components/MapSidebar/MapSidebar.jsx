import React from 'react';
import { Sidebar, Menu } from 'semantic-ui-react';

const MapSidebar = () => (
  <Sidebar as={Menu} animation="overlay" visible vertical size="large">
    <Menu.Item>
      <Menu.Header>Display</Menu.Header>
      <Menu.Menu>
        <Menu.Item link >
          Show nearest stops
        </Menu.Item>
        <Menu.Item link >
          History
        </Menu.Item>
      </Menu.Menu>
    </Menu.Item>
    <Menu.Item>
      <Menu.Header>Support</Menu.Header>
      <Menu.Menu>
        <Menu.Item name="email" link>
          E-mail Support
        </Menu.Item>
        <Menu.Item name="faq" link href="http://leafletjs.com/">
          About <b>Leaflet</b>
        </Menu.Item>
      </Menu.Menu>
    </Menu.Item>
  </Sidebar>
);

export default MapSidebar;
