import { useState } from "react";
import loginimg from "../../assets/StudentLoginImages/loginimg.jpg";
import { useNavigate } from 'react-router-dom'

const FacultyLoginPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [role, setRole] = useState(""); // 👈 New state for role
  const navigate = useNavigate();

  return (
    <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundImage: 'linear-gradient(to right, rgba(27, 180, 109, 1), rgba(11, 78, 47, 1))' }}>
      <div style={{ width: "92%", height: "88%", backgroundColor: "white", borderRadius: "30px", boxShadow: "2px 2px 40px  rgba(0, 0, 0, 0.9 )", display: "flex", overflow: "hidden" }}>
        
        {/* image part */}
        <div style={{ width: "50%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", borderRight: "1px solid rgba(14,73,71,1)" }}>
          <img src={loginimg} alt="LoginImage" style={{ width: "87%", height: "85%" }} />
        </div>

        {/* Form part */}
        <div className="form-scroll" style={{ width: "50%", height: "100%", padding: "2% 0%", overflowY: "auto" }}>
          <h1 style={{ textAlign: "center", fontWeight: "800", fontSize: "40px", color: "rgba(14, 73, 71, 1)", paddingBottom: "3%" }}>FACULTY LOGIN</h1>
          <p style={{ textAlign: "center", fontSize: "20px", paddingBottom: "1%", fontWeight: "600", color: "rgba(17,73,71,1)" }}>
            Welcome to faculty details Login to access your account
          </p>

          {/* input fields */}
          <div style={{ padding: "3% 5% 5% 5%" }}>

            {/* Email */}
            <div style={{ paddingBottom: "4%" }}>
              <p style={{ fontSize: "20px", fontWeight: "600", paddingBottom: "0.8%", color: "rgba(14, 73, 71, 1)" }}>EMAIL</p>
              <input type="email" style={{ width: "97%", padding: "1.25%", borderRadius: "5px", border: "1px solid rgba(14, 73, 71, 1)", fontSize: "20px", fontWeight: "500" }} />
            </div>

            {/* Role */}
            <div style={{ paddingBottom: "4%" }}>
              <p style={{ fontSize: "20px", fontWeight: "600", paddingBottom: "0.8%", color: "rgba(14, 73, 71, 1)" }}>ROLE</p>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                style={{ width: "100%", padding: "1.25%", borderRadius: "5px", border: "1px solid rgba(14, 73, 71, 1)", fontSize: "18px", fontWeight: "500" }}
              >
                <option value="">Select Role</option>
                <option value="Principal">Principal</option>
                <option value="Head of the Department">Head of the Department</option>
                <option value="Year Coordinator">Year Coordinator</option>
                <option value="Counsellor">Counsellor</option>
                <option value="Office Assistant">Office Assistant</option>
              </select>
            </div>

            {/* Password */}
            <div style={{ paddingBottom: "1%" }}>
              <p style={{ fontSize: "20px", fontWeight: "600", paddingBottom: "0.8%", color: "rgba(14, 73, 71, 1)" }}>PASSWORD</p>
              <input
                type={isChecked ? "text" : "password"}
                style={{ width: "97%", padding: "1.25%", borderRadius: "5px", border: "1px solid rgba(14, 73, 71, 1)", fontSize: "20px", fontWeight: "500" }}
              />
            </div>

            {/* Show password & forgot */}
            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "5%" }}>
              <label style={{ display: "flex", alignItems: "center", cursor: "pointer", userSelect: "none" }}>
                <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} style={{ display: "none" }} />
                <span style={{ width: "24px", height: "24px", display: "inline-block", borderRadius: "4px", backgroundColor: isChecked ? "rgba(17,73,71,1)" : "#fff", border: "2px solid rgba(17,73,71,1)", position: "relative", transition: "all 0.2s ease-in-out" }}>
                  {isChecked && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ width: "16px", height: "16px", position: "absolute", top: "2px", left: "4px" }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </span>
                <p style={{ fontWeight: "650", paddingLeft: "10px", color: "rgba(17,73,71,1)", marginBottom: "0" }}>
                  SHOW PASSWORD
                </p>
              </label>

              <a href="#" style={{ color: "rgba(82, 179, 134, 1)", fontWeight: "600" }} onClick={()=>navigate("/faculty-reset")}>Forget Password?</a>
            </div>

            {/* Login button */}
            <div style={{ textAlign: "center" }}>
              <button
                style={{ padding: "2% 30%", borderRadius: "30px", fontSize: "20px", fontWeight: "600", color: "white", backgroundColor: "rgba(17,73,71,1)" }}
                onClick={()=>navigate("/faculty-dashboard")}
              >
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .form-scroll::-webkit-scrollbar {
            width: 8px;
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
  );
};

export default FacultyLoginPage;
