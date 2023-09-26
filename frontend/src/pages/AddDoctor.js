import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { Box } from '@mui/material'
import { ManagerMenuItem } from '../components/ManagerMenuItem'
import doctor from '../assets/doctor.png';
import '../styles/AddDoctor.css';
import { useState } from "react";
import axios from "axios";
import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import '../index.css';
import InputAdornment from '@mui/material/InputAdornment';
import {IconButton} from '@mui/material';
import { Visibility } from '@material-ui/icons'
import { VisibilityOff } from '@material-ui/icons'

function AddDoctor() {

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [name1, setName1] = useState("");
    const [name2, setname2] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [nic, setNic] = useState("");
    const [cont, setCont] = useState("");
    const [reg, setReg] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [isValidnic, setIsValidnic] = useState(true);

    async function save(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/v1/doctor/save", {
                email: email,
                password: password,
                nic: nic,
                name1: name1,
                name2: name2,
                cont: cont,
                reg: reg,
            });
            try {
                const response = await axios.post('http://localhost:8080/api/email', {
                  recipient: email,
                  subject: 'Carefello doctor registration',
                  content: 'You have been successfully registered as a doctor',
                });
                
                console.log(response.data); // Handle success message
              } catch (error) {
                console.error('Error sending email:', error);
              }
            alert("Doctor registration Successfull");
            window.location.reload();

        } catch (err) {
            alert(err);
        }
    }


    return (
        <div className='addDoctor'>
            <Header />
            <Box height={80} />
            <Box sx={{ display: 'flex' }}>
                <Sidebar menuItems={ManagerMenuItem} />
                <div className='app'>
                    <div className='main-container'>
                    <div className='top-part'>
                        <div className='topic_reg'>Add New Doctor</div>
                    </div>
                    <div className="bottom-part">
                            <div className="vertical-part_1" style={{ width: '400px' }}>
                            
                            <img src={doctor} alt="doctor" />
                            </div>
                            <div className="vertical-part_2" style={{ width: '600px' }}>
                                <form className="flex max-w-xl flex-col gap-4">
                                <div className='name mb-2'>
                                <div className='fname'>
                                    <div className="mb-1 block">
                                    <Label
                                        className="form-label"
                                        htmlFor="base"
                                        value="First Name"
                                    />
                                    </div>
                                    <TextInput
                                    required
                                    value={name1}
                                    id="base"
                                    sizing="md"
                                    type="text"
                                    onChange={(event) => {
                                                            setName1(event.target.value);
                                                        }}
                                    />
                                </div>
                                <div className='lname ml-4'>
                                    <div className="mb-1 block">
                                    <Label
                                        htmlFor="base"
                                        value="Last Name"
                                        className="form-label"
                                    />
                                    </div>
                                    <TextInput
                                    required
                                    id="base"
                                    label={isValidnic ? "NIC No" : <p style={{ color: 'red' }}>Invalid NIC No</p>}
                                    value={nic}
                                    onChange={(event) => {
                                                            setNic(event.target.value);
                                                        }}
                                    sizing="md"
                                    type="text"
                                    />
                                </div>
                                </div>
                                <div className='reg mb-2'>
                                    <div className="mb-1 block">
                                    <Label
                                    className="form-label"
                                        htmlFor="base"
                                        value="Registeration Number"
                                    />
                                    </div>
                                    <TextInput
                                     onChange={(event) => {
                                                            setReg(event.target.value);
                                                        }}
                                    id="base"
                                    sizing="md"
                                    type="text"
                                    />
                                </div>
                                
                                <div className='nic mb-2'>
                                    <div className="mb-1 block">
                                    <Label
                                    className="form-label"
                                        htmlFor="base"
                                        value="NIC"
                                    />
                                    </div>
                                    <TextInput
                                    id="base"
                                    sizing="md"
                                    type="text"
                                    label={isValidnic ? "NIC No" : <p style={{ color: 'red' }}>Invalid NIC No</p>}
                                    onChange={(event) => {
                                                            setNic(event.target.value);
                                                            const inputnic = event.target.value;
                                                            const nicPattern = /^\d{12}$/;
                                                            setIsValidnic(nicPattern.test(inputnic));
                                                        }}
                                    />
                                </div>
                                <div className='email mb-2'>
                                <div className="mb-1 block">
                                <Label
                                    htmlFor="email2"
                                    className="form-label"
                                    value="Email"
                                />
                                </div>
                                <TextInput
                                label={isValid ? "Email" : <p style={{ color: 'red' }}>Invalid email address</p>}
                                value={email}
                                id="email2"
                                onChange={(event) => {
                                                            setEmail(event.target.value);
                                                            const inputEmail = event.target.value;

                                                            // Regular expression for email validation
                                                            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/;

                                                            // Check if the email matches the pattern
                                                            setIsValid(emailPattern.test(inputEmail));
                                                        }}
                                placeholder="name@flowbite.com"
                                required
                                shadow
                                type="email"
                                />
                            </div>

                            
                            {/* <div className='email mb-2'>
                                <div className="mb-1 block">
                                <Label
                                className="form-label"
                                    htmlFor="email2"
                                    id="mobileNumber"
                                    name="mobileNumber"
                                    value={mobileNumber}
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                />
                                </div>
                                <TextInput
                                label={isValid ? "Email" : <p style={{ color: 'red' }}>Invalid email address</p>}
                                value={email}
                                id="email2"
                                onChange={(event) => {
                                                            setEmail(event.target.value);
                                                            const inputEmail = event.target.value;

                                                            // Regular expression for email validation
                                                            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/;

                                                            // Check if the email matches the pattern
                                                            setIsValid(emailPattern.test(inputEmail));
                                                        }}
                                placeholder="name@flowbite.com"
                                required
                                shadow
                                type="email"
                                />
                            </div> */}
                            
                                
                            <div className='pw'>
                            <div>
                                <div className="mb-1 block">
                                <Label
                                className="form-label"
                                    htmlFor="password2"
                                    value="Enter a Password"
                                />
                                </div>
                                <TextInput
                                id="password2"
                                required
                                shadow
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
                                                            value={password}
                                                            onChange={(event) => {
                                                                setPassword(event.target.value);
                                                            }}
                                />
                            </div>
                            <div className='re_enter ml-4 mb-4'>
                                <div className="mb-1 block">
                                <Label
                                    className="form-label"
                                    htmlFor="repeat-password"
                                    value="Re-Enter password"
                                />
                                </div>
                                <TextInput
                                id="repeat-password"
                                required
                                shadow
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
                                />
                            </div>
                            </div>
                            
                            <Button type="submit" onClick={save}>
                                Register Account
                            </Button>
                        </form>
                            </div>
                    </div>
                    </div>
                </div>
            </Box>
        </div>
    )
}

export default AddDoctor;

