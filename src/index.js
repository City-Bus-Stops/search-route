import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';

import 'leaflet/dist/leaflet.css';
import '../public/css/index.css';
import '../node_modules/semantic-ui-css/semantic.min.css';
import '../public/mapkey-icons/MapkeyIcons.css';
import '../public/mapkey-icons/L.Icon.Mapkey.css';

import RootContainer from './containers/RootContainer/RootContainer';
import Dashboard from './components/Dashboard/Dashboard';
import SearchRouteContainer from './containers/SearchRouteContainer/SearchRouteContainer';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import MapComponent from './components/Map/Map';
import NotFound from './components/NotFound/NotFound';

import configureStore from './configureStore';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router history={browserHistory}>
      <Route path="/" component={RootContainer}>
        <IndexRedirect to="/dashboard" />
        <Route path="dashboard" component={Dashboard} />
        <Route path="search-route" component={SearchRouteContainer} />
        <Route path="map" component={MapComponent} />
      </Route>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
