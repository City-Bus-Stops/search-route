import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Login from '../src/components/Login/Login';

storiesOf('Login', module)
  .add('Default login', () => (
    <Login
      email=""
      password=""
      errors={{}}
      logIn={() => {}}
      setFormField={() => {}}
    />
  ))
  .add('with errors', () => (
    <Login
      email=""
      password=""
      errors={{
        email: ['Email is not a valid email'],
        password: ['Password must be at least 8 characters'],
      }}
      logIn={() => {}}
      setFormField={() => {}}
    />
  ));
