import React from 'react';
import ReactDOM from 'react-dom';
import FormErrorMessage from './FormErrorMessage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <FormErrorMessage
      meta={{}}
    />, div);
});
