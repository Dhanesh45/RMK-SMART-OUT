import React from "react";
import "./ApplicationForm.css";
import Rmklogo from "../../assets/LandingPageImages/rmklogo.png";
import StudentSidebar from "./StudentSidebar";

const ApplicationForm = () => {
  return (
    <div className="flex">
      <StudentSidebar />

      {/* Main Content */}
      <div className="main-content">
        <div className="info">
          <img src={Rmklogo} alt="R.M.K Logo" className="logo" />
          <header>INFORMATION TECHNOLOGY</header>
        </div>
        <div className="form-container">
          <h2 className="form-title">OUTPASS FORM</h2>
          <div className="table">
            {/* {row 1} */}
            <div className="left">
              <div className="g">
                <div>
                  <label>FROM DATE</label>
                  <input type="date" />
                </div>
                <div>
                  <label>TO DATE</label>
                  <input type="date" />
                </div>
                <div>
                  <label>NO OF DAYS</label>
                  <input type="date" />
                </div>
              </div>
              <div className="h">
                <label>NATIVE</label>
                <input type="text" />
              </div>
            </div>

            {/* {row 2} */}
            <div className="left">
              <div className="g">
                <div>
                  <label>ROOM NO</label>
                  <input type="text" />
                </div>
                <div className="field">
                  <label>
                    <input type="radio" name="guardian" /> Parent
                  </label>
                </div>
                <div className="field">
                  <label>
                    <input type="radio" name="guardian" /> Guardian
                  </label>
                </div>
              </div>
              <div className="h">
                <label>REASON FOR LEAVE</label>
                <input type="text" />
              </div>
            </div>
            {/* {row 3} */}
            <div className="left">
              <div className="k">
                <div>
                  <label>NAME OF THE ACCOMPANYING PERSON</label>
                  <input type="text" />
                </div>
              </div>
              <div className="j">
                <div className="m">
                  <label>LEAVING DATE</label>
                  <input type="date" />
                </div>
                <div className="n">
                  <label>LEAVING TIME</label>
                  <input type="time" />
                </div>
              </div>
            </div>
            {/* {row 4} */}
            <div className="left">
              <div className="k">
                  <label>PARENT'S MOBILE NO</label>
                  <input type="number" />
              </div>
              <div className="b">
                <button className="B">SUBMIT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
