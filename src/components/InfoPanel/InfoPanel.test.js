import React from 'react';
import ReactDOM from 'react-dom';
import InfoPanel from './InfoPanel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InfoPanel />, div);
});
