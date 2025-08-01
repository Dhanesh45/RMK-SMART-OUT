import React from 'react'
import FacultySidebar from './FacultySidebar'
import rmklogo from "../../assets/LandingPageImages/rmklogo.png"

const ViewForm = () => {

    const inputStyle = {
    width: "100%",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    };

    const approveBtn = {
    padding: "10px 30px",
    backgroundColor: "rgba(14, 128, 110, 1)",
    color: "white",
    fontWeight: "bold",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer"
    };

    const rejectBtn = {
    padding: "10px 30px",
    backgroundColor: "rgba(216, 41, 41, 1)",
    color: "white",
    fontWeight: "bold",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer"
    };

  return (
    <div className='flex'>
        <FacultySidebar />
        <div style={{width:"85%",height:"100vh",backgroundColor:"rgba(238, 238, 238, 0.5)"}}>
            <div style={{display:"flex",justifyContent:"space-between",}}>
                <img src={rmklogo} width="9%" height="9%" style={{padding:"0.5%",}}/>
                <h1 style={{color:"rgba(14, 73, 71, 1)",fontSize:"15px",fontWeight:"bolder",padding:"1.5% 0.5% 0% 0%",}}>INFORMATION TECHNOLOGY</h1>
            </div>
            <div style={{
            width: "80%",
            margin: "2% auto",
            backgroundColor: "white",
            borderRadius: "15px",
            padding: "2%",
            boxShadow: "0px 0px 15px rgba(0,0,0,0.1)"

            }}>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
                <button style={{
                border: "2px solid black",
                borderRadius:"50%",
                background: "none",
                fontSize: "20px",
                cursor: "pointer",
                padding:"0.1% 0.8% 0.1% 0.8%"
                }}>✖</button>
            </div>

            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px"
            }}>
                {/* Row 1 */}
                <div style={{}}>
                <label>NAME</label>
                <input type="text" style={inputStyle} />
                </div>
                <div style={{display: "flex", gap: "30px"}}>
                <div style={{flex: 1}}>
                    <label>YEAR</label>
                    <input type="text" style={inputStyle} />
                </div>
                <div style={{flex: 1}}>
                    <label>SECTION</label>
                    <input type="text" style={inputStyle} />
                </div>
                <div style={{flex: 1}}>
                    <label>GENDER</label>
                    <input type="text" style={inputStyle} />
                </div>
                </div>

                {/* Row 2 */}
                <div>
                <label>REGISTRATION NUMBER</label>
                <input type="text" style={inputStyle} />
                </div>
                <div>
                <label>COUNSELLOR</label>
                <input type="text" style={inputStyle} />
                </div>

                {/* Row 3 */}
                <div>
                <label>EMAIL ADDRESS</label>
                <input type="email" style={inputStyle} />
                </div>
                <div>
                <label>YEAR COORDINATOR</label>
                <input type="text" style={inputStyle} />
                </div>

                {/* Row 4 */}
                <div>
                <label>BRANCH</label>
                <input type="text" style={inputStyle} />
                </div>
                <div style={{display: "flex", gap: "30px"}}>
                <div style={{flex: 1}}>
                    <label>NO.OF.DAYS</label>
                    <input type="text" style={inputStyle} />
                </div>
                <div style={{flex: 1}}>
                    <label>FROM DATE</label>
                    <input type="date" style={inputStyle} />
                </div>
                <div style={{flex: 1}}>
                    <label>TO DATE</label>
                    <input type="date" style={inputStyle} />
                </div>
                </div>

                {/* Row 5 */}
                <div>
                <label>NAME OF THE PARENT</label>
                <input type="text" style={inputStyle} />
                </div>
                <div style={{display: "flex", gap: "30px"}}>
                <div style={{flex: 1}}>
                    <label>ROOM NO</label>
                    <input type="text" style={inputStyle} />
                </div>
                <div style={{flex: 1}}>
                    <label>LEAVING DATE</label>
                    <input type="date" style={inputStyle} />
                </div>
                <div style={{flex: 1}}>
                    <label>LEAVING TIME</label>
                    <input type="time" style={inputStyle} />
                </div>
                </div>

                {/* Row 6 */}
                <div>
                <label>NATIVE</label>
                <input type="text" style={inputStyle} />
                </div>
                <div>
                <label>REASON FOR LEAVE</label>
                <input type="text" style={inputStyle} />
                </div>

                {/* Row 7 */}
                <div>
                <label>PARENT'S MOBILE NO</label>
                <input type="text" style={inputStyle} />
                </div>
                <div>
                <label>PARENT'S PERMISSION</label>
                <div style={{marginTop: "8px"}}>
                    <label style={{marginRight: "20px"}}>
                    <input type="checkbox" /> OBTAINED OVER PHONE
                    </label>
                    <label>
                    <input type="checkbox" /> HAS COME IN PERSON
                    </label>
                </div>
                </div>

                {/* Row 8 */}
                <div style={{gridColumn: "1 / span 2"}}>
                <label>REMARKS</label>
                <input type="text" style={{...inputStyle, width: "100%"}} />
                </div>
            </div>

            {/* Buttons */}
            <div style={{display: "flex", justifyContent: "center", marginTop: "30px", gap: "20px"}}>
                <button style={approveBtn}>APPROVE</button>
                <button style={rejectBtn}>REJECT</button>
            </div>
            </div>

        </div>
        
    </div>
  )
}

export default ViewForm