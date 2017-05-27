import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { logout } from '../../actions/actions';

import Root from '../../components/Root/Root';

const mapStateToProps = (state, ownProps) => ({
  children: ownProps.children,
  location: ownProps.location,
  notifications: state.notifications,
  IsSpinnerActive: state.spinner,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    logout,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
