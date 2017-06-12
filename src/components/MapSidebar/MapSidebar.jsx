import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';

import History from '../History/History';

const MapSidebar = ({ isSidebarOpen, toggleSideBar, findNearestButStops, isUserRegistered }) => (
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
        <Link to="/dashboard" className="menu-item" activeClassName="menu-item-active">
          <Menu.Item>
            <Icon name="home" />
            Home
          </Menu.Item>
        </Link>
        {
          isUserRegistered &&
          <Link to="/favorites" className="menu-item" activeClassName="menu-item-active">
            <Menu.Item>
              <Icon name="star" />
              Favorites
            </Menu.Item>
          </Link>
        }
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
  isUserRegistered: PropTypes.bool.isRequired,
};

MapSidebar.defaultProps = {
  isUserRegistered: false,
};

export default MapSidebar;
