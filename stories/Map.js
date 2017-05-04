import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import MapComponent from '../src/components/Map/Map';

import mockData from '../src/json-server/db.json';

storiesOf('Map', module)
  .add('Default map', () => (
    <div>
      <MapComponent
        data={[]}
        actions={{
          getMapPointInfo: action('Load point info'),
          closeMapPointInfo: action('Close map point info'),
          toggleSideBar: action('Toggle sidebar'),
          getUserPointInfo: action('Get user point info'),
          findUserLocation: action('Find user location'),
          loadRouteBetweenPoints: action('Load route between points'),
          findNearestButStops: action('Find nearest bus stops'),
        }}
        isSidebarOpen={false}
        pointInfo={{}}
      />
    </div>
  ))
  .add('with route', () => (
    <div>
      <MapComponent
        data={mockData['routes-geo'][0].geoData}
        actions={{
          getMapPointInfo: action('Load point info'),
          closeMapPointInfo: action('Close map point info'),
          toggleSideBar: action('Toggle sidebar'),
          getUserPointInfo: action('Get user point info'),
          findUserLocation: action('Find user location'),
          loadRouteBetweenPoints: action('Load route between points'),
          findNearestButStops: action('Find nearest bus stops'),
        }}
        isSidebarOpen={false}
        pointInfo={{}}
      />
    </div>
  ))
  .add('with nearest bus stops', () => (
    <div>
      <MapComponent
        data={mockData['nearest-bus-stops']}
        actions={{
          getMapPointInfo: action('Load point info'),
          closeMapPointInfo: action('Close map point info'),
          toggleSideBar: action('Toggle sidebar'),
          getUserPointInfo: action('Get user point info'),
          findUserLocation: action('Find user location'),
          loadRouteBetweenPoints: action('Load route between points'),
          findNearestButStops: action('Find nearest bus stops'),
        }}
        isSidebarOpen={false}
        pointInfo={{}}
        center={[53.6729683, 23.79417658]}
        zoom={17}
        maxZoom={18}
        minZoom={14}
      />
    </div>
  ))
  .add('with sidebar', () => (
    <div>
      <MapComponent
        data={[]}
        actions={{
          getMapPointInfo: action('Load point info'),
          closeMapPointInfo: action('Close map point info'),
          toggleSideBar: action('Toggle sidebar'),
          getUserPointInfo: action('Get user point info'),
          findUserLocation: action('Find user location'),
          loadRouteBetweenPoints: action('Load route between points'),
          findNearestButStops: action('Find nearest bus stops'),
        }}
        pointInfo={{}}
        center={[53.6729683, 23.79417658]}
        zoom={17}
        maxZoom={18}
        minZoom={14}
        isSidebarOpen
      />
    </div>
  ));
