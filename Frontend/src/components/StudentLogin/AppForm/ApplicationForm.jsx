import React from "react";
import Rmklogo from "../../../assets/LandingPageImages/rmklogo.png";
import StudentSidebar from "../StudentSidebar";

const ApplicationForm = () => {
  return (
    <div
      style={{
        width: "85%",
        height: "100vh",
        backgroundColor: "#EBEBEA",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img
          src={Rmklogo}
          alt="R.M.K Logo"
          style={{ width: "9%", height: "9%" }}
        />
        <header
          style={{
            paddingRight: "1%",
            fontSize: "17px",
            fontWeight: "bold",
            color: "#0E4947",
          }}
        >
          INFORMATION TECHNOLOGY
        </header>
      </div>

      <div
        style={{
          height: "90%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* form section */}
        <div
          style={{
            backgroundColor: "white",
            padding: "4%",
            borderRadius: "20px",
            maxWidth: "80%",
            margin: "0 auto",
            boxShadow: "0 5px 20px rgba(0, 0, 0, 0.08)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "2rem",
              color: "#003c2f",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            OUTPASS FORM
          </h2>

          <form
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
              alignItems: "center",
            }}
          >
            {/* Row 1 */}
            <div>
              <label style={labelStyle}>FROM DATE</label>
              <input type="date" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>TO DATE</label>
              <input type="date" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>NO OF DAYS</label>
              <input type="number" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>NATIVE</label>
              <input type="text" style={inputStyle} />
            </div>

            {/* Row 2 */}
            <div>
              <label style={labelStyle}>ROOM NO</label>
              <input type="text" style={inputStyle} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <label style={labelStyle}>
                <input type="radio" name="guardian" /> Parent
              </label>
              <label style={labelStyle}>
                <input type="radio" name="guardian" /> Guardian
              </label>
            </div>
            <div style={{ gridColumn: "span 2" }}>
              <label style={labelStyle}>REASON FOR LEAVE</label>
              <input type="text" style={inputStyle} />
            </div>

            {/* Row 3 */}
            <div style={{ gridColumn: "span 2" }}>
              <label style={labelStyle}>
                NAME OF THE ACCOMPANYING PERSON
              </label>
              <input type="text" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>LEAVING DATE</label>
              <input type="date" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>LEAVING TIME</label>
              <input type="time" style={inputStyle} />
            </div>

            {/* Row 4 */}
            <div style={{ gridColumn: "span 2" }}>
              <label style={labelStyle}>PARENT'S MOBILE NO</label>
              <input type="number" style={inputStyle} />
            </div>

            {/* Submit Button */}
            <div style={{ gridColumn: "span 2", textAlign: "right" }}>
              <button
                style={{
                  backgroundColor: "#004b3f",
                  color: "white",
                  padding: "0.6rem 2rem",
                  fontSize: "1.1rem",
                  border: "none",
                  borderRadius: "30px",
                  cursor: "pointer",
                }}
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Reusable inline styles
const labelStyle = {
  display: "block",
  fontSize: "0.75rem",
  fontWeight: 600,
  marginBottom: "0.5rem",
  color: "#222",
};

const inputStyle = {
  width: "100%",
  padding: "0.6rem",
  fontSize: "0.875rem",
  border: "1px solid #ccc",
  borderRadius: "8px",
  outline: "none",
};

export default ApplicationForm;
