import React, { useState } from 'react';
import rmklogo from "../../assets/LandingPageImages/rmklogo.png"
import StudentSidebar from './StudentSidebar';
function StudentHelp() {
  const [problem, setProblem] = useState('');
  const [others, setOthers] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ display: 'flex', fontFamily: 'Arial, sans-serif' }}>
      <StudentSidebar />

      <div style={{ flexGrow: 1, background: '#f1f1f1' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '',
          backgroundColor: '#f1f1f1'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src={rmklogo} alt="" style={{
              width: '100px',
              height: '40px',
              borderRadius: '5px'
            }} />
            
          </div>
          <div style={{
            fontWeight: 'bold',
            fontSize: '20px',
            color: '#004d40'
          }}>INFORMATION TECHNOLOGY</div>
        </div>

        <div style={{ padding: '40px',width:"90%",height:"70%",display:"flex",
            justifyContent:"center",
            alignItems:"center" }}>
          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '20px',
            maxWidth: '600px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            
          }}>
            <h2 style={{ marginBottom: '10px' }}>Help</h2>
            <p style={{
              fontSize: '14px',
              color: '#555',
              marginBottom: '20px'
            }}>
              Our Help Page provides quick answers to common questions, including how to request an outpass,
              track approvals, and manage your profile. If you still need support, feel free to contact your
              warden or system admin anytime.
            </p>
            <form onSubmit={handleSubmit}>
              <label style={{ display: 'block', marginTop: '15px', fontWeight: 'bold' }}>PROBLEMS</label>
              <select
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  marginTop: '5px',
                  marginBottom: '15px',
                  border: '1px solid #ccc',
                  borderRadius: '5px'
                }}
              >
                <option value="">-- Select Problem --</option>
                <option value="Login Issue">Login Issue</option>
                <option value="Outpass Request Issue">Outpass Request Issue</option>
                <option value="Approval Delay">Approval Delay</option>
                <option value="Profile Update Problem">Profile Update Problem</option>
              </select>

              <label style={{ display: 'block', marginTop: '15px', fontWeight: 'bold' }}>Others</label>
              <input
                type="text"
                placeholder="Mention other issues"
                value={others}
                onChange={(e) => setOthers(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  marginTop: '5px',
                  marginBottom: '15px',
                  border: '1px solid #ccc',
                  borderRadius: '5px'
                }}
              />

              <button type="submit" style={{
                backgroundColor: '#004d40',
                color: 'white',
                padding: '10px 25px',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}>SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentHelp;