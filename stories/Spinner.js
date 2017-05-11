import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Root from '../src/components/Root/Root';
import Dashboard from '../src/components/Dashboard/Dashboard';

storiesOf('Spinner', module)
  .add('Active Spinner', () => (
    <div>
      <Root
        IsSpinnerActive
        location={{
          pathname: 'testPath',
        }}
        notifications={[]}
      >
        <Dashboard />
      </Root>
    </div>
  ));
