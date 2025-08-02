import React from 'react'
import HomePage from "./components/LandingPage/HomePage"
import StudentLoginPage from './components/StudentLogin/StudentLoginPage'
import StudentDashboard from './components/StudentLogin/StudentDashboard'
import FacultyLoginPage from './components/FacultyLogin/FacultyLoginPage'
import FacultyDashboardPage from './components/FacultyLogin/FacultyDashboard/FacultyDashboardPage'
import FacultyApprovalList from './components/FacultyLogin/FacultyApprovalList'
import StudentProfile from './components/StudentLogin/ProfilePage/StudentProfile'
import Learn from './components/StudentLogin/ProfilePage/Learn'

const App = () => {
  return (
    <div>
      {/* <HomePage /> */}
      {/* <StudentLoginPage /> */}
     {/* <StudentDashboard /> */}
      {/* <FacultyLoginPage /> */}
      {/* <FacultyDashboardPage /> */}
      {/* <FacultyApprovalList /> */}
      {/*<Learn /> */}
      <StudentProfile />
    </div>
  )
}

export default App