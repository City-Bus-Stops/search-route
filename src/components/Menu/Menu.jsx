import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Collapse from 'react-collapse';
import { Menu } from 'semantic-ui-react';

const MenuComponent = ({ pathname, isUserAuth, userCredentials }) => (
  <Collapse isOpened={!pathname.includes('map')}>
    <Menu size="huge" className="padded-menu">
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
      {
        isUserAuth ?
          <div className="right menu">
            <div className="menu-item">
              {`${userCredentials.firstName} ${userCredentials.lastName}`}
              <Menu.Item>
                <Link to="/logout">
                  <i className="sign out icon link red" />
                </Link>
              </Menu.Item>
            </div>
          </div> :
          <div className="right menu">
            <Menu.Item>
              <Link to="/login" className="menu-item" activeClassName="menu-item-active">
                <i className="sign in icon red" />
                Log In
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/signup" className="menu-item" activeClassName="menu-item-active">
                <i className="user outline icon" />
                Sign Up
              </Link>
            </Menu.Item>
          </div>
      }
    </Menu>
  </Collapse>
);

MenuComponent.propTypes = {
  pathname: PropTypes.string.isRequired,
  isUserAuth: PropTypes.bool,
  userCredentials: PropTypes.shape(),
};

MenuComponent.defaultProps = {
  isUserAuth: false,
  userCredentials: {
    firstName: '',
    lastName: '',
  },
};

export default MenuComponent;
