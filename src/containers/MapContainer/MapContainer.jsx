import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isEmpty } from 'lodash';

import MapComponent from '../../components/Map/Map';
import PointInfo from '../../components/PointInfo/PointInfo';

import {
  toggleSideBar,
  getMapPointInfo,
  closeMapPointInfo,
  getUserPointInfo,
  findUserLocation,
  loadRouteBetweenPoints,
  findNearestButStops,
} from '../../actions/actions';

import { getGeoData, getIsSidebarOpen, getPointInfo, getUserCoordinates,
  getMapCenter } from '../../reducers/map/map';

class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.loadRouteToBusStop = this.loadRouteToBusStop.bind(this);
  }

  componentDidMount() {
    const { findUserLocation } = this.props.actions;

    findUserLocation();
  }

  loadRouteToBusStop(point) {
    const { userCoordinates } = this.props;
    const { loadRouteBetweenPoints } = this.props.actions;

    loadRouteBetweenPoints(userCoordinates, point.coords);
  }

  render() {
    const { data, defaultCenter, zoom, maxZoom, minZoom, zoomControl, isSidebarOpen,
      pointInfo, userCoordinates, mapCenter, actions } = this.props;

    return (
      <div>
        <MapComponent
          data={data}
          defaultCenter={defaultCenter}
          zoom={zoom}
          maxZoom={maxZoom}
          minZoom={minZoom}
          zoomControl={zoomControl}
          isSidebarOpen={isSidebarOpen}
          pointInfo={pointInfo}
          userCoordinates={userCoordinates}
          mapCenter={isEmpty(mapCenter) ? defaultCenter : mapCenter}
          actions={actions}
        />
        <PointInfo
          pointInfo={pointInfo}
          closePointInfo={actions.closeMapPointInfo}
          loadRouteToBusStop={this.loadRouteToBusStop}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: getGeoData(state.map),
  isSidebarOpen: getIsSidebarOpen(state.map),
  pointInfo: getPointInfo(state.map),
  userCoordinates: getUserCoordinates(state.map),
  mapCenter: getMapCenter(state.map),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getMapPointInfo,
    toggleSideBar,
    closeMapPointInfo,
    getUserPointInfo,
    findUserLocation,
    loadRouteBetweenPoints,
    findNearestButStops,
  }, dispatch),
});

MapContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape),
  pointInfo: PropTypes.shape().isRequired,
  mapCenter: PropTypes.arrayOf(PropTypes.number),
  defaultCenter: PropTypes.arrayOf(PropTypes.number),
  zoom: PropTypes.number,
  maxZoom: PropTypes.number,
  minZoom: PropTypes.number,
  zoomControl: PropTypes.bool,
  isSidebarOpen: PropTypes.bool.isRequired,
  userCoordinates: PropTypes.arrayOf(PropTypes.number),
  actions: PropTypes.shape({
    getMapPointInfo: PropTypes.func.isRequired,
    toggleSideBar: PropTypes.func.isRequired,
    closeMapPointInfo: PropTypes.func.isRequired,
    getUserPointInfo: PropTypes.func.isRequired,
    findUserLocation: PropTypes.func.isRequired,
    loadRouteBetweenPoints: PropTypes.func.isRequired,
    findNearestButStops: PropTypes.func.isRequired,
  }).isRequired,
};

MapContainer.defaultProps = {
  data: [],
  mapCenter: [],
  defaultCenter: [53.66946, 23.824368],
  zoom: 16,
  maxZoom: 16,
  minZoom: 11,
  zoomControl: false,
  userCoordinates: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
