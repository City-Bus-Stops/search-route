import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Favorites from '../../components/Favorites/Favorites';
import RouteInfo from '../../components/RouteInfo/RouteInfo';
import Confirm from '../../components/Confirm/Confirm';

import {
  getRouteGeoData,
  getRouteInfo,
  loadFavorites,
  loadBusStopGeoData,
  clearRouteInfo,
  openConfirm,
  closeConfirm,
  removeFromFavorites,
} from '../../actions/actions';
import {
  getRoutes,
  getInfo,
  getConfirmConfig,
  getBusStops,
} from '../../reducers/favorites/favorites';

export const FAVORITES = 'favorites';

class FavoritesContainer extends Component {
  componentDidMount() {
    const { loadFavorites } = this.props.actions;
    loadFavorites(FAVORITES);
  }

  getFavoriteRouteInfo = (id) => {
    const { getRouteInfo } = this.props.actions;
    getRouteInfo(id, FAVORITES);
  };

  getFavoriteRouteGeoData = (id) => {
    const { getRouteGeoData } = this.props.actions;
    getRouteGeoData(id, FAVORITES);
  };

  confirmAndRemove = (id) => {
    const { openConfirm, closeConfirm, removeFromFavorites } = this.props.actions;
    openConfirm({
      header: 'Remove',
      question: 'Are you sure you want to remove from favorites?',
      type: 'remove',
      onConfirm: () => {
        removeFromFavorites(id, FAVORITES);
        closeConfirm(FAVORITES);
      },
      onCancel: () => closeConfirm(FAVORITES),
    }, FAVORITES);
  }

  closeFavoriteRouteInfo = () => {
    const { clearRouteInfo } = this.props.actions;
    clearRouteInfo(FAVORITES);
  }

  render() {
    const { routes, busStops, routeInfo, confirmConfig } = this.props;
    const {
      getRouteGeoData, loadBusStopGeoData,
    } = this.props.actions;

    return (
      <div>
        <Favorites
          routes={routes}
          busStops={busStops}
          showOnTheMap={getRouteGeoData}
          getRouteInfo={this.getFavoriteRouteInfo}
          loadBusStopGeoData={loadBusStopGeoData}
          removeFromFavorites={this.confirmAndRemove}
        />
        <RouteInfo
          routeInfo={routeInfo}
          closeRouteInfo={this.closeFavoriteRouteInfo}
        />
        <Confirm
          config={confirmConfig}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  routes: getRoutes(state.favorites),
  routeInfo: getInfo(state.favorites),
  confirmConfig: getConfirmConfig(state.favorites),
  busStops: getBusStops(state.favorites),
});

const mapDispatchToProps = disaptch => ({
  actions: bindActionCreators({
    getRouteInfo,
    getRouteGeoData,
    clearRouteInfo,
    loadFavorites,
    loadBusStopGeoData,
    openConfirm,
    closeConfirm,
    removeFromFavorites,
  }, disaptch),
});

FavoritesContainer.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  routeInfo: PropTypes.shape().isRequired,
  busStops: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  confirmConfig: PropTypes.shape().isRequired,
  actions: PropTypes.shape({
    getRouteGeoData: PropTypes.func.isRequired,
    getRouteInfo: PropTypes.func.isRequired,
    loadFavorites: PropTypes.func.isRequired,
    loadBusStopGeoData: PropTypes.func.isRequired,
    clearRouteInfo: PropTypes.func.isRequired,
    closeConfirm: PropTypes.func.isRequired,
    openConfirm: PropTypes.func.isRequired,
    removeFromFavorites: PropTypes.func.isRequired,
  }).isRequired,
};

FavoritesContainer.defaultProps = {
  confirmHeader: 'Confirm',
  confirmQuestion: '',
  confirmType: 'remove',
  onConfirm: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer);
