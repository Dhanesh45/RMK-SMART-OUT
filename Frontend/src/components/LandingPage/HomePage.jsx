import LandingPagebg from "../../assets/LandingPageImages/landbg.jpg"
import rmklogo from "../../assets/LandingPageImages/rmklogo.png"

const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${LandingPagebg})`,
        backgroundSize: "cover",       
        height: "100vh",
        width: "100vw",
        margin:0,padding:0,display:'flex',justifyContent:"center",alignItems:"center"
      }}
    >
      <div style={{width:"90%",height:"80vh",backgroundColor:" rgba(255, 255, 255, 0.5)",}}>
        
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <img src={rmklogo} width="15%" style={{padding:"1%"}}/>
            <h1 style={{color:"rgba(14, 73, 71, 1)",fontSize:"30px",fontWeight:"bolder",padding:"2%"}}>INFORMATION TECHNOLOGY</h1>
          </div>
          <div style={{textAlign:"center"}}>
            <p style={{fontSize:"20px",fontWeight:"bold",padding:"5%"}}>Our web application is a smart solution designed to streamline the process of outpass requests and attendance management for educational institutions. With a secure login system for students and staff, the platform enables students to request outpasses digitally, while faculty can review, approve, or reject them with ease. It also offers real-time attendance tracking, automated records, and insightful reports — reducing manual paperwork and improving overall efficiency.</p>
            
          </div>
        </div>
      
    </div>
  );
};

export default HomePage;