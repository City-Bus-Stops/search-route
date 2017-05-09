import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SearchRouteFormContainer, { SEARCH_ROUTE } from '../SearchRouteFormContainer/SearchRouteFormContainer';
import RouteInfo from '../../components/RouteInfo/RouteInfo';
import Routes from '../../components/Routes/Routes';

import {
  getRouteInfo,
  getRouteGeoData,
  clearRouteInfo,
  saveToFavorites,
} from '../../actions/actions';
import { getRoutes, getInfo } from '../../reducers/searchRoute/searchRoute';

const SearchRouteContainer = ({
  routes, routeInfo, actions: { getRouteInfo, getRouteGeoData, clearRouteInfo, saveToFavorites },
}) => (
  <div>
    <SearchRouteFormContainer />
    <RouteInfo
      routeInfo={routeInfo}
      clearRouteInfo={clearRouteInfo}
      saveToFavorites={saveToFavorites}
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
    getRouteInfo: routeId => getRouteInfo(routeId, SEARCH_ROUTE),
    getRouteGeoData: routeId => getRouteGeoData(routeId, SEARCH_ROUTE),
    clearRouteInfo: () => clearRouteInfo(SEARCH_ROUTE),
    saveToFavorites: id => saveToFavorites(id, SEARCH_ROUTE),
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
