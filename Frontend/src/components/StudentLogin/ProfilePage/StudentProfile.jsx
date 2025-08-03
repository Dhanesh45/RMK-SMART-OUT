import React, { useState } from 'react';
import './StudentProfile.css'; 
import profile from "../../../assets/StudentLoginImages/Counsprofile.jpg";
import RMKlogo from "../../../assets/LandingPageImages/rmklogo.png";
import StudentSidebar from '../StudentSidebar';
import { useNavigate } from 'react-router-dom'

function StudentProfile({ onClose }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    gender: '',
    year: '',
    branch: 'INFORMATION TECHNOLOGY',
    coordinator: '',
    counselor: '',
    section: '',
    regNo: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <StudentSidebar />

      <div className="top-bar">
        <img src={RMKlogo} alt="RMK Logo" className="rmk-logo" />
        <h1 className="department-title">INFORMATION TECHNOLOGY</h1>
      </div>

      <div className="student-profile-card">
        <button className="close-btn" onClick={onClose}>✖</button>

        <div className="profile-image">
          <img src={profile} alt="Profile" />
        </div>

        <div className="form-section">
          <div className="form-left">
            <label>GENDER</label>
            <select name="gender" disabled={!isEditing} value={formData.gender} onChange={handleChange}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            <label>YEAR</label>
            <select name="year" disabled={!isEditing} value={formData.year} onChange={handleChange}>
              <option value="">Select Year</option>
              <option value="I Year">I Year</option>
              <option value="II Year">II Year</option>
              <option value="III Year">III Year</option>
              <option value="IV Year">IV Year</option>
            </select>

            <label>BRANCH</label>
            <input name="branch" disabled value={formData.branch} />

            <label>YEAR CO-ORDINATOR</label>
            <select name="coordinator" placeholder="Year Co-ordinator" disabled={!isEditing} value={formData.coordinator} onChange={handleChange} >
             
              <option value="AnnaLakshmi">AnnaLakshmi</option>
              <option value="Nandhini">Nandhini</option>
              <option value="Vijayaraj">Vijayaraj</option>
              </select>
          </div>

          <div className="form-right">
            <label>FULL NAME</label>
            <input name="fullName" placeholder="Full Name" disabled={!isEditing} value={formData.fullName} onChange={handleChange} />

            <label>EMAIL ADDRESS</label>
            <input name="email" placeholder="Email Address" disabled={!isEditing} value={formData.email} onChange={handleChange} />

            <label>COUNSELOR</label>
            <select name="counselor" disabled={!isEditing} value={formData.counselor} onChange={handleChange}>
              
              <option value="AnnaLakshmi">AnnaLakshmi</option>
              <option value="Nandhini">Nandhini</option>
            </select>

            <div className="section-row">
              <div>
                <label>SECTION </label>
                <select name="section" disabled={!isEditing} value={formData.section} onChange={handleChange}>
                
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                </select>
                <label>   </label>
              

             
                <label>REG NO </label>
                <input type="number" name="regNo" placeholder="Reg No" disabled={!isEditing} value={formData.regNo} onChange={handleChange} />
              </div>
            </div>
          </div>
        </div>

        <div className="button-row">
          {isEditing ? (
            <button className="action-btn" onClick={handleSave}>SAVE CHANGES</button>
          ) : (
            <button className="action-btn" onClick={() => setIsEditing(true)}>EDIT</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
