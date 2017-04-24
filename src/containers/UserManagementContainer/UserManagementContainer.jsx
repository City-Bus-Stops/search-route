import { connect } from 'react-redux';

import UserManagement from '../../components/UserManagement/UserManagement';

const mapStateToProps = (state, ownProps) => ({
  children: ownProps.children,
  location: ownProps.location,
  notifications: state.notifications,
});

export default connect(mapStateToProps, null)(UserManagement);
