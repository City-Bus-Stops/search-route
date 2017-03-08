import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import '../public/css/index.css';
import '../semantic/dist/semantic.min.css';

import App from './components/App/App';
import Login from './components/Login/Login';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/login" component={Login} />
  </Router>,
  document.getElementById('root'),
);
