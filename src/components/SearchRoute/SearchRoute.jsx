import React from 'react';
import InputField from '../InputField/InputField';
import FoundedRoutes from '../FoundedRoutes/FoundedRoutes';

const SearchRoute = () => (
  <div>
    <div className="ui two column middle aligned centered grid padded search-route">
      <div className="six wide column">
        <h2 className="ui header">
          <div className="content">
            Search your route
          </div>
        </h2>
        <form className="ui form segment big">
          <InputField
            type="text"
            label={<p>From <sup>*</sup></p>}
            placeholder="From"
            id="from"
            customContent={<i className="location arrow link icon red" />}
            customContentPosition="right"
          />
          <InputField
            type="text"
            label={<p>To <sup>*</sup></p>}
            placeholder="To"
            id="to"
            customContent={<i className="location arrow link icon red" />}
            customContentPosition="right"
          />
          <button className="ui button blue large fluid" type="submit">Search</button>
        </form>
      </div>
    </div>
    <FoundedRoutes />
  </div>
);

export default SearchRoute;
