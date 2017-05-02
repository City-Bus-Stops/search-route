import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { flow } from 'lodash';

import SearchRoute from '../../components/SearchRoute/SearchRoute';

import {
  setFormField,
  findUserAddress,
  searchRoute,
  formSubmitFailed,
  getRouteInfo,
  getRouteGeoData,
  clearRouteInfo,
} from '../../actions/actions';
import { getForm, getRoutes, getInfo } from '../../reducers/searchRoute/searchRoute';
import { getFrom, getTo, getErrors } from '../../reducers/searchRoute/form';

const mapStateToProps = state => ({
  from: flow([getForm, getFrom])(state.searchRoute),
  to: flow([getForm, getTo])(state.searchRoute),
  routes: flow([getRoutes])(state.searchRoute),
  errors: flow([getForm, getErrors])(state.searchRoute),
  routeInfo: flow([getInfo])(state.searchRoute),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    setFormField,
    findUserAddress,
    searchRoute,
    formSubmitFailed,
    getRouteInfo,
    getRouteGeoData,
    clearRouteInfo,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchRoute);
