import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { flow } from 'lodash';

import SearchRoute from '../../components/SearchRoute/SearchRoute';

import { setFormField, findUserLocation, searchRoutes, formSubmitFailed } from '../../actions/actions';
import { getForm, getRoutes } from '../../reducers/searchRoute/searchRoute';
import { getFrom, getTo, getErrors } from '../../reducers/searchRoute/form';

const mapStateToProps = state => ({
  from: flow([getForm, getFrom])(state.searchRoute),
  to: flow([getForm, getTo])(state.searchRoute),
  routes: flow([getRoutes])(state.searchRoute),
  errors: flow([getForm, getErrors])(state.searchRoute),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    setFormField,
    findUserLocation,
    searchRoutes,
    formSubmitFailed,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchRoute);
