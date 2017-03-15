import React from 'react';
import { storiesOf } from '@kadira/storybook';
import InfoPanel from '../src/components/InfoPanel';

storiesOf('InfoPanel', module)
  .add('Default InfoPanel', () => (
    <InfoPanel />
  ));
