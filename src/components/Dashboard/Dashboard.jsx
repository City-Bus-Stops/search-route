import React from 'react';

import StartPage from '../StartPage/StartPage';
import InfoPanel from '../InfoPanel/InfoPanel';
import TechnologiesPanel from '../TechnologiesPanel/TechnologiesPanel';
import Footer from '../Footer/Footer';

const Dashboard = () => (
  <div>
    <StartPage />
    <InfoPanel />
    <TechnologiesPanel />
    <Footer />
  </div>
);

export default Dashboard;
