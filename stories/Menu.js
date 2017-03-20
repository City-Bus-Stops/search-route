import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Menu from '../src/components/Menu';

storiesOf('Menu', module)
  .add('Default menu', () => (
    <div>
      <Menu />
    </div>
  ));
