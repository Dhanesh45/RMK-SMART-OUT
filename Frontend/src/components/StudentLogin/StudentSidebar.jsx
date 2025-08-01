import { BiBarChartSquare, BiSolidUserDetail } from "react-icons/bi";
import { MdSpaceDashboard, MdOutlineAppRegistration } from "react-icons/md";
import { FaWalking } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { FaClipboardList } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";


const StudentSidebar = ({setActivePage}) => {

 
  const sidebarContents = [
    {
      icon: <MdSpaceDashboard />,
      name: "DASHBOARD",
    },
    {
      icon: <FaWalking />, // Walking person icon for General Outpass
      name: "OUT PASS FORM",
    },
  ];

  const [click, setClick] = useState(false);

  return (
    <div
      style={{
        width: "15%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "0% 15px 15px 0%",
        backgroundColor: "white",
      }}
    >
      <div>
        <div className="flex justify-center items-center w-[100%]">
          <h3
            style={{
              padding: "5% 0% 10% 0%",
              fontWeight: "bold",
              fontSize: "22px",
              textAlign: "center",
            }}
          >
            STUDENT
          </h3>
        </div>
        <ul>
          {sidebarContents.map((content, index) => (
            <li
              key={index}
              className="flex gap-[3%] list-none p-[5%] hover:bg-[#0E4947] hover:text-white rounded-lg cursor-pointer"
              onClick={()=>setActivePage(content.name)}
            >
              <span className="pt-[0%] text-xl font-bold">{content.icon}</span>
              <span className="text-l font-bold">{content.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div>
        <button style={{margin:"0% 10% 0% 10% ",width:"80%",border:"none",backgroundColor:"rgba(14, 73, 71, 1)",color:"white",borderRadius:"20px",fontSize:'15px',fontWeight:"bold",padding:'2%',display:"flex",justifyContent:"center",alignItems:"center"}}>
            Help
        </button>
        <div style={{padding:"5% 0% 0% 0%",display:'flex',gap:"4px",alignItems:"center",justifyContent:"center"}}>
          <button className="flex items-center gap-2 px-4 py-2   text-black rounded hover:bg-[rgba(14,73,71,1)] hover:text-white ">
            <img src="/assets/icons/logout.svg" alt="Logout Icon" className="w-5 h-5" />
            <span>STUDENT</span>
            </button>
        </div>
        <button style={{margin:"4% 10% 10% 10%",width:"80%",border:"none",backgroundColor:"rgba(14, 73, 71, 1)",color:"white",borderRadius:"20px",fontSize:'15px',fontWeight:"bold",padding:'2%',display:"flex",gap:"10px",justifyContent:"center",alignItems:"center"}}>
          <IoIosLogOut />
          LOGOUT
        </button>
      </div>
    </div>
    </div>
  );
};

export default StudentSidebar;
