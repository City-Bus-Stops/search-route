import React from 'react';
import { storiesOf } from '@kadira/storybook';
import FavoritesRoutesTable from '../src/components/FavoritesRoutesTable/FavoritesRoutesTable';

storiesOf('FavoritesRoutesTable', module)
  .add('Default FavoritesRoutesTable', () => (
    <div>
      <FavoritesRoutesTable />
    </div>
  ));
