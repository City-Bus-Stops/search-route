import React from 'react';
import { Link } from 'react-router';

const NotFound = () => (
  <div className="ui middle aligned center aligned grid not-found">
    <div className="column">
      <div className="ui raised very padded text container piled segment">
        <div className="error-box">
          <h1 className="not-found-status">404</h1>
          <p className="not-found-text">Not Found</p>
          <Link to="/dashboard" className="color-danger">
            Get back to the Dashboard page
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default NotFound;
