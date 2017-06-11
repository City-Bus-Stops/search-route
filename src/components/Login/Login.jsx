import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Grid, Icon, Button, Segment } from 'semantic-ui-react';
import { Field } from 'redux-form';

import InputField from '../InputField/InputField';
import FormErrorMessage from '../FormErrorMessage/FormErrorMessage';

const Login = ({ logIn, handleSubmit }) => (
  <Grid centered padded id="login">
    <Grid.Row>
      <Grid.Column largeScreen={4} mobile={16} widescreen={4}>
        <Segment padded stacked>
          <Grid centered padded>
            <h1 className="font-style-oblique color-beige">
              Log-in to your account
            </h1>
            <Grid.Row>
              <Grid.Column>
                <Field
                  id="errorMessage"
                  name="errorMessage"
                  component={FormErrorMessage}
                  type="text"
                />
              </Grid.Column>
            </Grid.Row>
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
            <Grid.Row textAlign="center">
              <Link
                to="/"
                className="padding-left-5"
              >
                <h3 className="font-style-oblique color-beige">
                  Back to dashboard.
                  <Icon name="reply" color="blue" link circular />
                </h3>
              </Link>
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
