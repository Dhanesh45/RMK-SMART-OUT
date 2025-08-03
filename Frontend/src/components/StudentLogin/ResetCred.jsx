import { useState } from "react"
import loginimg from "../../assets/StudentLoginImages/loginimg.jpg"
import {useNavigate} from "react-router-dom"

const ResetCred= () => {  
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
    return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundImage: 'linear-gradient(to right, rgba(27, 180, 109, 1), rgba(11, 78, 47, 1)'}}>
      <div style={{ width: "92%", height: "88%", backgroundColor: "white", borderRadius: "30px", boxShadow: "2px 2px 40px  rgba(0, 0, 0, 0.9 )", display: "flex", overflow: "hidden" }}>
        
        {/* image part */}
        <div style={{ width: "50%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", borderRight: "1px solid rgba(14,73,71,1) " }}>
          <img src={loginimg} alt="LoginImage" style={{ width: "87%", height: "85%" }} />
        </div>

        {/* Form part */}
        <div className="form-scroll" style={{ width: "50%", height: "100%", padding: "2% 0%", overflowY: "auto" }}>
          <h1 style={{ textAlign: "center", fontWeight: "800", fontSize: "40px", color: "rgba(14, 73, 71, 1)", paddingBottom: "3%" }}>RESET CREDENTIALS</h1>
          <p style={{ textAlign: "center", fontSize: "20px", paddingBottom: "1%", fontWeight: "600", color: "rgba(17,73,71,1)" }}>Use this form to Reset your Password</p>

          {/* input feilds */}
          <div style={{ padding: "3% 5% 5% 5%" }}>
            <div style={{ paddingBottom: "4%" }}>
              <p style={{ fontSize: "20px", fontWeight: "600", paddingBottom: "0.8%", color: "rgba(14, 73, 71, 1)" }}>ROLL.NO</p>
              <input type="number" style={{ width: "97%", padding: "1.25%", borderRadius: "5px", border: "1px solid rgba(14, 73, 71, 1)", fontSize: "20px", fontWeight: "500" }} />
            </div>
            <div style={{ paddingBottom: "4%" }}>
              <p style={{ fontSize: "20px", fontWeight: "600", paddingBottom: "0.8%", color: "rgba(14, 73, 71, 1)" }}>ENTER NEW PASSWORD</p>
              <input type={isChecked ? "text" : "password"} style={{ width: "97%", padding: "1.25%", borderRadius: "5px", border: "1px solid rgba(14, 73, 71, 1)", fontSize: "20px", fontWeight: "500" }} placeholder="Enter a strong password..."/>
            </div>
            <div style={{ paddingBottom: "1%" }}>
              <p style={{ fontSize: "20px", fontWeight: "600", paddingBottom: "0.8%", color: "rgba(14, 73, 71, 1)" }}>CONFIRM NEW PASSWORD</p>
              <input type={isChecked ? "text" : "password"} style={{ width: "97%", padding: "1.25%", borderRadius: "5px", border: "1px solid rgba(14, 73, 71, 1)", fontSize: "20px", fontWeight: "500" }} placeholder="Re-type the password..." />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "5%" }}>
              <label style={{ display: "flex", alignItems: "center", cursor: "pointer", userSelect: "none" }}>
                <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} style={{ display: "none" }} />
                <span style={{ width: "24px", height: "24px", display: "inline-block", borderRadius: "4px", backgroundColor: isChecked ? "rgba(17,73,71,1)" : "#fff", border: "2px solid rgba(17,73,71,1)", position: "relative", transition: "all 0.2s ease-in-out" }}>
                  {isChecked && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                      style={{ width: "16px", height: "16px", position: "absolute", top: "2px", left: "4px" }}
                    >
                    <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </span>
                <p style={{ fontWeight: "650", paddingLeft: "10px", color: "rgba(17,73,71,1)", marginBottom: "0" }}>
                  SHOW PASSWORD
                </p>
              </label>
              
            </div>

            <div style={{ textAlign: "center" }}>
              <button style={{ padding: "2% 30%", borderRadius: "30px", fontSize: "20px", fontWeight: "600", color: "white", backgroundColor: "rgba(17,73,71,17)" }} >
                VERIFY NOW
              </button>
              <div style={{display:"flex", justifyContent:"center", padding:"1.5%"}}>
              <p style={{ color: "rgba(30, 30, 30, 0.41)", fontWeight: "600" }}>Otherwsie?  </p><a href=" " style={{color: " rgba(27, 180, 109, 1) " , fontWeight:"600"}}>Login</a>
            </div>
            </div>
          </div>
        </div>
      </div>
      <style>
    {`
      .form-scroll::-webkit-scrollbar {
        width:8px;
      }

      .form-scroll::-webkit-scrollbar-track {
        background: #f0f0f0;
      }

      .form-scroll::-webkit-scrollbar-thumb {
        background-color: rgba(17, 73, 71, 0.6);
        border-radius: 10px;
      }

      .form-scroll::-webkit-scrollbar-thumb:hover {
        background-color: rgba(17, 73, 71, 1);
      }
    `}
    </style>
</div>

  )
}

export default ResetCred;