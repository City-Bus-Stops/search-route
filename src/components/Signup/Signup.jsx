import React from 'react';
import { Link } from 'react-router';

import InputField from '../InputField/InputField';

const Signup = () => (
  <div className="ui raised very padded text container segment">
    <div className="five wide column">
      <h2 className="ui blue image header">
        <div className="content">
          Create your account
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
        <InputField
          dataTooltip="Please, repeat password"
          dataDelay="500"
          dataPosition="top left"
          type="password"
          placeholder="repeat password"
          id="repeat-password"
          customContent={<i className="lock icon" />}
          customContentPosition="left"
        />
        <div className="ui fluid large blue submit button">Login</div>
      </form>
      <div className="ui warning message">
        <h4 className="ui header">
          Already have account?
          <Link to="/login" className="ui item">
            Log In
          </Link>
        </h4>
      </div>
    </div>
  </div>
);

export default Signup;
