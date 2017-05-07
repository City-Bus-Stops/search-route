import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Grid, Icon, Button, Segment } from 'semantic-ui-react';
import { Field } from 'redux-form';

import InputField from '../InputField/InputField';

const Login = ({ logIn, handleSubmit }) => (
  <Grid centered padded id="login">
    <Grid.Row>
      <Grid.Column largeScreen={3} mobile={16} widescreen={3}>
        <Segment padded stacked>
          <Grid centered padded>
            <h1 className="font-style-oblique color-beige">
              Log-in to your account
            </h1>
            <Grid.Row>
              <Grid.Column>
                <Field
                  id="email"
                  name="email"
                  component={InputField}
                  type="text"
                  customContent={<Icon name="user" />}
                  iconPosition="left"
                  label={<p>Email <sup>*</sup></p>}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Field
                  id="password"
                  name="password"
                  component={InputField}
                  type="password"
                  customContent={<Icon name="lock" />}
                  iconPosition="left"
                  label={<p>Password <sup>*</sup></p>}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column verticalAlign="middle">
                <Link to="/signup" className="input-label">
                  New to us?
                </Link>
              </Grid.Column>
              <Grid.Column>
                <Button
                  fluid
                  color="blue"
                  size="large"
                  onClick={handleSubmit(logIn)}
                >
                Login
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

Login.propTypes = {
  logIn: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Login;
