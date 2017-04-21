import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Menu from '../src/components/Menu/Menu';

storiesOf('Menu', module)
  .add('Default menu', () => (
    <div>
      <Menu pathname="search-route" />
    </div>
  ))
  .add('when user is authenticated', () => (
    <div>
      <Menu
        isUserAuth
        pathname="search-route"
        userCredentials={{
          firstName: 'John',
          lastName: 'Doe',
        }}
      />
    </div>
  ));
