import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Signup from '../src/components/Signup/Signup';

storiesOf('Signup', module)
  .add('Default signup', () => (
    <div>
      <Signup />
    </div>
  ));
