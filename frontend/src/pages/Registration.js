import { useState } from 'react'
import Navbar from '../components/Navbar'
import "../styles/Registration.css"
import { Checkbox } from '@mui/material'
import TextField from '@mui/material/TextField'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import Reg from "../assets/reg.png"



function Registration() {

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <div>
            <Navbar />
            <br></br>
            <div className='reg-container'>


                <div className='reg-image'>
                    <img src={Reg} />
                </div>
                <div className='reg-form'>
                    <form action="#" className="">
                        <h2 className='Topic'>Sign Up</h2>
                        <TextField
                            required
                            id="outlined-required"
                            label="Fisrt name"
                            sx={{ m: 1, width: '25ch' }} />
                        <TextField
                            required
                            id="outlined-required"
                            label="Last name"
                            sx={{ m: 1, width: '25ch' }} />

                        <TextField
                            required
                            id="outlined-required"
                            label="Email"
                            sx={{ m: 1, width: '52ch' }} />
                        <TextField
                            required
                            id="outlined-required"
                            label="NIC No"
                            sx={{ m: 1, width: '25ch' }} />
                        <TextField
                            required
                            id="outlined-required"
                            label="Mobile No"
                            sx={{ m: 1, width: '25ch' }} />
                        <TextField
                            required
                            id="outlined-required"
                            label="Home Address"
                            sx={{ m: 1, width: '52ch' }} />
                        <TextField
                            required
                            id="outlined-required"
                            label="Proffession"
                            sx={{ m: 1, width: '52ch' }} />
                        <TextField
                            required
                            id="outlined-required"
                            label="Working Place Address"
                            sx={{ m: 1, width: '52ch' }} />
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
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


                            /></FormControl>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
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


                            /></FormControl>
                        <Button variant="contained" sx={{ m: 1, width: '40ch', height: '50px' }} >
                            Register
                        </Button>
                    </form>

                </div >
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div >
        </div >
    )
}

export default Registration