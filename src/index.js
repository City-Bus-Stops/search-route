import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

import 'leaflet/dist/leaflet.css';
import '../public/css/index.css';
import '../node_modules/semantic-ui-css/semantic.min.css';

import Root from './components/Root/Root';
import Dashboard from './components/Dashboard/Dashboard';
import SearchRoute from './components/SearchRoute/SearchRoute';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRedirect to="/dashboard" />
      <Route path="dashboard" component={Dashboard} />
      <Route path="search-route" component={SearchRoute} />
      <Route path="login" component={Login} />
      <Route path="signup" component={Signup} />
    </Route>
  </Router>,
  document.getElementById('root'),
);
