import React from 'react';
import { storiesOf } from '@kadira/storybook';
import FoundedRouteInfo from '../src/components/FoundedRouteInfo';

storiesOf('FoundedRouteInfo', module)
  .add('Default FoundedRouteInfo', () => (
    <FoundedRouteInfo />
  ));
