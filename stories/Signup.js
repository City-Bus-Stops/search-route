import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Signup from '../src/components/Signup/Signup';

storiesOf('Signup', module)
  .add('Default signup', () => (
    <Signup
      email=""
      password=""
      confirmPassword=""
      errors={{}}
      signUp={() => {}}
      setFormField={() => {}}
    />
  ))
  .add('with errors', () => (
    <Signup
      email=""
      password=""
      confirmPassword=""
      errors={{
        email: ['Email is not a valid email'],
        password: ['Password must be at least 8 characters'],
        confirmPassword: ['Confirm password is not equal to password'],
      }}
      signUp={() => {}}
      setFormField={() => {}}
    />
  ));
