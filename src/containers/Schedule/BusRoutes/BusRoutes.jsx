import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BusRoutes from '../../../components/Schedule/BusRoutes/BusRoutes';

import {
  loadBusRoutes,
} from '../../../actions/actions';

class BusRoutesContainer extends Component {
  componentDidMount() {
    const { id } = this.props.params;
    const { loadBusRoutes } = this.props.actions;
    loadBusRoutes(id);
  }

  render() {
    const { data } = this.props;

    return (
      <BusRoutes
        data={data}
      />
    );
  }
}

const mapStateToProps = state => ({
  data: state.schedule.busRoutes,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    loadBusRoutes,
  }, dispatch),
});

BusRoutesContainer.propTypes = {
  data: PropTypes.shape().isRequired,
  actions: PropTypes.shape({
    loadBusRoutes: PropTypes.func.isRequired,
  }).isRequired,
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BusRoutesContainer);
