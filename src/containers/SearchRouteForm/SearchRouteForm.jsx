import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isEmpty } from 'lodash';
import { reduxForm } from 'redux-form';

import { validateSearchRouteForm } from '../../validation';

import SearchRouteForm from '../../components/SearchRouteForm/SearchRouteForm';

import {
  findUserAddress,
  searchRoute,
} from '../../actions/actions';

export const SEARCH_ROUTE = 'searchRoute';

class SearchRouteFormContainer extends Component {
  validateAndSearchRoute = (values) => {
    const { searchRoute } = this.props.actions;

    const errors = validateSearchRouteForm(values);
    if (isEmpty(errors)) {
      searchRoute(values, SEARCH_ROUTE);
    }
  };

  render() {
    const { handleSubmit } = this.props;
    const { findUserAddress } = this.props.actions;

    return (
      <SearchRouteForm
        searchRoute={this.validateAndSearchRoute}
        findUserAddress={findUserAddress}
        handleSubmit={handleSubmit}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    findUserAddress,
    searchRoute,
  }, dispatch),
});

SearchRouteFormContainer.propTypes = {
  actions: PropTypes.shape({
    findUserAddress: PropTypes.func.isRequired,
    searchRoute: PropTypes.func.isRequired,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const formConfig = {
  form: SEARCH_ROUTE,
  enableReinitialize: true,
  validate: validateSearchRouteForm,
};

export default connect(null, mapDispatchToProps)(reduxForm(formConfig)(SearchRouteFormContainer));
