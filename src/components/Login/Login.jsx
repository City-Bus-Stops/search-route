import React from 'react';
import { Link } from 'react-router';
import { Segment } from 'semantic-ui-react';

import InputField from '../InputField/InputField';

const Login = () => (
  <div id="login" className="ui middle aligned center aligned grid">
    <div className="five wide column">
      <Segment stacked>
        <h2 className="ui header">
          <div className="content">
            Log-in to your account
          </div>
        </h2>
        <form className="ui large form">
          <InputField
            type="text"
            id="email"
            customContent={<i className="user icon" />}
            customContentPosition="left"
            label={<p>Email <sup>*</sup></p>}
          />
          <InputField
            type="password"
            id="password"
            customContent={<i className="lock icon" />}
            customContentPosition="left"
            label={<p>Password <sup>*</sup></p>}
          />
          <div className="ui fluid large blue submit button">Login</div>
        </form>
        <div className="ui warning message">
          <h4 className="ui header">
            New to us?
            <Link to="/signup" className="ui item padding-left-5">
                Sign Up
            </Link>
          </h4>
        </div>
      </Segment>
    </div>
  </div>
);

export default Login;
