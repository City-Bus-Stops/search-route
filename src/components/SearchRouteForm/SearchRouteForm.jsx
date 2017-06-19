import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Icon, Button, Segment } from 'semantic-ui-react';
import { Field } from 'redux-form';

import InputField from '../InputField/InputField';

const SearchRouteForm = ({ findUserAddress, searchRoute, handleSubmit }) => (
  <Grid centered padded>
    <Grid.Row>
      <Grid.Column largeScreen={8} mobile={16} widescreen={6}>
        <Segment padded stacked>
          <Grid centered padded>
            <h1 className="font-style-oblique color-beige">
              Search your route
            </h1>
            <Grid.Row>
              <Grid.Column>
                <Field
                  id="from"
                  name="from"
                  component={InputField}
                  type="text"
                  placeholder="From"
                  customContent={
                    <Icon
                      link
                      name="location arrow"
                      color="red"
                      onClick={() => findUserAddress('from')}
                    />
                  }
                  label={<p>From <sup>*</sup></p>}
                  info={
                    <span className="info float-right only-on-mobiles-and-tablet">
                      <Icon name="info circle" />
                      You can find location automatically
                    </span>
                  }
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Field
                  id="to"
                  name="to"
                  component={InputField}
                  type="text"
                  placeholder="To"
                  customContent={
                    <Icon
                      link
                      name="location arrow"
                      color="red"
                      onClick={() => findUserAddress('to')}
                    />
                  }
                  label={<p>To <sup>*</sup></p>}
                  info={
                    <span className="info float-right only-on-mobiles-and-tablet">
                      <Icon name="info circle" />
                      You can find location automatically
                    </span>
                  }
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Button
                  fluid
                  color="blue"
                  size="large"
                  onClick={handleSubmit(searchRoute)}
                >
                  Search
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

SearchRouteForm.propTypes = {
  findUserAddress: PropTypes.func.isRequired,
  searchRoute: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchRouteForm;
