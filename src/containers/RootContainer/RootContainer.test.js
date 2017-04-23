import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import RootContainer from './RootContainer';
import configureStore from '../../configureStore';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={configureStore()}>
      <RootContainer
        location={{
          pathname: 'testPath',
        }}
      />
    </Provider>, div);
});
