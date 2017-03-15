import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Root from '../src/components/Root/Root';
import Dashboard from '../src/components/Dashboard';

storiesOf('Root', module)
  .add('Default Root', () => (
    <Root>
      <Dashboard />
    </Root>
  ));
