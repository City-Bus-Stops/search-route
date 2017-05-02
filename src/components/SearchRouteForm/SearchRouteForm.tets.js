import React from 'react';
import ReactDOM from 'react-dom';
import SearchRouteForm from './SearchRouteForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <SearchRouteForm
      from=""
      to=""
      errors={{}}
      setFormField={() => {}}
      findUserAddress={() => {}}
      searchRoute={() => {}}
    />, div);
});
