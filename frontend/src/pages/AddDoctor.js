import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import img_4 from '../assets/doctor.jpg';
import '../styles/AddDoctor.css';
import {  useState } from "react";
import axios from "axios";


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
          await axios.post("http://localhost:8085/api/v1/doctor/save", {
          email: email,
          password: password,
          nic: nic,
          name1: name1,
          name2: name2,
          cont: cont,
          reg: reg,
          });
          alert("Doctor registration Successfull");
          window.location.reload();

        } catch (err) {
          alert(err);
        }
      }


    return (
        <div className='addDoctor'>
            <form>
            <Header />
            <Box height={120} />
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
                    <Grid container spacing={0} >
                        <Grid item xs={12}>
                            <Stack spacing={9} direction={'row'}>
                                <Card sx={{ display: 'flex', minWidth: 100 + "%", height: 100 + "%" }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography component="div" variant="h4">
                                                Registration of Doctors
                                            </Typography>
                                            <br />
                                            <div>
                                                <TextField
                                                    required
                                                    id="outlined-required"
                                                    label="Fisrt name"
                                                    sx={{ m: 1, width: '30ch' }}

                                                    value={name1}
                                                    onChange={(event) => {
                                                    setName1(event.target.value);
                                                    }}
                                                />
                                                <TextField
                                                    required
                                                    id="outlined-required"
                                                    label="Last name"
                                                    sx={{ m: 1, width: '30ch' }}

                                                    value={name2}
                                                    onChange={(event) => {
                                                    setname2(event.target.value);
                                                    }}
                                                />
                                                <TextField
                                                    required
                                                    id="outlined-required"
                                                    label="Register Number"
                                                    sx={{ m: 1, width: '30ch' }}

                                                    value={reg}
                                                    onChange={(event) => {
                                                    setReg(event.target.value);
                                                    }}

                                                />
                                                <TextField
                                                    required
                                                    id="outlined-required"
                                                    label={isValidnic ? "NIC No" : <p style={{ color: 'red' }}>Invalid NIC No</p>}
                                                    sx={{ m: 1, width: '30ch' }}

                                                    value={nic}
                                                    onChange={(event) => {
                                                    setNic(event.target.value);
                                                    const inputnic = event.target.value;
                                                    const nicPattern = /^\d{12}$/;
                                                    setIsValidnic(nicPattern.test(inputnic));
                                                    }}
                                                    style={{ borderColor: isValid ? 'green' : 'red' }}
                                                />
                        
                                                <TextField
                                                    required
                                                    id="outlined-required"
                                                    label={isValid ? "Email" : <p style={{ color: 'red' }}>Invalid email address</p>}
                                                    sx={{ m: 1, width: '30ch' }}

                                                    value={email}
                                                    onChange={(event) => {
                                                    setEmail(event.target.value);
                                                    const inputEmail = event.target.value;

                                                    // Regular expression for email validation
                                                    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/;

                                                    // Check if the email matches the pattern
                                                    setIsValid(emailPattern.test(inputEmail));
                                                    }}

                                                    style={{ borderColor: isValid ? 'green' : 'red' }}
                                                />
                                                <TextField
                                                    id="outlined-multiline-flexible"
                                                    label="Mobile No"
                                                    multiline
                                                    maxRows={4}
                                                    sx={{ m: 1, width: '30ch' }}

                                                    value={cont}
                                                    onChange={(event) => {
                                                    setCont(event.target.value);
                                                    }}
                                                />
                                        
                                                <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
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
                                                        value={password}
                                                        onChange={(event) => {
                                                        setPassword(event.target.value);
                                                        }}
                                                    />
                                                </FormControl>
                                                <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                                                    <InputLabel htmlFor="outlined-adornment-password">Re- Enter Password</InputLabel>
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

                                                    />
                                                </FormControl>
                                                <br />
                                                <Button variant="contained" sx={{ m: 1, width: '30ch' }} onClick={save}>
                                                    Register
                                                </Button>

                                            </div>
                                        </CardContent>
                                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                                        </Box>
                                    </Box>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 50 + "%" }}
                                        image={img_4}
                                        alt="Live from space album cover"
                                    />
                                </Card>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            </form>
        </div>
    )
}

export default AddDoctor;

