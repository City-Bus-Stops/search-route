import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Login from '../src/components/Login';

storiesOf('Login', module)
  .add('Default login', () => (
    <Login />
  ));
