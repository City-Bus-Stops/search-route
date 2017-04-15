import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Collapse from 'react-collapse';

const Menu = ({ pathname, isUserAuth, userCredentials }) => (
  <Collapse isOpened={!pathname.includes('map')}>
    <div className="ui vertical center aligned small padded segment">
      <div className="ui container">
        <div className="ui huge secondary menu">
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
            {
              isUserAuth ?
                <div className="right menu">
                  <div className="ui item">
                    {`${userCredentials.firstName} ${userCredentials.lastName}`}
                    <Link to="/logout">
                      <i className="sign out icon link red" />
                    </Link>
                  </div>
                </div> :
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
            }
        </div>
      </div>
    </div>
  </Collapse>
);

Menu.propTypes = {
  pathname: PropTypes.string.isRequired,
  isUserAuth: PropTypes.bool,
  userCredentials: PropTypes.shape(),
};

Menu.defaultProps = {
  isUserAuth: false,
  userCredentials: {
    firstName: '',
    lastName: '',
  },
}

export default Menu;
