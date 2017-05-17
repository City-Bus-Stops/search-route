import React from 'react';
import PropTypes from 'prop-types';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';

import History from '../History/History';

const MapSidebar = ({ isSidebarOpen, toggleSideBar, findNearestButStops }) => (
  <Sidebar
    as={Menu}
    visible={isSidebarOpen}
    animation="slide along"
    className="font-size-15"
    vertical
  >
    <Menu.Item>
      <Menu.Header>
        Display
        <Icon
          name="close"
          link className="float-right"
          color="red"
          size="large"
          onClick={toggleSideBar}
        />
      </Menu.Header>
      <Menu.Menu>
        <Menu.Item link onClick={findNearestButStops}>
          Show nearest stops
        </Menu.Item>
        <Menu.Item>
          <History />
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

MapSidebar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  toggleSideBar: PropTypes.func.isRequired,
  findNearestButStops: PropTypes.func.isRequired,
};

export default MapSidebar;
