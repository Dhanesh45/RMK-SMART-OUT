import React, { useState } from 'react'
import StudentSidebar from './StudentSidebar'
import StudentDashboard from './studentDash/StudentDashboard'
import ApplicationForm from './ApplicationForm'

const StudDash = () => {
    const [activePage,setActivePage]=useState("DASHBOARD")

    const renContent=()=>{
        switch(activePage){
            case "DASHBOARD":
                return <StudentDashboard />
            case "OUT PASS FORM":
                return <ApplicationForm />
            default:
                return <StudentDashboard />
        }
    }

  return (
    <div className='flex'>
        <StudentSidebar setActivePage={setActivePage}/>
        {renContent()}
    </div>
  )
}

export default StudDash