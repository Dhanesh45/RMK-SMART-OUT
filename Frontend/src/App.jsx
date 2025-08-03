import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./components/LandingPage/HomePage";
import StudentLoginPage from './components/StudentLogin/StudentLoginPage';
import StudentDashboard from './components/StudentLogin/StudentDashboard';
import FacultyLoginPage from './components/FacultyLogin/FacultyLoginPage';
import FacultyDashboardPage from './components/FacultyLogin/FacultyDashboard/FacultyDashboardPage';
import FacultyApprovalList from './components/FacultyLogin/FacultyApprovalList';
import ViewForm from './components/FacultyLogin/ViewForm';
import RegistrationPage from './components/StudentLogin/Registerpg/RegistrationPage';
import StudentProfile from './components/StudentLogin/ProfilePage/StudentProfile';
import Learn from './components/StudentLogin/ProfilePage/Learn';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student-login" element={<StudentLoginPage />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/faculty-login" element={<FacultyLoginPage />} />
        <Route path="/faculty-dashboard" element={<FacultyDashboardPage />} />
        <Route path="/faculty-approvals" element={<FacultyApprovalList />} />
        <Route path="/view-form/:regno" element={<ViewForm />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/student-profile" element={<StudentProfile />} />
        <Route path="/learn" element={<Learn />} />
      </Routes>
    </Router>
  );
};

export default App;
