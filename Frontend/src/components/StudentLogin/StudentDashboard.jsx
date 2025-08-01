import dashphoto from '../../assets/StudentLoginImages/dhashimg1.jpg';
import profilephoto from '../../assets/StudentLoginImages/dashimg3.webp';
import rmklogo from "../../assets/LandingPageImages/rmklogo.png";
import StudentSidebar from './StudentSidebar';

const StudentDashboard = () => {
  return (
    <div className='flex'>
      <StudentSidebar />  
      <div style={{ width: "85%", height: "100vh" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <img src={rmklogo} alt="logo" style={{ width: "9%", height: "9%", padding: "0.5%" }} />
          <h1 style={{ fontSize: "15px", fontWeight: "bold", color: "#004d40", padding: "1% 0%" }}>INFORMATION TECHNOLOGY</h1>
        </div>

        <div style={{ width: "100%", height: "50%", display: "flex", justifyContent: "center" }}>
          <div style={{ width: "94%", height: "100%", backgroundColor: "white", borderRadius: "20px", position: "relative" }}>
            <div style={{ width: "100%", height: "45%" }}>
              <img src={dashphoto} alt="dash" style={{ width: "100%", height: "100%", borderRadius: "20px" }} />
            </div>
            <div style={{ position: "absolute", width: "10%", height: "35%", top: "20%", left: "10%" }}>
              <img
                src={profilephoto}
                alt="profile"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  border: "10px solid white",
                  objectFit: "cover",
                }}
              />
            </div>
            <div style={{ width: "100%", height: "50%", padding: "5% 0% 0% 8%" }}>
              <h1 style={{ paddingBottom: "0.85%", fontSize: "25px", fontWeight: "550" }}>STUDENT NAME</h1>
              <p style={{ paddingBottom: "0.95%", fontSize: "15px", color: "gray" }}>student@gmail.com</p>
              <b>
                <p style={{ paddingBottom: "0.5%", fontSize: "15px" }}>
                  Number of Students: 125 | Degree : B.Tech - Information Technology | College : R.M.K. Group of Institutions
                </p>
              </b>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default StudentDashboard;
