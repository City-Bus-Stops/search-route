import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import FoundedRouteInfo from '../src/components/RouteInfo/RouteInfo';

const mockRouteInfo = {
  from: 'Фолюш',
  to: 'Советская',
  nearestBuses: [{
    id: '1',
    time: '12:32',
  }, {
    id: '2',
    time: '12:45',
  }, {
    id: '3',
    time: '12:50',
  }, {
    id: '4',
    time: '13:00',
  }],
  instruction: [{
    id: 1,
    type: 'start',
    title: 'Start point',
    description: 'Улица О.Соломовой 135',
  }, {
    id: 2,
    type: 'foot',
    title: '6 min',
    description: "Go to'Фолюш' bus stop.",
  }, {
    id: 3,
    type: 'bus',
    title: '15 min',
    description: "Go by bus for 15 minutes and get off at the 'Советская' bus stop.",
  }, {
    id: 4,
    type: 'foot',
    title: '7 min',
    description: "Go to 'Универмаг'.",
  }, {
    id: 5,
    type: 'end',
    title: 'End point',
    description: 'Улица Советская 18',
  }],
  busStops: [{
    id: 1,
    title: 'Фолюш',
    description: '1 minutes',
  }, {
    id: 2,
    title: 'Улица Лизы Чайкиной',
    description: '3 minutes',
  }, {
    id: 3,
    title: 'Улица Декабристов',
    description: '6 minutes',
  }, {
    id: 4,
    title: 'Улица Поповича',
    description: '10 minutes',
  }],
};

storiesOf('FoundedRouteInfo', module)
  .add('default RouteInfo', () => (
    <FoundedRouteInfo
      routeInfo={{}}
      clearRouteInfo={action('Clear route info')}
    />
  ))
  .add('with route info', () => (
    <FoundedRouteInfo
      routeInfo={mockRouteInfo}
      clearRouteInfo={action('Clear route info')}
    />
  ));
