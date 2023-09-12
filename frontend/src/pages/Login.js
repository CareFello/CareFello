import React, { useState } from 'react';
import line from '../assets/Line.png';
import photo from '../assets/photo.png';
import Navbar from '../components/Navbar';
import '../styles/LoginPage.css';
import Model from 'react-modal';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

Model.setAppElement("#root");

function Login() {

  const [firstModalIsOpen, setFirstModalIsOpen] = useState(false);
  const [secondModalIsOpen, setSecondModalIsOpen] = useState(false);
  const [thirdModalIsOpen, setThirdModalIsOpen] = useState(false);

  const openFirstModal = () => {
    setFirstModalIsOpen(true);
  };

  const closeFirstModal = () => {
    setFirstModalIsOpen(false);
  };

  const openSecondModal = async () => {
    try {
      await axios.post("http://localhost:8085/api/resetemail", {
        recipient: resetemail,

      }).then((res) => {
        console.log(res.data.message);

        if (res.data.message == "true") {
          setSecondModalIsOpen(true);
          closeFirstModal();
        } else {
          alert("Invalid email");
        }
      });
    } catch (err) {
      alert(err);
    }


  };

  const closeSecondModal = () => {
    setSecondModalIsOpen(false);
  };

  const openThirdModal = async () => {
    try {
      await axios.post("http://localhost:8085/api/checkcode", {
        code: code,

      }).then((res) => {
        console.log(res.data.message);

        if (res.data.message == "true") {
          setThirdModalIsOpen(true);
          closeSecondModal();
        } else {
          alert("Invalid code");
        }
      });
    } catch (err) {
      alert(err);
    }

  };

  const reset = async () => {
    try {
      await axios.put(`http://localhost:8085/api/v1/employee/updatepass/${resetemail}`, {
        password: newpassword,
      });
      window.location.reload();
    } catch (err) {
      alert(err);
    }
    //  console.log({resetemail});
  };

  const closeThirdModal = () => {
    setThirdModalIsOpen(false);
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetemail, setResetemail] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [newpassword1, setNewpassword1] = useState("");
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);




  async function login(event) {
    event.preventDefault();
    try {

      await axios.post("http://localhost:8085/api/v1/guardian/login", {

        email: email,
        password: password,
      }).then((res) => {

        if (res.data.message == "Login Success") {

          const guardianId = res.data.id;
          localStorage.setItem('myData', res.data.id);
          navigate(`/GuardianDashboard/${guardianId}`);
        }
        else if (res.data.message == "Email not exits") {

          axios.post("http://localhost:8085/api/v1/employee/login", {
            email: email,
            password: password,
          }).then((res) => {

            if (res.data.message == "Login Success") {
              localStorage.setItem('myData', email);
              navigate('/ManagerDashboard');
            } else {
              alert("Incorrect Email or Password")
            }
          })
        }
        else {
          alert("Incorrect Email or Password");
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
        <div className='signup'>Dosen't have an an account yet?</div><div className='signup1'><a href='http://localhost:3000/Registration'>Sign Up</a></div>
        <div className='forgot'>Forgot Password?</div><div className='forgot1'><Button onClick={openFirstModal}>Click Here</Button></div>

        <Model isOpen={firstModalIsOpen}
          onRequestClose={closeFirstModal} style={{
            content: { width: "400px", marginLeft: "30%", marginTop: "40px", height: "280px" }
          }}>
          <div className='forget_pw'>
            <form action="#" className="">
              <h2 className='Topic'>Password Reset</h2>
              <h6>To reset your password, enter the email address you use to sign in to form</h6>
              <TextField
                required
                id="outlined-required"
                label="Email Address"
                value={resetemail}
                onChange={(event) => {
                  setResetemail(event.target.value);
                }}
                sx={{ m: 1, width: '38ch' }} />
              <Button onClick={openSecondModal}>
                Send
              </Button>
            </form>
          </div>
        </Model>

        <Model isOpen={secondModalIsOpen}
          onRequestClose={closeSecondModal} style={{
            content: { width: "400px", marginLeft: "30%", marginTop: "40px", height: "280px" }
          }}>
          <div className='forget_pw'>
            <form action="#" className="">
              <h2 className='Topic'>Password Reset</h2>
              <h6>To reset your password, enter the verification code that send to your email</h6>
              <TextField
                required
                id="outlined-required"
                label="Verification Code"
                value={code}
                onChange={(event) => {
                  setCode(event.target.value);
                }}
                sx={{ m: 1, width: '38ch' }} />
              <Button onClick={openThirdModal}>
                Verify
              </Button>
            </form>
          </div>
        </Model>

        <Model isOpen={thirdModalIsOpen}
          onRequestClose={closeThirdModal} style={{
            content: { width: "400px", marginLeft: "30%", marginTop: "40px", height: "280px" }
          }}>
          <div className='forget_pw'>
            <form action="#" className="">
              <h2 className='Topic'>Password Reset</h2>
              <h6>To reset your password, enter new password and confirm it</h6>
              <FormControl sx={{ m: 1, width: '38ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  value={newpassword}
                  onChange={(event) => {
                    setNewpassword(event.target.value);
                  }}

                /></FormControl>
              <FormControl sx={{ m: 1, width: '38ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Confirm Password"
                  value={newpassword1}
                  onChange={(event) => {
                    setNewpassword1(event.target.value);
                  }}

                /></FormControl>
              <Button onClick={reset}>
                Reset
              </Button>
            </form>
          </div>
        </Model>

      </div>
    </div >
  );
};

export default Login;
