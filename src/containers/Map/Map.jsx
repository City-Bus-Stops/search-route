import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isEmpty } from 'lodash';

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
} from '../../actions/actions';

import { calculateMapCenter } from '../../utils';

import { getGeoData, getIsSidebarOpen, getMapPointInfo, getGeoDataMainPoint } from '../../reducers/map/map';

import { getUserCoordinates } from '../../reducers/userLocation';

export const MAP = 'map';

class MapContainer extends Component {
  componentDidMount() {
    const { findUserLocation } = this.props.actions;
    findUserLocation();
  }

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
  }

  render() {
    const { data, defaultCenter, zoom, maxZoom, minZoom, zoomControl, isSidebarOpen,
      pointInfo, userCoordinates, mapCenter, isUserRegistered } = this.props;
    const { toggleSideBar, findNearestButStops } = this.props.actions;

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
          toggleSideBar={toggleSideBar}
          findNearestButStops={findNearestButStops}
          getPointInfo={this.getMapPointInfo}
          getUserInfo={this.getUserPointInfo}
          isUserRegistered={isUserRegistered}
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
  const geoDataMainPoint = getGeoDataMainPoint(state.map);
  const userCoordinates = getUserCoordinates(state.userLocation);

  return {
    data: getGeoData(state.map),
    isSidebarOpen: getIsSidebarOpen(state.map),
    pointInfo: getMapPointInfo(state.map),
    userCoordinates: getUserCoordinates(state.userLocation),
    mapCenter: calculateMapCenter(geoDataMainPoint, userCoordinates),
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
  }, dispatch),
});

MapContainer.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape),
    PropTypes.shape(),
  ]).isRequired,
  pointInfo: PropTypes.shape().isRequired,
  mapCenter: PropTypes.arrayOf(PropTypes.number),
  defaultCenter: PropTypes.arrayOf(PropTypes.number),
  zoom: PropTypes.number,
  maxZoom: PropTypes.number,
  minZoom: PropTypes.number,
  zoomControl: PropTypes.bool,
  isSidebarOpen: PropTypes.bool.isRequired,
  userCoordinates: PropTypes.arrayOf(PropTypes.number),
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
  }).isRequired,
};

MapContainer.defaultProps = {
  data: [],
  mapCenter: [],
  defaultCenter: [53.66946, 23.824368],
  zoom: 16,
  maxZoom: 20,
  minZoom: 11,
  zoomControl: false,
  userCoordinates: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
