import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

import InputField from '../InputField/InputField';

const SearchRouteForm = () => (
  <Grid centered padded className="search-route">
    <Grid.Row>
      <Grid.Column largeScreen="6" mobile="16" widescreen="6">
        <Header as="h2">
          Search your route
        </Header>
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
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default SearchRouteForm;
