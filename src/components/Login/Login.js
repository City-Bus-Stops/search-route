import React from 'react';

const Login = () => (
  <div className="ui ten column ui raised very padded text container segment">
    <div className="five wide column">
      <h2 className="ui blue image header">
        <div className="content">
          Log-in to your account
        </div>
      </h2>
      <form className="ui large form">
        <div className="field">
          <div className="ui left icon input">
            <i className="user icon" />
            <input type="text" name="email" placeholder="E-mail address" />
          </div>
        </div>
        <div className="field">
          <div className="ui left icon input">
            <i className="lock icon" />
            <input type="password" name="password" placeholder="Password" />
          </div>
        </div>
        <div className="ui fluid large blue submit button">Login</div>
      </form>
      <div className="ui warning message">
        <h4 className="ui header">
          New to us? <a href="http://semantic-ui.com/examples/login.html#">Sign Up</a>
        </h4>
      </div>
    </div>
  </div>
);

export default Login;
