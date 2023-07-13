import React, { useState } from 'react';
import line from '../assets/Line.png';
import photo from '../assets/photo.png';
import Navbar from '../components/Navbar';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset the form
    setEmail('');
    setPassword('');
  };

  return (
    <div>
        <Navbar />
    <div className='photo'><img src={photo} alt='photo' /></div>
    <div className='logbox'>
      <div className='line1'><img src={line} alt='line' /></div>
      <div className='line2'><img src={line} alt='line' /></div>
      
      <form onSubmit={handleSubmit}>
        <div>
          <input className='input1'
            type="email"
            id="email"
            placeholder='Email'
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <input className='input2'
            type="password"
            id="password"
            placeholder='Password'
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button className='logbtn' type="submit">LOGIN</button>
      </form>
      <div className='signup'>Dosen't have an an account yet?</div><div className='signup1'>Sign Up</div>
      <div className='forgot'>Forgot Password?</div><div className='forgot1'>Click Here</div>
    </div>
    </div>
  );
};

export default LoginPage;
