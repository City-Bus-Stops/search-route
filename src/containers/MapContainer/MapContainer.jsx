import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { flow } from 'lodash';

import MapComponent from '../../components/Map/Map';

import {
  toggleSideBar,
  getMapPointInfo,
  closeMapPointInfo,
  getUserPointInfo,
  findUserLocation,
  loadRouteBetweenPoints,
} from '../../actions/actions';

import { getGeoData, getIsSidebarOpen, getPointInfo, getUserCoordinates,
  getMapCenter } from '../../reducers/map/map';

const mapStateToProps = state => ({
  data: flow([getGeoData])(state.map),
  isSidebarOpen: flow([getIsSidebarOpen])(state.map),
  pointInfo: flow([getPointInfo])(state.map),
  userCoordinates: flow([getUserCoordinates])(state.map),
  mapCenter: flow([getMapCenter])(state.map),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getMapPointInfo: pointId => getMapPointInfo(pointId),
    toggleSideBar,
    closeMapPointInfo,
    getUserPointInfo,
    findUserLocation,
    loadRouteBetweenPoints,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapComponent);
