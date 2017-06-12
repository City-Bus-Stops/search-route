import React from 'react';
import ReactDOM from 'react-dom';
import UserActivity from './UserActivity';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserActivity />, div);
});
