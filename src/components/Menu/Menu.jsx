import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Collapse from 'react-collapse';

const Menu = ({ pathname }) => (
  <Collapse isOpened={!pathname.includes('map')}>
    <div className="ui vertical center aligned small padded segment">
      <div className="ui container">
        <div className="ui large secondary menu">
          <Link to="/dashboard" className="ui item" activeClassName="ui active item">
            <i className="home icon" />
            Home
          </Link>
          <Link to="/search-route" className="ui item" activeClassName="ui active item">
            <i className="search icon" />
            Search route
          </Link>
          <Link to="/map" className="ui item" activeClassName="ui active item">
            <i className="world icon" />
            Map
          </Link>
          <div className="right menu">
            <Link to="/login" className="ui item" activeClassName="ui active item">
              <i className="sign in icon red" />
              Log In
            </Link>
            <Link to="/signup" className="ui item" activeClassName="ui active item">
              <i className="user outline icon" />
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Collapse>
);

Menu.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Menu;
