import React, { useState } from 'react';

function SimpleForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange =(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  return (
    <div>
      <h2>Simple Form</h2>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
      />
      <br />
      <label>name</label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
      />
      <br />
      <h4>Output:</h4>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
}

export default SimpleForm;
