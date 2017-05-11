import React from 'react';
import { Link } from 'react-router';

const StartPage = () => (
  <div className="masthead">
    <div className="ui vertical center aligned fluid segment">
      <h1 className="ui header">
        Find your favorite route
      </h1>
      <h2>Do whatever you want when you want to.</h2>
      <div className="ui huge primary link button">
        <Link to="/search-route" className="white-link">
          Start to search <i className="right arrow icon" />
        </Link>
      </div>
    </div>
  </div>
);

export default StartPage;
