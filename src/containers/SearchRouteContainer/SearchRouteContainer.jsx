import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SearchRouteFormContainer from '../SearchRouteFormContainer/SearchRouteFormContainer';
import RouteInfo from '../../components/RouteInfo/RouteInfo';
import Routes from '../../components/Routes/Routes';


import {
  getRouteInfo,
  getRouteGeoData,
  clearRouteInfo,
} from '../../actions/actions';
import { getRoutes, getInfo } from '../../reducers/searchRoute/searchRoute';

const SearchRouteContainer = ({
  routes, routeInfo, actions: { getRouteInfo, getRouteGeoData, clearRouteInfo },
}) => (
  <div>
    <SearchRouteFormContainer />
    <RouteInfo
      routeInfo={routeInfo}
      clearRouteInfo={clearRouteInfo}
    />
    <Routes
      routes={routes}
      getRouteInfo={getRouteInfo}
      getRouteGeoData={getRouteGeoData}
    />
  </div>
);

const mapStateToProps = state => ({
  routes: getRoutes(state.searchRoute),
  routeInfo: getInfo(state.searchRoute),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getRouteInfo,
    getRouteGeoData,
    clearRouteInfo,
  }, dispatch),
});

SearchRouteContainer.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  routeInfo: PropTypes.shape().isRequired,
  actions: PropTypes.shape({
    getRouteInfo: PropTypes.func.isRequired,
    clearRouteInfo: PropTypes.func.isRequired,
    getRouteGeoData: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchRouteContainer);
