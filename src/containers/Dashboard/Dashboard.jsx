import React, { Component } from 'react';

import AdminDashboard from '../../components/AdmimDashboard/AdmimDashboard';
import AdminDashboardHeader from '../../components/AdminDashboardHeader/AdminDashboardHeader';
import UserActivity from '../../components/UserActivity/UserActivity';

class DashboardContainer extends Component {
  componentDidMount() {
    /** TODO send request to load statistic **/
  }

  render() {
    return (
      <AdminDashboard>
        <AdminDashboardHeader />
        <UserActivity />
      </AdminDashboard>
    );
  }
}

export default DashboardContainer;
