import React, { Component } from 'react';
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

class SearchRouteContainer extends Component {
  getInfoAboutRoute = (id) => {
    const { getRouteInfo } = this.props.actions;
    getRouteInfo(id, SEARCH_ROUTE);
  }

  getRouteGeoData = (id) => {
    const { getRouteGeoData } = this.props.actions;
    getRouteGeoData(id, SEARCH_ROUTE);
  }

  closeRouteInfo = () => {
    const { clearRouteInfo } = this.props.actions;
    clearRouteInfo(SEARCH_ROUTE);
  }

  saveRoute = (id) => {
    const { saveToFavorites } = this.props.actions;
    saveToFavorites(id, SEARCH_ROUTE);
  }

  render() {
    const { routes, routeInfo } = this.props;

    return (
      <div>
        <SearchRouteFormContainer />
        <RouteInfo
          routeInfo={routeInfo}
          closeRouteInfo={this.closeRouteInfo}
          saveRoute={this.saveRoute}
        />
        <Routes
          routes={routes}
          getRouteInfo={this.getInfoAboutRoute}
          showOnTheMap={this.getRouteGeoData}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  routes: getRoutes(state.searchRoute),
  routeInfo: getInfo(state.searchRoute),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getRouteInfo,
    getRouteGeoData,
    clearRouteInfo,
    saveToFavorites,
  }, dispatch),
});

SearchRouteContainer.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  routeInfo: PropTypes.shape().isRequired,
  actions: PropTypes.shape({
    getRouteInfo: PropTypes.func.isRequired,
    clearRouteInfo: PropTypes.func.isRequired,
    getRouteGeoData: PropTypes.func.isRequired,
    saveToFavorites: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchRouteContainer);
