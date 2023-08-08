import React, { useState } from 'react';
import line from '../assets/Line.png';
import photo from '../assets/photo.png';
import Navbar from '../components/Navbar';
import '../styles/LoginPage.css';

import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Login() {
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8085/api/v1/employee/login", {
            email: email,
            password: password,
            }).then((res) => 
            {
             console.log(res.data);
             
             if (res.data.message == "Email not exits") 
             {
               alert("Email not exits");
             } 
             else if(res.data.message == "Login Success")
             { 
                
                navigate('/ManagerDashboard');
             } 
              else 
             { 
                alert("Incorrect Email and Password not match");
             }
          }, fail => {
           console.error(fail); // Error!
  });
        }

 
         catch (err) {
          alert(err);
        }
      
      }

  return (
    <div>
        <Navbar />
    <div className='photo'><img src={photo} alt='photo' /></div>
    <div className='logbox'>
      <div className='line1'><img src={line} alt='line' /></div>
      <div className='line2'><img src={line} alt='line' /></div>
      
      <form>
        <div>
          <input className='input1'
            type="email"
            id="email"
            placeholder='Email'
            value={email}
            onChange={(event) => {
            setEmail(event.target.value);
          }}
            required
          />
        </div>
        <div>
          <input className='input2'
            type="password"
            id="password"
            placeholder='Password'
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            required
          />
        </div>
        <button className='logbtn' type="submit" onClick={login}>LOGIN</button>
      </form>
      <div className='signup'>Dosen't have an an account yet?</div><div className='signup1'><a href='http://localhost:3000/reg'>Sign Up</a></div>
      <div className='forgot'>Forgot Password?</div><div className='forgot1'>Click Here</div>
    </div>
    </div>
  );
};

export default Login;
