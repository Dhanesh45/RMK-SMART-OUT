import React, { useState } from 'react';
import FacultyDashboardPage from './FacultyDashboard/FacultyDashboardPage';
import FacultyApprovalList from './FacultyApprovalList';
import FacultySidebar from './FacultySidebar';

const FacDash = () => {
  const [activePage, setActivePage] = useState('DASHBOARD'); // default page

  const renderContent = () => {
    switch (activePage) {
      case 'DASHBOARD':
        return <FacultyDashboardPage />;
      case 'APPROVAL LIST':
        return <FacultyApprovalList />;
      default:
        return <FacultyDashboardPage />;
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <FacultySidebar setActivePage={setActivePage}/>
        {renderContent()}
    </div>
  );
};

export default FacDash;
