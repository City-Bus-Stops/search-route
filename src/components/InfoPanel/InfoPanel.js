import React from 'react';

const InfoPanel = () => (
  <div className="ui vertical stripe segment">
    <div className="ui middle aligned stackable grid container">
      <div className="row">
        <div className="six wide column">
          <h3 className="ui header">We Help Companies and Companions</h3>
          <p>We can give your company superpowers to do things that they never thought possible.
            Let us delight your
            customers and empower your needs...through pure data analytics.</p>
          <h3 className="ui header">We Make Bananas That Can Dance</h3>
          <p>Yes that is right, you thought it was the stuff of dreams,
            but even bananas can be bioengineered.</p>
        </div>
        <div className="ten wide">
          <img
            alt="white"
            src="http://www.madmanblog.com/wp-content/uploads/2012/08/Rome-Google-Map.jpg"
            className="ui big bordered rounded image"
            role="presentation"
          />
        </div>
      </div>
      <div className="row">
        <div className="center aligned column">
          <a className="ui huge button">Check Them Out</a>
        </div>
      </div>
    </div>
  </div>
);

export default InfoPanel;
