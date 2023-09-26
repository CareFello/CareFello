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
import login_img from '../assets/login_img.png';

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
      await axios.post("http://localhost:8080/api/resetemail", {
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
      await axios.post("http://localhost:8080/api/checkcode", {
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
      await axios.put(`http://localhost:8080/api/v1/employee/updatepass/${resetemail}`, {
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

      await axios.post("http://localhost:8080/api/v1/guardian/login", {

        email: email,
        password: password,
      }).then((res) => {

        if (res.data.message == "Login Success") {

          const guardianId = res.data.id;
          localStorage.setItem('myData', res.data.id);
          navigate(`/GuardianDashboard/${guardianId}`);
        }
        else if (res.data.message == "Email not exits") {

          axios.post("http://localhost:8080/api/v1/employee/login", {
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
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      {/* <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"> */}
          {/* <img class="w-8 h-8 mr-2" src="login_img" alt="login_img"></img> */}
            
      {/* </a> */}
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign In
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email"  value={email} onChange={(event) => {
                setEmail(event.target.value);
              }}
              required class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""></input>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" value={password} placeholder="••••••••" onChange={(event) => {
                setPassword(event.target.value);
              }}
              required
             class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 mt-9 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""></input>
                            <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500  dark:text-gray-300">Remember me</label>
                          </div>
                          </div>
                          
                      </div>
                      <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500"><Button onClick={openFirstModal}>Forgot password?</Button></a>
                  </div>
                  <button type="submit" onClick={login} class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href='http://localhost:3000/Registration' class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>

        

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
    
  );
};

export default Login;

