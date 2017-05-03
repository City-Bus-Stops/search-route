import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

const mapStateToProps = (state) => {
  const form = getForm(state.searchRoute);

  return {
    from: getFrom(form),
    to: getTo(form),
    errors: getErrors(form),
    routes: getRoutes(state.searchRoute),
    routeInfo: getInfo(state.searchRoute),
  };
};

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
