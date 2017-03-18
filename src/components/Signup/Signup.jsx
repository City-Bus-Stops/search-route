import React from 'react';
import { Link } from 'react-router';

const Signup = () => (
  <div className="ui raised very padded text container segment">
    <div className="five wide column">
      <h2 className="ui blue image header">
        <div className="content">
          Create your account
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
            <i className="lock icon" />
            <input type="password" name="password" placeholder="password" />
          </div>
        </div>
        <div className="field">
          <div className="ui left icon input">
            <i className="lock icon" />
            <input type="password" name="repassword" placeholder="repeat password" />
          </div>
        </div>
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
