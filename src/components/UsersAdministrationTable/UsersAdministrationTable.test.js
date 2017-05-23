import React from 'react';
import ReactDOM from 'react-dom';
import UsersAdministrationTable from './UsersAdministrationTable';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <UsersAdministrationTable
      users={[]}
      deleteUser={() => {}}
      changeUserStatus={() => {}}
      addUser={() => {}}
    />, div);
});
