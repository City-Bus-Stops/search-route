import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Collapse from 'react-collapse';
import { Menu } from 'semantic-ui-react';

const MenuComponent = ({ pathname, userName }) => (
  <Collapse isOpened={!pathname.includes('map')}>
    <Menu size="huge" className="padded-menu" stackable>
      <Menu.Item>
        <Link to="/dashboard" className="menu-item" activeClassName="menu-item-active">
          <i className="home icon" />
          Home
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/search-route" className="menu-item" activeClassName="menu-item-active">
          <i className="search icon" />
          Search route
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/map" className="menu-item" activeClassName="menu-item-active">
          <i className="world icon" />
          Map
        </Link>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          {userName}
          <Link to="/logout">
            <i className="sign out icon link red" />
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
