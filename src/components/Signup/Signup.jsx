import React from 'react';
import { Link } from 'react-router';
import { Segment } from 'semantic-ui-react';

import InputField from '../InputField/InputField';

const Signup = () => (
  <div id="signup" className="ui middle aligned center aligned grid">
    <div className="five wide column">
      <Segment stacked>
        <h2 className="ui image header">
          <div className="content">
          Create account
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
          <InputField
            type="password"
            id="repeat-password"
            customContent={<i className="lock icon" />}
            customContentPosition="left"
            label={<p>Confirm Password <sup>*</sup></p>}
          />
          <div className="ui fluid large blue submit button">Sign Up</div>
        </form>
        <div className="ui warning message">
          <h4 className="ui header">
          Already have account?
          <Link to="/login" className="ui item padding-left-5">
            Log In
          </Link>
          </h4>
        </div>
      </Segment>
    </div>
  </div>
);

export default Signup;
