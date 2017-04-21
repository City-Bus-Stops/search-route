import React from 'react';
import { storiesOf } from '@kadira/storybook';
import PointInfo from '../src/components/PointInfo/PointInfo';

storiesOf('PointInfo', module)
  .add('Default PointInfo', () => (
    <PointInfo isOpen />
  ));
