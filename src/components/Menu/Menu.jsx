import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Collapse from 'react-collapse';
import { Menu, Icon, Dropdown } from 'semantic-ui-react';

const MenuComponent = ({ pathname, userName, onLogout }) => (
  <Collapse isOpened={!pathname.includes('map')}>
    <Menu className="padded-menu" stackable>
      <Menu.Item>
        <Link to="/dashboard" className="menu-item" activeClassName="menu-item-active">
          <Icon name="home" />
          Home
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/map" className="menu-item" activeClassName="menu-item-active">
          <Icon name="globe" />
          Map
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/search-route" className="menu-item" activeClassName="menu-item-active">
          <Icon name="search" />
          Search route
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/favorites" className="menu-item" activeClassName="menu-item-active">
          <Icon name="favorite" />
          Favorites
        </Link>
      </Menu.Item>
      <Dropdown item text="Administration">
        <Dropdown.Menu>
          <Link to="/administration/dashboard" className="menu-item" activeClassName="menu-item-active">
            <Dropdown.Item>
              <Icon name="dashboard" />
              Dashboard
            </Dropdown.Item>
          </Link>
          <Link to="/administration/users" className="menu-item" activeClassName="menu-item-active">
            <Dropdown.Item>
              <Icon name="users" />
              Users
            </Dropdown.Item>
          </Link>
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Menu position="right">
        <Dropdown
          item
          icon={<Icon name="user" color="blue" />}
          trigger={
            <span className="font-size-15">
              {userName}
            </span>
          }
        >
          <Dropdown.Menu>
            <Dropdown.Item>
              <Icon name="settings" />
              Settings
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={onLogout} className="menu-item">
              <Icon name="sign out" color="red" />
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  </Collapse>
);

MenuComponent.propTypes = {
  pathname: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default MenuComponent;
