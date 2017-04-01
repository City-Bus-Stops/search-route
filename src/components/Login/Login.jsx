import React from 'react';
import { Link } from 'react-router';

import InputField from '../InputField/InputField';

const Login = () => (
  <div id="login" className="ui middle aligned center aligned grid">
    <div className="five wide column">
      <h2 className="ui header">
        <div className="content">
          Log-in to your account
        </div>
      </h2>
      <form className="ui large form">
        <InputField
          dataTooltip="Your email or username"
          dataDelay="500"
          dataPosition="top left"
          type="password"
          placeholder="email or username"
          id="email"
          customContent={<i className="user link icon" />}
          customContentPosition="left"
        />
        <InputField
          dataTooltip="Password must have length greater than 8"
          dataDelay="500"
          dataPosition="top left"
          type="password"
          placeholder="password"
          id="password"
          customContent={<i className="lock icon" />}
          customContentPosition="left"
        />
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
