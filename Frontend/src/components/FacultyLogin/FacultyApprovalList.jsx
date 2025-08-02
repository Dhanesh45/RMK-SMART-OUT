import rmklogo from "../../assets/LandingPageImages/rmklogo.png"
import FacultySidebar from "./FacultySidebar"

const FacultyApprovalList = () => {
    const students=[
        {sno:1,regno:111723203001,name:"Akash",},
        {sno:2,regno:111723203002,name:"Abishek",},
        {sno:3,regno:111723203003,name:"Abinaya",},
        {sno:4,regno:111723203004,name:"Adithya Baba",},
        {sno:5,regno:111723203005,name:"Agila",},
        {sno:6,regno:111723203006,name:"Ajith Kumar",},
        {sno:7,regno:111723203007,name:"Anandhi",},
        {sno:8,regno:111723203008,name:"Anusuya",},
        {sno:9,regno:111723203009,name:"Arul Jothie",},
        {sno:10,regno:111723203010,name:"Bhavadharani",},
        {sno:11,regno:111723203011,name:"Bhuvaneswari K",},
        {sno:12,regno:111723203012,name:"Bhuvaneshwari S",},
        {sno:13,regno:111723203013,name:"Shruthi",},
        {sno:14,regno:111723203014,name:"Chendraya Saravanan",},
        {sno:15,regno:111723203015,name:"Vinishiya",},
        {sno:16,regno:111723203016,name:"Deepakraj",},
        {sno:17,regno:111723203017,name:"Deepika",},
        {sno:18,regno:111723203018,name:"Dega Dhanush",},
        {sno:19,regno:111723203019,name:"Deivanai",},
        {sno:20,regno:111723203020,name:"Devasri",},
        {sno:21,regno:111723203021,name:"Dhanesh",},
        {sno:22,regno:111723203022,name:"Dhanraj",},
        {sno:23,regno:111723203023,name:"Dharshini",},
        {sno:24,regno:111723203024,name:"Dhinesh",},
        {sno:25,regno:111723203025,name:"Divyadharshini",},
        {sno:26,regno:111723203026,name:"Ganesan",},
        {sno:27,regno:111723203027,name:"Ganga",},
        {sno:28,regno:111723203028,name:"Gnanesh",},
        {sno:29,regno:111723203029,name:"Gokul",},
        {sno:30,regno:111723203030,name:"Gowtham",},
        {sno:31,regno:111723203031,name:"Gracelin",},
        {sno:32,regno:111723203032,name:"Harini",},
        {sno:33,regno:111723203033,name:"Harirajan",},
        {sno:34,regno:111723203034,name:"Harish",},
        {sno:35,regno:111723203035,name:"Harishta",},
        {sno:36,regno:111723203036,name:"Harry Joel",},
        {sno:37,regno:111723203037,name:"Hemanth Kumar",},
        {sno:38,regno:111723203038,name:"Jagadish",},
        {sno:39,regno:111723203039,name:"Jaishree",},
        {sno:40,regno:111723203040,name:"Jaisurya",},
        {sno:41,regno:111723203121,name:"Ragul",},
        {sno:42,regno:111723203124,name:"Manoj",}   
      ]

  return (  
        <div className="flex">
           <FacultySidebar /> 
            <div style={{width:"85%",height:"100vh",backgroundColor:"rgba(238, 238, 238, 0.5)"}}>
            <div style={{display:"flex",justifyContent:"space-between",}}>
                <img src={rmklogo} width="9%" height="9%" style={{padding:"0.5%",}}/>
                <h1 style={{color:"rgba(14, 73, 71, 1)",fontSize:"15px",fontWeight:"bolder",padding:"1.5% 0% 0% 0%",}}>INFORMATION TECHNOLOGY</h1>
            </div>
            <div>
                 <h1 style={{color:"rgba(14, 73, 71, 1)",fontSize:"20px",fontWeight:"bolder",textAlign:"center",}}>STUDENT APPROVAL LIST</h1>
                <div style={{ width: "100%", height: "100%", textAlign: "center" }}>
                    <div style={{ backgroundColor: "rgba(217, 217, 217, 1)", width: "90%",height:"73vh",overflowY:"auto", margin: "1% auto" ,border:"8px solid rgba(217, 217, 217,1)",borderRadius:"10px"}}>
                        <table style={{ borderCollapse: "collapse", width: "100%" ,borderRadius:"20px"}}>
                        <thead>
                        <tr style={{borderBottom:"8px solid rgba(217, 217, 217, 1)"}}>
                            <th style={{position: 'sticky',top: 0,backgroundColor: 'white', zIndex: 1,padding: '0.75%'}}>
                                S.NO
                            </th>
                            <th style={{position: 'sticky',top: 0,backgroundColor: 'white',zIndex: 1,padding: '0.75%'}}>
                                NAME
                            </th>
                            <th style={{position: 'sticky',top: 0,backgroundColor: 'white',zIndex: 1,padding: '0.75%'}}>
                                REGISTER NUMBER
                            </th>
                            <th style={{position: 'sticky',top: 0,backgroundColor: 'white',zIndex: 1,padding: '0.75%'}}>
                                REMARK
                            </th>
                            <th style={{position: 'sticky',top: 0,backgroundColor: 'white',zIndex: 1,padding: '0.75%'}}>
                                VALIDATION
                            </th>
                        </tr>
                        </thead>

                        <tbody>
                            {students.map((student) => (
                            <tr style={{backgroundColor:"white",margin:"10%",borderBottom:"8px solid rgba(217, 217, 217, 1)",borderRadius:"10px"}} key={student.sno}>
                                <td style={{ padding: "10px",textAlign:"center"}}>{student.sno}</td>
                                <td style={{ padding: "10px",textAlign:"center"}}>{student.name}</td>
                                <td style={{ padding: "10px",textAlign:"center"}}>{student.regno}</td>
                                <td style={{ padding: "10px",textAlign:"center" }}>
                                <   input style={{ padding: "5px", width: "90%",border:"1px solid black",textAlign:"center" }} placeholder="Enter remark" />
                                </td>

                                <td style={{ padding: "10px",textAlign:"center"}}>
                                    <button style={{fontWeight:"bold",padding:"2%",color:"white",backgroundColor:"rgba(14, 73, 71, 1)",border:"none",borderRadius:"5px",margin:"0% 5% 0% 0%"}}>APPROVE</button>
                                    <button style={{fontWeight:"bold",padding:"2%",color:"white",backgroundColor:"rgba(197, 9, 12, 1)",border:"none",borderRadius:"5px"}}>REJECT</button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                    </div>
            </div>
            <div style={{width:"100%",display:"flex",justifyContent:"space-between",padding:"0.7% 5% 0% 5%"}}>
                <button style={{padding:"1% 3%",backgroundColor:"rgba(197, 9, 12, 1)",color:"white",fontWeight:"bold",fontSize:"14px",borderRadius:"25px"}}>REJECT ALL</button>
                <button style={{padding:"1% 3%",backgroundColor:"rgba(14, 73, 71, 1)",color:"white",fontWeight:"bold",fontSize:"14px",borderRadius:"25px"}}>APPROVE ALL</button>
            </div>
        </div>
        </div>
    
  )
}

export default FacultyApprovalList