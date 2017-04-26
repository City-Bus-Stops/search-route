import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import PointInfo from '../src/components/PointInfo/PointInfo';

import mockData from '../src/json-server/db.json';

storiesOf('PointInfo', module)
  .add('bus stop point info', () => (
    <PointInfo
      pointInfo={mockData['points-info'][2].info}
      clearMapPointInfo={action('Clear map pont info')}
    />
  ))
  .add('start/end point info', () => (
    <PointInfo
      pointInfo={mockData['points-info'][0].info}
      clearMapPointInfo={action('Clear map pont info')}
    />
  ));
