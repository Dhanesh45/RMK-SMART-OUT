import dashphoto from "../../assets/StudentLoginImages/dhashimg1.jpg";
import profilephoto from "../../assets/StudentLoginImages/dashimg3.webp";
import rmklogo from "../../assets/LandingPageImages/rmklogo.png";
import StudentSidebar from "./StudentSidebar";
import "./StudentDashboard.css";
import { IoIosLogOut } from "react-icons/io";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [isApprovedActive, setIsApprovedActive] = useState(false);
  const [isPendingActive, setIsPendingActive] = useState(false);
  const [isRejectedActive, setIsRejectedActive] = useState(false);
  return (
    <div className="flex">
      <StudentSidebar />
      <div style={{ width: "85%", height: "100vh" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img
            src={rmklogo}
            alt="logo"
            style={{ width: "9%", height: "9%", padding: "0.5%" }}
          />
          <h1
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              color: "#004d40",
              padding: "1% 1%",
            }}
          >
            INFORMATION TECHNOLOGY
          </h1>
        </div>
        {/*Profile Card */}
        <div
          style={{
            width: "100%",
            height: "50%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "94%",
              height: "100%",
              backgroundColor: "white",
              borderRadius: "20px",
              position: "relative",
            }}
          >
            <div style={{ width: "100%", height: "45%" }}>
              <img
                src={dashphoto}
                alt="dash"
                style={{ width: "100%", height: "100%", borderRadius: "20px" }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                width: "10%",
                height: "35%",
                top: "20%",
                left: "10%",
              }}
            >
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
            <div
              style={{ width: "100%", height: "50%", padding: "5% 0% 0% 8%" }}
            >
              <h1
                style={{
                  paddingBottom: "0.85%",
                  fontSize: "25px",
                  fontWeight: "550",
                }}
              >
                STUDENT NAME
              </h1>
              <p
                style={{
                  paddingBottom: "0.95%",
                  fontSize: "15px",
                  color: "gray",
                }}
              >
                student@gmail.com
              </p>
              <b>
                <p style={{ paddingBottom: "0.5%", fontSize: "15px" }}>
                  Number of Students: 125 | Degree : B.Tech - Information
                  Technology | College : R.M.K. Group of Institutions
                </p>
              </b>
            </div>
          </div>
        </div>
        {/* Historical Overview + Status - Matches Profile Card Height */}
        <div
          style={{
            width: "100%",
            height: "38%",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            marginTop: "1%",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              width: "94%",
              height: "100%",
              display: "flex",
              gap: "1%",
              boxSizing: "border-box",
            }}
          >
            {/* Historical Overview */}
            <div
              style={{
                width: "65%",
                height: "100%",
                backgroundColor: "white",
                borderRadius: "20px",
                padding: "2%",
                overflowY: "auto",
                boxSizing: "border-box",
              }}
            >
              <h3
                style={{
                  fontWeight: "600",
                  fontSize: "18px",
                  marginBottom: "10px",
                }}
              >
                HISTORICAL OVERVIEW
              </h3>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <thead style={{ backgroundColor: "#f0f0f0" }}>
                  <tr style={{ textAlign: "left" }}>
                    <th style={{ padding: "12px" }}>S.NO</th>
                    <th style={{ padding: "12px" }}>REASON</th>
                    <th style={{ padding: "12px" }}>FROM DATE</th>
                    <th style={{ padding: "12px" }}>TO DATE</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3].map((num) => (
                    <tr key={num} style={{ borderBottom: "1px solid #ddd" }}>
                      <td style={{ padding: "12px" }}>{num}.</td>
                      <td style={{ padding: "12px" }}>DEEPAVALI</td>
                      <td style={{ padding: "12px" }}>01/08/2025</td>
                      <td style={{ padding: "12px" }}>01/08/2025</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Status Box */}
            <div
              style={{
                width: "40%",
                height: "100%",
                backgroundColor: "white",
                borderRadius: "20px",
                padding: "2%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                boxSizing: "border-box",
                overflowY: "auto",
              }}
            >
              <h3
                style={{
                  fontWeight: "600",
                  fontSize: "18px",
                  marginBottom: "10px",
                }}
              >
                STATUS
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div
                  className="status-box"
                  style={{
                    backgroundColor: isApprovedActive
                      ? "rgba(58, 133, 130, 1)"
                      : "#F5F5F5",
                    color: isApprovedActive ? "white" : "black",
                  }}
                  onClick={() => setIsApprovedActive((prev) => !prev)}
                >
                  APPROVED
                </div>
                <div
                  className="status-box"
                  style={{
                    backgroundColor: isPendingActive
                      ? "rgba(244, 239, 91, 1)"
                      : "#F5F5F5",
                    color: isPendingActive ? "white" : "black",
                  }}
                  onClick={() => setIsPendingActive((prev) => !prev)}
                >
                  PENDING
                </div>
                <div
                  className="status-box"
                  style={{
                    backgroundColor: isRejectedActive
                      ? "rgba(242, 101, 104, 1)"
                      : "#F5F5F5",
                    color: isRejectedActive ? "white" : "black",
                  }}
                  onClick={() => setIsRejectedActive((prev) => !prev)}
                >
                  REJECTED
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
