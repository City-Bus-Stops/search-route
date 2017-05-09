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
import {
  getConfirmHeader,
  getConfirmQuestion,
  getConfirmType,
  getOnConfirm,
} from '../../reducers/confirm';

export const FAVORITES = 'favorites';

class FavoritesContainer extends Component {
  constructor(props) {
    super(props);

    this.removeFromFavorites = this.removeFromFavorites.bind(this);
  }

  componentDidMount() {
    const { loadFavorites } = this.props.actions;
    loadFavorites(FAVORITES);
  }

  removeFromFavorites(id) {
    const { openConfirm, removeFromFavorites } = this.props.actions;
    openConfirm({
      header: 'Remove',
      question: 'Are you sure you want to remove from favorites?',
      type: 'remove',
      onConfirm: () => removeFromFavorites(id, FAVORITES),
    }, FAVORITES);
  }

  render() {
    const {
      routes, busStops, routeInfo, confirmHeader, confirmQuestion, confirmType, onConfirm,
    } = this.props;
    const {
      getRouteGeoData, getRouteInfo, loadBusStopGeoData, clearRouteInfo,
      closeConfirm,
    } = this.props.actions;

    return (
      <div>
        <Favorites
          routes={routes}
          busStops={busStops}
          getRouteGeoData={getRouteGeoData}
          getRouteInfo={getRouteInfo}
          loadBusStopGeoData={loadBusStopGeoData}
          removeFromFavorites={this.removeFromFavorites}
        />
        <RouteInfo
          routeInfo={routeInfo}
          clearRouteInfo={clearRouteInfo}
        />
        <Confirm
          header={confirmHeader}
          question={confirmQuestion}
          type={confirmType}
          onConfirm={onConfirm}
          onCancel={closeConfirm}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const confirmConfig = getConfirmConfig(state.favorites);

  return {
    routes: getRoutes(state.favorites),
    routeInfo: getInfo(state.favorites),
    confirmConfig: getConfirmConfig(state.favorites),
    busStops: getBusStops(state.favorites),

    confirmHeader: getConfirmHeader(confirmConfig),
    confirmQuestion: getConfirmQuestion(confirmConfig),
    confirmType: getConfirmType(confirmConfig),
    onConfirm: getOnConfirm(confirmConfig),
  };
};

const mapDispatchToProps = disaptch => ({
  actions: bindActionCreators({
    getRouteInfo: routeId => getRouteInfo(routeId, FAVORITES),
    getRouteGeoData: routeId => getRouteGeoData(routeId, FAVORITES),
    clearRouteInfo: () => clearRouteInfo(FAVORITES),
    loadFavorites,
    loadBusStopGeoData,
    openConfirm,
    closeConfirm: () => closeConfirm(FAVORITES),
    removeFromFavorites,
  }, disaptch),
});

FavoritesContainer.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  routeInfo: PropTypes.shape().isRequired,
  busStops: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  confirmHeader: PropTypes.string,
  confirmQuestion: PropTypes.string,
  confirmType: PropTypes.string,
  onConfirm: PropTypes.func,
  actions: PropTypes.shape({
    getRouteGeoData: PropTypes.func.isRequired,
    getRouteInfo: PropTypes.func.isRequired,
    loadFavorites: PropTypes.func.isRequired,
    loadBusStopGeoData: PropTypes.func.isRequired,
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
