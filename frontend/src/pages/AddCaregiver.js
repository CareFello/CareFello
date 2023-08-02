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
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import img from '../assets/caregiver.png'
import {  useState } from "react";
import axios from "axios";



function AddCaregiver() {

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [nic, setNic] = useState("");
    const [DOB, setDob] = useState("");
    const [contact_no, setContactNo] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState('');

    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8085/api/v1/caregiver/save", {
          first_name: first_name,
          email: email,
          password: password,
          last_name: last_name,
          nic: nic,
          DOB: DOB,
          contact_no: contact_no,
          address: address,
          gender: gender,
          });
          alert("caregiver registration Successfull");

        } catch (err) {
          alert(err);
        }
      }

    return (
        <div>
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
                                                Registration of Caregivers
                                            </Typography>
                                            <br />
                                            <div>
                                                <TextField
                                                    required
                                                    id="outlined-required"
                                                    label="Fisrt name"
                                                    sx={{ m: 1, width: '30ch' }}

                                                    value={first_name}
                                                    onChange={(event) => {
                                                    setFirstName(event.target.value);
                                                    }}

                                                />
                                                <TextField
                                                    required
                                                    id="outlined-required"
                                                    label="Last name"
                                                    sx={{ m: 1, width: '30ch' }}

                                                    value={last_name}
                                                    onChange={(event) => {
                                                    setLastName(event.target.value);
                                                    }}

                                                />
                                                <TextField
                                                    required
                                                    id="outlined-required"
                                                    label="NIC No"
                                                    sx={{ m: 1, width: '30ch' }}

                                                    value={nic}
                                                    onChange={(event) => {
                                                    setNic(event.target.value);
                                                    }}
                                                />
                                                <TextField
                                                    required
                                                    id="outlined-required"
                                                    label="Date of Birth"
                                                    sx={{ m: 1, width: '30ch' }}

                                                    value={DOB}
                                                    onChange={(event) => {
                                                    setDob(event.target.value);
                                                    }}
                                                />
                                                <TextField
                                                    required
                                                    id="outlined-required"
                                                    label="Email"
                                                    sx={{ m: 1, width: '62ch' }}

                                                    value={email}
                                                    onChange={(event) => {
                                                    setEmail(event.target.value);
                                                    }}
                                                />
                                                <FormControl sx={{ m: 1, width: '30ch' }}>
                                                    <InputLabel id="demo-simple-select-helper-label"
                                                    value={gender}
                                                    onChange={(event) => {
                                                    setGender(event.target.value);
                                                    }}>Gender</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-helper-label"
                                                        id="demo-simple-select-helper"

                                                        
                                                    >
                                                        <MenuItem value={'M'}>Male</MenuItem>
                                                        <MenuItem value={'F'}>Female</MenuItem>
                                                    </Select>

                                                </FormControl>
                                                
                                                <TextField
                                                    id="outlined-multiline-flexible"
                                                    label="Contact no"
                                                    multiline
                                                    maxRows={4}
                                                    sx={{ m: 1, width: '30ch' }}

                                                    value={contact_no}
                                                    onChange={(event) => {
                                                    setContactNo(event.target.value);
                                                    }}
                                                />
                                                <TextField
                                                    required
                                                    id="outlined-required"
                                                    label="Address"
                                                    sx={{ m: 1, width: '62ch' }}

                                                    value={address}
                                                    onChange={(event) => {
                                                    setAddress(event.target.value);
                                                    }}

                                                />

                                                <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                                                    <InputLabel htmlFor="outlined-adornment-password"
                                                    value={password}
                                                    onChange={(event) => {
                                                    setPassword(event.target.value);
                                                    }}>Password</InputLabel>
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
                                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                                </IconButton>
                                                            </InputAdornment>
                                                        }
                                                        label="Password"

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
                                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
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
                                        image={img}
                                        alt="Live from space album cover"
                                    />
                                </Card>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </div>
    )
}

export default AddCaregiver;