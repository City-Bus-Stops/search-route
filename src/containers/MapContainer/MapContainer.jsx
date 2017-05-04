import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MapComponent from '../../components/Map/Map';

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

export default connect(mapStateToProps, mapDispatchToProps)(MapComponent);
