import { MdSpaceDashboard ,MdOutlineAppRegistration } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import Profile from "../../assets/StudentLoginImages/profile.png"


const FacultySidebar = ({setActivePage}) => {

  const sidebarContents=[
    {icon:<MdSpaceDashboard/>,name:"DASHBOARD"},
    {icon:<MdOutlineAppRegistration/>,name:"APPROVAL LIST"},
    
  ]
 return (
    <div style={{width:"15%",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"0% 15px 15px 0%",backgroundColor:"white"}}>
      <div>
        <div className="flex justify-center items-center w-[100%] ">
        <h3 style={{padding:"5% 0% 10% 0%",fontWeight:"bold",fontSize:"22px",textAlign:"center"}}>FACULTY</h3>
        </div>
        <ul>
          {sidebarContents.map((content, index) => (
            <li
              key={index}
              className="group flex gap-[3%] list-none pt-[5%] pr-[0%] pb-[5%] pl-[10%] rounded cursor-pointer  hover:bg-[#0E4947] hover:text-[#ffffff] "
              onClick={() => setActivePage(content.name)}
            >
              <span className="pt-[1%] text-xl font-bold ">{content.icon}</span>
              <span className="text-l font-bold ">{content.name}</span>
            </li>
          ))}
        </ul>

      </div>
      <div>
        <button style={{margin:"0% 10% 5% 10% ",width:"80%",border:"none",backgroundColor:"rgba(14, 73, 71, 1)",color:"white",borderRadius:"20px",fontSize:'15px',fontWeight:"bold",padding:'2%',display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>
            Help
        </button>
       <div className="py-4 flex justify-center">
  <button
  className="group flex items-center rounded-[24px]"
  style={{
    width: '70%',          // 80% of parent width
    height: '8%',          // Adjust based on parent height
    padding: '1% 2%',      // vertical and horizontal padding
    gap: '4%',             // gap between image and text
    backgroundColor:"white",
    cursor:"pointer"
  }}
>
  <img
    src={Profile}
    alt="Faculty"
    className="rounded-full object-cover"
    style={{
      width: '20%',         // 20% of button width
      height: '100%',       // Full height of button
    }}
  />
  <span
    style={{
      fontSize: '90%',       // Font size relative to container
      fontWeight: '500',
    }}
  >
    Faculty Name
  </span>
</button>

</div>

        <button style={{margin:"4% 10% 10% 10%",width:"80%",border:"none",backgroundColor:"rgba(14, 73, 71, 1)",color:"white",borderRadius:"20px",fontSize:'15px',fontWeight:"bold",padding:'2%',display:"flex",gap:"10px",justifyContent:"center",alignItems:"center",cursor:"pointer"}}
        onClick={()=>navigate()}>
          <IoIosLogOut />
          LOGOUT
        </button>
      </div>
    </div>
  )
}

export default FacultySidebar