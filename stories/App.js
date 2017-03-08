import React from 'react';
import { storiesOf } from '@kadira/storybook';
import App from '../src/components/App/App';

storiesOf('App', module)
  .add('Default app', () => (
    <App />
  ));
