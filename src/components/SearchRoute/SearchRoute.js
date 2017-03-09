import React from 'react';

const SearchRoute = () => (
  <div className="ui middle aligned center aligned grid search-route">
    <div className="six wide column">
      <h2 className="ui image header">
        <div className="content">
          Search your best route
        </div>
      </h2>
      <form className="ui form segment stacked">
        <div className="field">
          <label htmlFor="from">From</label>
          <input type="text" name="first-name" placeholder="From" id="from" />
        </div>
        <div className="field">
          <label htmlFor="to">To</label>
          <input type="text" name="last-name" placeholder="To" id="to" />
        </div>
        <button className="ui button blue fluid" type="submit">Search</button>
      </form>
    </div>
  </div>
);

export default SearchRoute;
