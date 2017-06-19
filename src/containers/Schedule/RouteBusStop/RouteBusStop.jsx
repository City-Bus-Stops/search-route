import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RouteBusStop from '../../../components/Schedule/RouteBusStop/RouteBusStop';

import {
  loadRouteBusStopSchedule,
} from '../../../actions/actions';

class RouteBusStopContainer extends Component {
  componentDidMount() {
    const { id, busStopId } = this.props.params;
    const { loadRouteBusStopSchedule } = this.props.actions;
    loadRouteBusStopSchedule(id, busStopId);
  }

  render() {
    const { data } = this.props;

    return (
      <RouteBusStop
        data={data}
      />
    );
  }
}

const mapStateToProps = state => ({
  data: state.schedule.routeBusStop,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    loadRouteBusStopSchedule,
  }, dispatch),
});

RouteBusStopContainer.propTypes = {
  data: PropTypes.shape().isRequired,
  actions: PropTypes.shape({
    loadRouteBusStopSchedule: PropTypes.func.isRequired,
  }).isRequired,
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
    busStopId: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteBusStopContainer);
