import React from 'react'
import HomePage from "./components/LandingPage/HomePage"
import StudentLoginPage from './components/StudentLogin/StudentLoginPage'
import StudentDashboard from './components/StudentLogin/StudentDashboard'
import FacultyLoginPage from './components/FacultyLogin/FacultyLoginPage'
import FacultyDashboardPage from './components/FacultyLogin/FacultyDashboard/FacultyDashboardPage'
import FacultyApprovalList from './components/FacultyLogin/FacultyApprovalList'
import RegistrationPage from './components/StudentLogin/Registerpg/RegistrationPage'

const App = () => {
  return (
    <div>
      {/* <HomePage /> */}
      {/* <StudentLoginPage /> */}
      {/* <StudentDashboard /> */}
      {/* <FacultyLoginPage /> */}
      {/* <FacultyDashboardPage /> */}
      {/* <FacultyApprovalList /> */}
      <RegistrationPage/>
    </div>
  )
}

export default App