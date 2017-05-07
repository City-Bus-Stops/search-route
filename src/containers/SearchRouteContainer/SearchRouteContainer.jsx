import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isEmpty } from 'lodash';

import { validateSearchRouteForm } from '../../validation';

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


export const SEARCH_ROUTE = 'searchRoute';

class SearchRouteContainer extends Component {
  constructor(props) {
    super(props);

    this.setFormField = this.setFormField.bind(this);
    this.searchRoute = this.searchRoute.bind(this);
    this.findUserAddress = this.findUserAddress.bind(this);
  }

  setFormField(field, value) {
    const { setFormField } = this.props.actions;

    setFormField(SEARCH_ROUTE, field, value);
  }

  searchRoute() {
    const { from, to } = this.props;
    const { searchRoute, formSubmitFailed } = this.props.actions;

    const errors = validateSearchRouteForm({ from, to });
    if (isEmpty(errors)) {
      searchRoute({ from, to });
    } else {
      formSubmitFailed(SEARCH_ROUTE, errors);
    }
  }

  findUserAddress(field) {
    const { findUserAddress } = this.props.actions;

    findUserAddress(SEARCH_ROUTE, field);
  }

  render() {
    const { from, to, routes, errors, actions, routeInfo } = this.props;

    return (
      <SearchRoute
        from={from}
        to={to}
        routes={routes}
        errors={errors}
        routeInfo={routeInfo}
        actions={actions}
        findUserAddress={this.findUserAddress}
        searchRoute={this.searchRoute}
        setFormField={this.setFormField}
      />
    );
  }
}

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

SearchRouteContainer.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  errors: PropTypes.shape().isRequired,
  routeInfo: PropTypes.shape().isRequired,
  actions: PropTypes.shape({
    setFormField: PropTypes.func.isRequired,
    findUserAddress: PropTypes.func.isRequired,
    searchRoute: PropTypes.func.isRequired,
    formSubmitFailed: PropTypes.func.isRequired,
    getRouteInfo: PropTypes.func.isRequired,
    clearRouteInfo: PropTypes.func.isRequired,
    getRouteGeoData: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchRouteContainer);
