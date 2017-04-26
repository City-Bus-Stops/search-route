import React from 'react';
import PropTypes from 'prop-types';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';

const MapSidebar = ({ isSidebarOpen, toggleSideBar }) => (
  <Sidebar as={Menu} visible={isSidebarOpen} animation="slide along" vertical>
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

MapSidebar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  toggleSideBar: PropTypes.func.isRequired,
};

export default MapSidebar;
