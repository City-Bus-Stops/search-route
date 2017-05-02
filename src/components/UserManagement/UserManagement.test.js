import React from 'react';
import ReactDOM from 'react-dom';
import UserManagement from './UserManagement';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <UserManagement
      IsSpinnerActive={false}
      notifications={[]}
    />, div);
});
