import React from 'react';
import { storiesOf } from '@kadira/storybook';

import MapComponent from '../src/components/Map/Map';

import mockGeoJson from '../src/mockData/mockGeoJson';

storiesOf('Map', module)
  .add('Default map', () => (
    <div>
      <MapComponent />
    </div>
  ))
  .add('with route', () => (
    <div>
      <MapComponent data={mockGeoJson} />
    </div>
  ));
