import React from 'react';
import ReactDOM from 'react-dom';
import Confirm from './Confirm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Confirm
      config={{
        header: 'testHeader',
        question: '',
        type: 'remove',
        onConfirm: () => {},
        onCancel: () => {},
      }}
    />, div);
});
