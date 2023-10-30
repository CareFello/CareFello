import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import '../index.css';
import Header from '../components/Header'
import { Box } from '@mui/material'
import { Button, Card, Checkbox, Datepicker, Label, TextInput, Select, Textarea } from 'flowbite-react';
import "../styles/form.css"
import { ManagerMenuItem } from '../components/ManagerMenuItem'
import { Grid } from '@mui/material';
import slide1 from '../assets/log_2.jpg'
import axios from 'axios';

function RegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nicNo, setNicNo] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [profession, setProfession] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [workAddress, setWorkAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [nicNoError, setNicNoError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [mobileNoError, setMobileNoError] = useState('');
  const [professionError, setProfessionError] = useState('');
  const [homeAddressError, setHomeAddressError] = useState('');
  const [workAddressError, setWorkAddressError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleSubmit = async (event) => {
    // Validation logic
    event.preventDefault();
    let isValid = true;

    if (!firstName) {
      setFirstNameError('First Name is required');
      isValid = false;
    } else {
      setFirstNameError('');
    }

    if (!lastName) {
      setLastNameError('Last Name is required');
      isValid = false;
    } else {
      setLastNameError('');
    }

    if (!nicNo) {
      setNicNoError('NIC No is required');
      isValid = false;
    } else if (/^(19|20)\d{10}$/.test(nicNo) || /^9\d{8}V$/.test(nicNo)) {
      setNicNoError('');
    } else {
      setNicNoError('NIC No is invalid');
      isValid = false;
    }

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (/^\S+@gmail\.com$/.test(email)) {
      setEmailError('');
    } else {
      setEmailError('Email is invalid.');
      isValid = false;
    }


    if (!mobileNo) {
      setMobileNoError('Mobile number is required');
      isValid = false;
    } else if (/^\d{10,15}$/.test(mobileNo)) {
      setMobileNoError('');
    } else {
      setMobileNoError('Mobile number is invalid.');
      isValid = false;
    }


    if (!profession) {
      setProfessionError('Profession is required');
      isValid = false;
    } else {
      setProfessionError('');
    }

    if (!homeAddress) {
      setHomeAddressError('Home Address is required');
      isValid = false;
    } else {
      setHomeAddressError('');
    }

    if (!workAddress) {
      setWorkAddressError('Working Place Address is required');
      isValid = false;
    } else {
      setWorkAddressError('');
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length >= 8) {
      setPasswordError('');
    } else {
      setPasswordError('Password should contain at least 8 characters');
      isValid = false;
    }

    if (!confirmPassword) {
      setConfirmPasswordError('Password confirmation is required');
      isValid = false;
    } else if (password === confirmPassword) {
      setConfirmPasswordError('');
    } else {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    }

    // Add similar validation logic for other fields...

    if (isValid) {
      // Form submission logic here

      try {
        await axios.post("http://localhost:8080/api/v1/guardian/addGuardian", {
          fname: firstName,
          lname: lastName,
          nic: nicNo,
          email: email,
          cont: mobileNo,
          profession: profession,
          hAddress: homeAddress,
          wAddress: workAddress,
          password: password,
        });

        alert("You have register successfully");
        window.location.reload();

      } catch (err) {
        // Handle any errors, such as network errors or server-side validation errors
        alert(err);
      }
    }
  }




  return (
    <div>

      <Box height={10} />
      <Box sx={{ display: 'flex' }}>

        <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
          <br />
          <Grid container spacing={1}>
            <Grid item xs={7}>
              <div className="flex justify-center items-center">
                <img className="w-200 h-320" src={slide1} alt="logo" />
              </div>

            </Grid>
            <Grid item xs={4}>

              <h1 className="mb-4">
                Guardian Registration
              </h1>
              <div className='ml-7'>
                <div className="flex mb-3">
                  <div className="input-container mr-4">

                    <TextInput
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      sizing="md"
                      className='w-full mr-4'
                    />
                    <div className="error-message" style={{ color: 'red' }}>{firstNameError}</div>

                  </div>
                  <div className="input-container ">

                    <TextInput
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      sizing="md"
                      className='w-full mr-4'
                    />
                    <div className="error-message" style={{ color: 'red' }}>{lastNameError}</div>

                  </div>
                </div>

                <div className="mb-4">
                  <TextInput
                    placeholder="NIC No" type='text' sizing="md" className='w-68'
                    value={nicNo}
                    onChange={(e) => setNicNo(e.target.value)}
                  />
                  <div className="error-message" style={{ color: 'red' }}>{nicNoError}</div>
                </div>


                <div className="mb-4">
                  <TextInput
                    placeholder="Email" className='w-68' type='email' sizing="md"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="error-message" style={{ color: 'red' }}>{emailError}</div>
                </div>


                <div className="flex mb-3">
                  <div className="input-container mr-4">
                    <TextInput
                      placeholder="Mobile No"
                      className='w-full mr-4'
                      sizing="md"
                      value={mobileNo}
                      onChange={(e) => setMobileNo(e.target.value)}
                    />
                    <div className="error-message" style={{ color: 'red' }}>{mobileNoError}</div>
                  </div>
                  <div className="input-container">
                    <TextInput
                      placeholder="Profession"
                      className='w-full mr-4'
                      sizing="md"
                      value={profession}
                      onChange={(e) => setProfession(e.target.value)}
                    />
                    <div className="error-message" style={{ color: 'red' }}>{professionError}</div>
                  </div>
                </div>
                <div className="mb-4">
                  <Textarea
                    placeholder="Home Address" className='w-full' sizing="sm"
                    value={homeAddress}
                    onChange={(e) => setHomeAddress(e.target.value)}
                  />
                  <div className="error-message" style={{ color: 'red' }}>{homeAddressError}</div>
                </div>
                <div className="mb-4">
                  <Textarea
                    placeholder="Working Place Address" className='w-68' sizing="sm"
                    value={workAddress}
                    onChange={(e) => setWorkAddress(e.target.value)}
                  />
                  <div className="error-message" style={{ color: 'red' }}>{workAddressError}</div>
                </div>
                <div className="flex mb-3">
                  <div className="input-container mr-4">
                    <TextInput
                      placeholder="Password"
                      type='password'
                      className='w-full mr-4'
                      sizing="md"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="error-message" style={{ color: 'red' }}>{passwordError}</div>
                  </div>
                  <div className="input-container">
                    <TextInput
                      placeholder="Confirm Password"
                      type='password'
                      className='w-full mr-4'
                      sizing="md"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <div className="error-message" style={{ color: 'red' }}>{confirmPasswordError}</div>
                  </div>
                </div>
                <div class="flex items-center h-5 mb-4">
                  <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 mt-9 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""></input>
                  <div class="ml-3 text-sm">
                    <label for="remember" className="text-gray-500  dark:text-gray-300">I agree to</label>
                    <label for="remember" className="text-blue-500  dark:text-blue-300 ml-1 cursor-pointer" >Terms & Conditions</label>
                  </div>
                </div>
                <Button className='w-68' onClick={handleSubmit}>
                  Sign In
                </Button>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  )
}

export default RegistrationForm;
