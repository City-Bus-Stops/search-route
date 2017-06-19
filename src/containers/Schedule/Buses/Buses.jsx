import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Buses from '../../../components/Schedule/Buses/Buses';

import {
  loadBuses,
} from '../../../actions/actions';

class BusesContainer extends Component {
  componentDidMount() {
    const { loadBuses } = this.props.actions;
    loadBuses();
  }

  render() {
    const { buses } = this.props;

    return (
      <Buses
        buses={buses}
      />
    );
  }
}

const mapStateToProps = state => ({
  buses: state.schedule.buses,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    loadBuses,
  }, dispatch),
});

BusesContainer.propTypes = {
  buses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  actions: PropTypes.shape({
    loadBuses: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BusesContainer);
