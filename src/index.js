import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

import 'leaflet/dist/leaflet.css';
import '../public/css/index.css';
import '../node_modules/semantic-ui-css/semantic.min.css';
import '../public/mapkey-icons/MapkeyIcons.css';
import '../public/mapkey-icons/L.Icon.Mapkey.css';

import Root from './components/Root/Root';
import Dashboard from './components/Dashboard/Dashboard';
import SearchRoute from './components/SearchRoute/SearchRoute';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import MapComponent from './components/Map/Map';
import NotFound from './components/NotFound/NotFound';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRedirect to="/dashboard" />
      <Route path="dashboard" component={Dashboard} />
      <Route path="search-route" component={SearchRoute} />
      <Route path="login" component={Login} />
      <Route path="signup" component={Signup} />
      <Route path="map" component={MapComponent} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>,
  document.getElementById('root'),
);
