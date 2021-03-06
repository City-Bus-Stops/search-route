import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Collapse from 'react-collapse';
import { Menu, Icon } from 'semantic-ui-react';

const MenuComponent = ({ pathname, userName }) => (
  <Collapse isOpened={!pathname.includes('map')}>
    <Menu className="padded-menu" stackable>
      <Menu.Item>
        <Link to="/dashboard" className="menu-item" activeClassName="menu-item-active">
          <Icon name="home" />
          Home
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
      <Menu.Menu position="right">
        <Menu.Item>
          {userName}
          <Link to="/logout">
            <i className="sign out icon link red padding-left-5" />
          </Link>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  </Collapse>
);

MenuComponent.propTypes = {
  pathname: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};

export default MenuComponent;
