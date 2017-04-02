import React from 'react';

const Footer = () => (
  <div className="ui vertical footer segment">
    <div className="ui container">
      <div className="ui stackable  divided equal height stackable grid">
        <div className="three wide column">
          <h4 className="ui header">About</h4>
          <div className="ui link list">
            <a href="http://semantic-ui.com/examples/homepage.html#" className="item">Sitemap</a>
            <a href="http://semantic-ui.com/examples/homepage.html#" className="item">Contact Us</a>
            <a href="http://semantic-ui.com/examples/homepage.html#" className="item">Religious Ceremonies</a>
            <a href="http://semantic-ui.com/examples/homepage.html#" className="item">Gazebo Plans</a>
          </div>
        </div>
        <div className="three wide column">
          <h4 className="ui header">Services</h4>
          <div className="ui link list">
            <a href="http://semantic-ui.com/examples/homepage.html#" className="item">Banana Pre-Order</a>
            <a href="http://semantic-ui.com/examples/homepage.html#" className="item">DNA FAQ</a>
            <a href="http://semantic-ui.com/examples/homepage.html#" className="item">How To Access</a>
            <a href="http://semantic-ui.com/examples/homepage.html#" className="item">Favorite X-Men</a>
          </div>
        </div>
        <div className="seven wide column">
          <h4 className="ui header">Footer Header</h4>
          <p>Extra space for a call to action inside
            the footer that could help re-engage users.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
