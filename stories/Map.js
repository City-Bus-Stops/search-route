import React from 'react';
import { storiesOf } from '@kadira/storybook';

import MapComponent from '../src/components/Map/Map';

import mockGeoJsonRoute from '../src/mockData/Route.json';
import nearestBusStops from '../src/mockData/NearestBusStops.json';

storiesOf('Map', module)
  .add('Default map', () => (
    <div>
      <MapComponent />
    </div>
  ))
  .add('with route', () => (
    <div>
      <MapComponent data={mockGeoJsonRoute} />
    </div>
  ))
  .add('with nearest bus stops', () => (
    <div>
      <MapComponent
        data={nearestBusStops}
        center={[53.6729683, 23.79417658]}
        zoom={17}
        maxZoom={18}
        minZoom={14}
      />
    </div>
  ));
