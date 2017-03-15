import React from 'react';
import InputField from '../InputField';

const SearchRoute = () => (
  <div className="ui two column middle aligned centered grid padded search-route">
    <div className="six wide column">
      <h2 className="ui image header">
        <div className="content">
          Search your route
        </div>
      </h2>
      <form className="ui form segment stacked big">
        <InputField
          type="text"
          name="From"
          placeholder="From"
          id="from"
          customContent={<i className="location arrow link icon red" />}
          customContentPosition="right"
        />
        <InputField
          type="text"
          name="To"
          placeholder="To"
          id="to"
          customContent={<i className="location arrow link icon red" />}
          customContentPosition="right"
        />
        <button className="ui button blue large fluid" type="submit">Search</button>
      </form>
    </div>
  </div>
);

export default SearchRoute;
