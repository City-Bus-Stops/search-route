import React from 'react';
import { storiesOf } from '@kadira/storybook';
import StartPage from '../src/components/StartPage';

storiesOf('StartPage', module)
  .add('Default StartPage', () => (
    <div>
      <StartPage />
    </div>
  ));
