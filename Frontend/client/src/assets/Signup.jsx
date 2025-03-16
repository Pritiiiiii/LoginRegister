import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100 '>
      <div className='d-flex'>
      <div className='bg-white p-4 rounded'>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder='Enter Name'
              onChange={handleChange}
              className='form-control'
            />
          </div>

          <div className='mb-3'>
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder='Enter Email'
              onChange={handleChange}
              className='form-control'
            />
          </div>

          <div className='mb-3'>
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              placeholder='Enter Password'
              onChange={handleChange}
              className='form-control'
            />
          </div>

          <button type="submit" className='btn btn-primary w-100'>
            Register
          </button>
        </form>
      </div>
      </div>
      
    </div>
  );
};

export default Signup;
