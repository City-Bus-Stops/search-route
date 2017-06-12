import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Collapse from 'react-collapse';
import { Menu, Icon, Dropdown } from 'semantic-ui-react';

const MenuComponent = ({ pathname, username, onLogout, isUserRegistered, isAdmin }) => (
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
      {
        isUserRegistered &&
        <Menu.Item>
          <Link to="/favorites" className="menu-item" activeClassName="menu-item-active">
            <Icon name="favorite" />
            Favorites
          </Link>
        </Menu.Item>
      }
      {
        isUserRegistered &&
        isAdmin &&
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
      }
      {
        isUserRegistered ?
          <Menu.Menu position="right">
            <Dropdown
              item
              icon={<Icon name="user" color="blue" />}
              trigger={
                <span className="font-size-15">
                  {username}
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
          </Menu.Menu> :
          <Menu.Menu position="right">
            <Menu.Item>
              <Link to="/login" className="menu-item">
                <Icon name="sign in" color="red" />
                Log In
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/signup" className="menu-item">
                <Icon name="vcard outline" color="green" />
                Sign Up
              </Link>
            </Menu.Item>
          </Menu.Menu>
      }
    </Menu>
  </Collapse>
);

MenuComponent.propTypes = {
  pathname: PropTypes.string.isRequired,
  username: PropTypes.string,
  onLogout: PropTypes.func.isRequired,
  isUserRegistered: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool,
};

MenuComponent.defaultProps = {
  username: '',
};

export default MenuComponent;
