import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Icon, Button, Segment } from 'semantic-ui-react';
import { isEmpty, head } from 'lodash';

import InputField from '../InputField/InputField';

const SearchRouteForm = ({
  from, to, setFormField, findUserAddress, searchRoute, errors,
}) => (
  <Grid centered padded>
    <Grid.Row>
      <Grid.Column largeScreen={6} mobile={16} widescreen={6}>
        <Segment padded stacked>
          <Grid centered padded>
            <h1 className="font-style-oblique color-beige">
              Search your route
            </h1>
            <Grid.Row>
              <Grid.Column>
                <InputField
                  type="text"
                  label={<p>From <sup>*</sup></p>}
                  placeholder="From"
                  id="from"
                  hasError={!isEmpty(errors.from)}
                  error={head(errors.from)}
                  customContent={
                    <Icon
                      link
                      name="location arrow"
                      color="red"
                      onClick={() => findUserAddress('from')}
                    />
                  }
                  value={from}
                  onChange={value => setFormField(value, 'from')}
                  info={
                    <span className="info">
                      <Icon name="info circle" />
                      You can find location automatically
                    </span>
                  }

                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <InputField
                  type="text"
                  label={<p>To <sup>*</sup></p>}
                  placeholder="To"
                  id="to"
                  hasError={!isEmpty(errors.to)}
                  error={head(errors.to)}
                  customContent={
                    <Icon
                      link
                      name="location arrow"
                      color="red"
                      onClick={() => findUserAddress('to')}
                    />
                  }
                  value={to}
                  onChange={value => setFormField(value, 'to')}
                  info={
                    <span className="info">
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
                  onClick={() => searchRoute({ from, to })}
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
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  setFormField: PropTypes.func.isRequired,
  findUserAddress: PropTypes.func.isRequired,
  searchRoute: PropTypes.func.isRequired,
  errors: PropTypes.shape().isRequired,
};

export default SearchRouteForm;
