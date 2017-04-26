import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { flow } from 'lodash';

import SearchRouteMap from '../../components/SearchRouteMap/SearchRouteMap';

import {
  toggleSideBar,
  loadRouteGeoData,
  clearRouteGeoData,
  getMapPointInfo,
  clearMapPointInfo,
} from '../../actions/actions';

import { getGeoData, getIsSidebarOpen, getPointInfo } from '../../reducers/searchRouteMap/searchRouteMap';

const mapStateToProps = (state, ownProps) => ({
  routeId: ownProps.params.id,
  route: flow([getGeoData])(state.searchRouteMap),
  isSidebarOpen: flow([getIsSidebarOpen])(state.searchRouteMap),
  pointInfo: flow([getPointInfo])(state.searchRouteMap),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getMapPointInfo: pointId => getMapPointInfo(pointId, 'searchRoute'),
    toggleSideBar: () => toggleSideBar('searchRoute'),
    loadRouteGeoData: routeId => loadRouteGeoData(routeId, 'searchRoute'),
    clearRouteGeoData: () => clearRouteGeoData('searchRoute'),
    clearMapPointInfo: () => clearMapPointInfo('searchRoute'),
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchRouteMap);
