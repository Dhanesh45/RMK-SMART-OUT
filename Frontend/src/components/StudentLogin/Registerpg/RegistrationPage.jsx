import React from "react";
import "./RegistrationPage.css"; 

const RegistrationPage = () => {
  return (
    <div className="whole">
      <div className="registration-container">
        <h1>REGISTRATION FORM</h1>
        <p>Welcome to student Registration to create your account</p>

        <form className="registration-form">
          <div className="form-group">
            <label>NAME</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>GENDER</label>
            <div className="inline-options">
              <label><input type="radio" name="gender" /> MALE</label>
              <label><input type="radio" name="gender" /> FEMALE</label>
              <label><input type="radio" name="gender" /> NOT PREFER TO SAY</label>
            </div>
          </div>

          <div className="form-group">
            <label>REGISTRATION NUMBER</label>
            <input type="number" />
          </div>

          <div className="form-group">
            <label>YEAR</label>
            <div className="inline-options">
              <label><input type="radio" name="year" /> I YEAR</label>
              <label><input type="radio" name="year" /> II YEAR</label>
              <label><input type="radio" name="year" /> III YEAR</label>
              <label><input type="radio" name="year" /> IV YEAR</label>
            </div>
          </div>

          <div className="form-group">
            <label>E-MAIL</label>
            <input type="email" />
          </div>

          <div className="form-group">
            <label>YEAR CO-ORDINATOR</label>
            <select>
              <option value="">Select Year Co-ordinator</option>
              <option>ANNA LAX</option>
              <option>KARTHIK GAJJ</option>
            </select>
          </div>

          <div className="form-group">
            <label>PASSWORD</label>
            <input type="password" />
          </div>

          <div className="form-group">
            <label>COUNSELLOR</label>
            <select>
              <option value="">Select Counsellor  </option>
              <option>NANDHINI</option>
              <option>NANGABABU</option>
            </select>
          </div>

          <div className="form-group">
            <label>BRANCH</label>
            <input type="text" value="IT" />
          </div>

          <div className="form-group">
            <label>SECTION</label>
            <select>
              <option value="">Select</option>
              <option>A</option>
              <option>B</option>
            </select>
          </div>

          <div className="button-div">
            <button className="button-container" type="submit" onClick={()=>navigate("/")}>SUBMIT</button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
