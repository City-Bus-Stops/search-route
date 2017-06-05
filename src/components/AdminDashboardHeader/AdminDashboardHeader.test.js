import React from 'react';
import ReactDOM from 'react-dom';
import AdminDashboardHeader from './AdminDashboardHeader';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AdminDashboardHeader />, div);
});
