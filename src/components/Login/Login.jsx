import React from 'react';
import { Link } from 'react-router';

const Login = () => (
  <div className="ui raised very padded text container segment">
    <div className="five wide column">
      <h2 className="ui blue header">
        <div className="content">
          Log-in to your account
        </div>
      </h2>
      <form className="ui large form">
        <div className="field">
          <div
            className="ui left icon input"
            data-tooltip="Your email or username"
            data-delay="500"
            data-position="top left"
          >
            <i className="user link icon" />
            <input type="text" name="email" placeholder="email or username" />
          </div>
        </div>
        <div className="field">
          <div
            className="ui left icon input"
            data-tooltip="Password must have length greater than 8"
            data-delay="500"
            data-position="top left"
          >
            <i className="lock link icon" />
            <input type="password" name="password" placeholder="password" />
          </div>
        </div>
        <div className="ui fluid large blue submit button">Login</div>
      </form>
      <div className="ui warning message">
        <h4 className="ui header">
          New to us?
          <Link to="/signup" className="ui item">
            Sign Up
          </Link>
        </h4>
      </div>
    </div>
  </div>
);

export default Login;
