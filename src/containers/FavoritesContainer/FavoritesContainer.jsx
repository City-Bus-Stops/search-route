import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Favorites from '../../components/Favorites/Favorites';

import { getRouteGeoData, getRouteInfo, loadFavorites } from '../../actions/actions';

export const FAVORITES = 'favorites';

class FavoritesContainer extends Component {
  componentDidMount() {
    const { loadFavorites } = this.props.actions;
    loadFavorites(FAVORITES);
  }

  render() {
    const { routes, busStops } = this.props;
    const { getRouteGeoData, getRouteInfo } = this.props.actions;

    return (
      <Favorites
        routes={routes}
        busStops={busStops}
        getRouteGeoData={getRouteGeoData}
        getRouteInfo={getRouteInfo}
      />
    );
  }
}

const mapStateToProps = state => ({
  routes: [],
  busStops: [],
});

const mapDispatchToProps = disaptch => ({
  actions: bindActionCreators({
    getRouteGeoData,
    getRouteInfo,
    loadFavorites,
  }, disaptch),
});

FavoritesContainer.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  busStops: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  actions: PropTypes.shape({
    getRouteGeoData: PropTypes.func.isRequired,
    getRouteInfo: PropTypes.func.isRequired,
    loadFavorites: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer);
