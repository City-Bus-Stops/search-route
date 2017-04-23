import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Icon, Popup, Button, Segment } from 'semantic-ui-react';
import { isEmpty, head } from 'lodash';

import InputField from '../InputField/InputField';

const SearchRouteForm = ({
  from, to, setFormField, findUserLocation, searchRoutes, errors,
}) => (
  <Segment padded basic>
    <Grid centered padded>
      <h1 className="font-style-oblique color-beige">
        Search your route
      </h1>
      <Grid.Row>
        <Grid.Column largeScreen="6" mobile="16" widescreen="6">
          <InputField
            type="text"
            label={<p>From <sup>*</sup></p>}
            placeholder="From"
            id="from"
            hasError={!isEmpty(errors.from)}
            error={head(errors.from)}
            customContent={
              <Popup
                hideOnScroll
                on="hover"
                trigger={
                  <Icon
                    link
                    name="location arrow"
                    color="red"
                    onClick={() => findUserLocation('from')}
                  />
                  }
                content="Search your location automatically"
                position="right center"
              />
              }
            customContentPosition="right"
            initialValue={from}
            onChange={value => setFormField(value, 'from')}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column largeScreen="6" mobile="16" widescreen="6">
          <InputField
            type="text"
            label={<p>To <sup>*</sup></p>}
            placeholder="To"
            id="to"
            hasError={!isEmpty(errors.to)}
            error={head(errors.to)}
            customContent={
              <Popup
                hideOnScroll
                on="hover"
                trigger={
                  <Icon
                    link
                    name="location arrow"
                    color="red"
                    onClick={() => findUserLocation('to')}
                  />
                  }
                content="Search your location automatically"
                position="right center"
              />
              }
            customContentPosition="right"
            initialValue={to}
            onChange={value => setFormField(value, 'to')}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column largeScreen="6" mobile="16" widescreen="6">
          <Button
            fluid
            color="blue"
            size="large"
            onClick={() => searchRoutes({ from, to })}
          >
        Search
      </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

SearchRouteForm.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  setFormField: PropTypes.func.isRequired,
  findUserLocation: PropTypes.func.isRequired,
  searchRoutes: PropTypes.func.isRequired,
  errors: PropTypes.shape().isRequired,
};

export default SearchRouteForm;
