import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Spinner from '../src/components/Spinner/Spinner';

storiesOf('Spinner', module)
  .add('Default Spinner', () => (
    <div>
      <Spinner />
    </div>
  ))
  .add('Active Spinner', () => (
    <div>
      <Spinner isActive />
    </div>
  ));
