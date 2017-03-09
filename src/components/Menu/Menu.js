import React from 'react';
import { Link } from 'react-router';

const Menu = () => (
  <div className="ui inverted vertical center aligned segment">
    <div className="ui container">
      <div className="ui large secondary inverted pointing menu">
        <a className="ui active item"><i className="home icon" /> Home</a>
        <a className="ui item">Work</a>
        <a className="ui item">Company</a>
        <a className="ui item">Careers</a>
        <div className="right menu">
          <Link to="/login" className="ui item" activeClassName="ui active item">
            <i className="user outline icon" />
            Log In
          </Link>
          <a className="ui item">Sign Up</a>
        </div>
      </div>
    </div>
  </div>
);

export default Menu;
