import React from 'react';
import ReactDOM from 'react-dom';
import TechnologiesPanel from './TechnologiesPanel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TechnologiesPanel />, div);
});
