import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MapComponent from '../../components/Map/Map';
import PointInfo from '../../components/PointInfo/PointInfo';

import Auth from '../../auth';

import {
  toggleSideBar,
  closeSideBar,
  getPointInfo,
  closeMapPointInfo,
  getUserPointInfo,
  findUserLocation,
  loadRouteBetweenPoints,
  findNearestButStops,
  saveToFavorites,
  loadBusStopGeoData,
  loadBusStopsGeoData,
} from '../../actions/actions';

import { getGeoData, getIsSidebarOpen, getMapPointInfo, getClusterGeoData,
  mapOptionsSelector } from '../../reducers/map/map';
import { mapCenterSelector, mapMaxZoomSelector, mapMinZoomSelector, mapZoomControlSelector,
  mapZoomSelector } from '../../reducers/map/mapOptions';

import { getUserCoordinates } from '../../reducers/userLocation';

export const MAP = 'map';

class MapContainer extends Component {
  // componentDidMount() {
  //   const { loadBusStopsGeoData } = this.props.actions;
  //   loadBusStopsGeoData('Hrodna');
  // }

  componentWillUnmount() {
    const { closeSideBar, closeMapPointInfo } = this.props.actions;
    closeSideBar();
    closeMapPointInfo(MAP);
  }

  getMapPointInfo = (id) => {
    const { getPointInfo } = this.props.actions;
    getPointInfo(id, MAP);
  };

  getUserPointInfo = () => {
    const { getUserPointInfo } = this.props.actions;
    getUserPointInfo(MAP);
  };

  getBusScheduleOnBusStop = (busStopId) => {
    /** TODO **/
    console.log(busStopId);
  };

  savePointToFavorites = (id) => {
    const { saveToFavorites } = this.props.actions;
    saveToFavorites(id, MAP);
  };

  loadRouteToBusStop = (coords) => {
    const { userCoordinates } = this.props;
    const { loadRouteBetweenPoints } = this.props.actions;

    loadRouteBetweenPoints(userCoordinates, coords, MAP);
  };

  closePointInfo = () => {
    const { closeMapPointInfo } = this.props.actions;
    closeMapPointInfo(MAP);
  };

  loadMapBusStopGeoData = (busStopId) => {
    const { loadBusStopGeoData } = this.props.actions;
    loadBusStopGeoData(busStopId, MAP);
  };

  render() {
    const { data, clusterData, isSidebarOpen, pointInfo, userCoordinates, mapCenter,
      isUserRegistered, zoom, minZoom, maxZoom, zoomControl } = this.props;
    const { toggleSideBar, findNearestButStops, findUserLocation } = this.props.actions;

    return (
      <div>
        <MapComponent
          data={data}
          zoom={zoom}
          minZoom={minZoom}
          maxZoom={maxZoom}
          zoomControl={zoomControl}
          clusterData={clusterData}
          isSidebarOpen={isSidebarOpen}
          pointInfo={pointInfo}
          userCoordinates={userCoordinates}
          mapCenter={mapCenter}
          toggleSideBar={toggleSideBar}
          findNearestButStops={findNearestButStops}
          getPointInfo={this.getMapPointInfo}
          getUserInfo={this.getUserPointInfo}
          isUserRegistered={isUserRegistered}
          findUserLocation={findUserLocation}
        />
        <PointInfo
          pointInfo={pointInfo}
          closePointInfo={this.closePointInfo}
          loadRouteToBusStop={this.loadRouteToBusStop}
          savePoint={this.savePointToFavorites}
          getBusScheduleOnBusStop={this.getBusScheduleOnBusStop}
          loadBusStopGeoData={this.loadMapBusStopGeoData}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const mapOptions = mapOptionsSelector(state.map);

  return {
    data: getGeoData(state.map),
    clusterData: getClusterGeoData(state.map),
    isSidebarOpen: getIsSidebarOpen(state.map),
    pointInfo: getMapPointInfo(state.map),
    userCoordinates: getUserCoordinates(state.userLocation),
    mapCenter: mapCenterSelector(mapOptions),
    zoom: mapZoomSelector(mapOptions),
    minZoom: mapMinZoomSelector(mapOptions),
    maxZoom: mapMaxZoomSelector(mapOptions),
    zoomControl: mapZoomControlSelector(mapOptions),
    isUserRegistered: Auth.isUserRegistered(),
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getPointInfo,
    toggleSideBar,
    closeMapPointInfo,
    getUserPointInfo,
    findUserLocation,
    loadRouteBetweenPoints,
    findNearestButStops,
    saveToFavorites,
    closeSideBar,
    loadBusStopGeoData,
    loadBusStopsGeoData,
  }, dispatch),
});

MapContainer.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape),
    PropTypes.shape(),
  ]).isRequired,
  clusterData: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  pointInfo: PropTypes.shape().isRequired,
  mapCenter: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoom: PropTypes.number.isRequired,
  minZoom: PropTypes.number.isRequired,
  maxZoom: PropTypes.number.isRequired,
  zoomControl: PropTypes.bool.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
  userCoordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  isUserRegistered: PropTypes.bool.isRequired,
  actions: PropTypes.shape({
    getPointInfo: PropTypes.func.isRequired,
    toggleSideBar: PropTypes.func.isRequired,
    closeMapPointInfo: PropTypes.func.isRequired,
    getUserPointInfo: PropTypes.func.isRequired,
    findUserLocation: PropTypes.func.isRequired,
    loadRouteBetweenPoints: PropTypes.func.isRequired,
    findNearestButStops: PropTypes.func.isRequired,
    saveToFavorites: PropTypes.func.isRequired,
    closeSideBar: PropTypes.func.isRequired,
    loadBusStopGeoData: PropTypes.func.isRequired,
    loadBusStopsGeoData: PropTypes.func.isRequired,
  }).isRequired,
};

MapContainer.defaultProps = {
  data: [],
  mapCenter: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
