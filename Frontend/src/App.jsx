import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./components/LandingPage/HomePage";
import StudentLoginPage from './components/StudentLogin/StudentLoginPage';
import StudentDashboard from './components/StudentLogin/studentDash/StudentDashboard';
import FacultyLoginPage from './components/FacultyLogin/FacultyLoginPage';
import FacultyDashboardPage from './components/FacultyLogin/FacultyDashboard/FacultyDashboardPage';
import FacultyApprovalList from './components/FacultyLogin/FacultyApprovalList';
import ViewForm from './components/FacultyLogin/ViewForm';
import RegistrationPage from './components/StudentLogin/Registerpg/RegistrationPage';
import StudentProfile from './components/StudentLogin/ProfilePage/StudentProfile';
import ResetCred from './components/StudentLogin/ResetCred';
import FacultyResetCred from './components/FacultyLogin/FacultyResetCred';
import FacDash from './components/FacultyLogin/FacDash';
import StudDash from './components/StudentLogin/StudDash';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Student Login */}
        <Route path="/student-login" element={<StudentLoginPage />} />
        <Route path="/register" element={<RegistrationPage />} /> 
        <Route path="/student-profile" element={<StudentProfile />} />
        <Route path="/reset-pass" element={<ResetCred />}/>
        <Route path='/student-dashboard' element={<StudDash />} />

        {/* Faculty Login */}
        <Route path="/faculty-login" element={<FacultyLoginPage />} />
        <Route path="/faculty-approvals" element={<FacultyApprovalList />} />
        <Route path="/view-form/:regno" element={<ViewForm />} />
        <Route path="faculty-reset" element={<FacultyResetCred />}/>
        <Route path="/faculty-dashboard" element={<FacDash />}/>
      </Routes>
    </Router>
  );
};

export default App;
