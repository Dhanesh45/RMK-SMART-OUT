import React, { useState } from 'react';
import StudentSidebar from './StudentSidebar'; // adjust path
import Dashboard from './Dashboard'; // your actual component
import OutpassForm from './OutpassForm'; // your actual component
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
      <div style={{ width: '85%', padding: '20px' }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default FacDash;
