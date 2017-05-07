import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Login
      email="testEmail"
      password="testPassword"
      errors={{}}
      logIn={() => {}}
      setFormField={() => {}}
    />, div);
});
