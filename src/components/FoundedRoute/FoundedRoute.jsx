import React from 'react';
import { Link } from 'react-router';

const FoundedRoute = () => (
  <div className="column">
    <div className="ui card fluid blue">
      <div className="content">
        <div className="header">
          <div className="right floated meta">Time in travel: 15 minutes</div>
          <a className="ui blue ribbon label">Bus number: 3</a>
        </div>
        <div className="description">
          <div>
            <h3 className="ui header">
                  From: Фолюш
                </h3>
          </div>
          <div>
            <h3 className="ui header">
                  To: Советская
                </h3>
          </div>
        </div>
      </div>
      <div className="extra content">
        <span
          className="right floated"
          data-tooltip="Watch on the map"
          data-position="bottom right"
        >
          <Link to="/map">
            <i className="link map outline red icon" />
          </Link>
        </span>
        <span>
          <i className="info circle icon" />
              More info
            </span>
      </div>
    </div>
  </div>
);


export default FoundedRoute;
