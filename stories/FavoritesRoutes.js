import React from 'react';
import { storiesOf } from '@kadira/storybook';
import FavoritesRoutes from '../src/components/FavoritesRoutes/FavoritesRoutes';

storiesOf('FavoritesRoutes', module)
  .add('Default FavoritesRoutes', () => (
    <FavoritesRoutes />
  ));
