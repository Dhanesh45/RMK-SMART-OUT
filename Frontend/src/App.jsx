import React from 'react'
import HomePage from "./components/LandingPage/HomePage"
import StudentLoginPage from './components/StudentLogin/StudentLoginPage'
import StudentDashboard from './components/StudentLogin/StudentDashboard'
import FacultyLoginPage from './components/FacultyLogin/FacultyLoginPage'
import FacultyDashboardPage from './components/FacultyLogin/FacultyDashboard/FacultyDashboardPage'
import FacultyApprovalList from './components/FacultyLogin/FacultyApprovalList'
import ResetCred from './components/StudentLogin/resetcred'

const App = () => {
  return (
    <div>
      {/* <HomePage /> */}
       {/* <StudentLoginPage />  */}
     { /*<StudentDashboard /> */}
      {/* <FacultyLoginPage /> */}
      {/* <FacultyDashboardPage /> */}
      {/* <FacultyApprovalList /> */}
      <ResetCred/>
    </div>
  )
}

export default App