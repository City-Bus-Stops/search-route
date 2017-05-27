import React from 'react';
import { Link } from 'react-router';
import { Button, Icon } from 'semantic-ui-react';

const StartPage = () => (
  <div className="masthead">
    <div className="ui vertical center aligned fluid segment">
      <h1 className="ui header">
        Find your favorite route
      </h1>
      <h2>Do whatever you want when you want to.</h2>
      <Link to="/search-route" className="white-link">
        <Button
          size="huge"
          primary
        >
          Start to search <Icon name="right arrow" />
        </Button>
      </Link>
    </div>
  </div>
);

export default StartPage;
