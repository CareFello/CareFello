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
import axios from 'axios'



function Registration() {

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [nic, setNic] = useState("");
    const [cont, setCont] = useState("");
    const [profession, setPro] = useState("");
    const [haddress, setHaddress] = useState("");
    const [waddress, setWaddress] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [isValidnic, setIsValidnic] = useState(true);

    async function save(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8085/api/v1/guardian/save", {
                email: email,
                password: password,
                nic: nic,
                fname: fname,
                lname: lname,
                cont: cont,
                profession: profession,
                haddress: haddress,
                waddress: waddress,

            });
            alert("Guardian registration Successfull");
            window.location.reload();

        } catch (err) {
            alert(err);
        }
    }

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
                            sx={{ m: 1, width: '25ch' }}

                            value={fname}
                            onChange={(event) => {
                                setFname(event.target.value);
                            }}
                        />


                        <TextField
                            required
                            id="outlined-required"
                            label="Last name"
                            sx={{ m: 1, width: '25ch' }}

                            value={lname}
                            onChange={(event) => {
                                setLname(event.target.value);
                            }} />



                        <TextField
                            required
                            id="outlined-required"
                            label="Email"
                            sx={{ m: 1, width: '52ch' }}

                            value={email}
                            onChange={(event) => {
                                setEmail(event.target.value);
                                const inputEmail = event.target.value;

                                // Regular expression for email validation
                                const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/;

                                // Check if the email matches the pattern
                                setIsValid(emailPattern.test(inputEmail));
                            }}

                            style={{ borderColor: isValid ? 'green' : 'red' }} />



                        <TextField
                            required
                            id="outlined-required"

                            label={isValidnic ? "NIC No" : <p style={{ color: 'red' }}>Invalid NIC No</p>}
                            sx={{ m: 1, width: '25ch' }}

                            value={nic}
                            onChange={(event) => {
                                setNic(event.target.value);
                                const inputnic = event.target.value;
                                const nicPattern = /^\d{12}$/;
                                setIsValidnic(nicPattern.test(inputnic));
                            }}
                            style={{ borderColor: isValid ? 'green' : 'red' }} />



                        <TextField
                            required
                            id="outlined-required"
                            label="Mobile No"
                            sx={{ m: 1, width: '25ch' }}

                            value={cont}
                            onChange={(event) => {
                                setCont(event.target.value);
                            }} />


                        <TextField
                            required
                            id="outlined-required"
                            label="Home Address"
                            sx={{ m: 1, width: '52ch' }}

                            value={haddress}
                            onChange={(event) => {
                                setHaddress(event.target.value);
                            }} />


                        <TextField
                            required
                            id="outlined-required"
                            label="Proffession"
                            sx={{ m: 1, width: '52ch' }}


                            value={profession}
                            onChange={(event) => {
                                setPro(event.target.value);
                            }} />

                        <TextField
                            required
                            id="outlined-required"
                            label="Working Place Address"
                            sx={{ m: 1, width: '52ch' }}


                            value={waddress}
                            onChange={(event) => {
                                setWaddress(event.target.value);
                            }} />
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
                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}


                            /></FormControl>

                       

                        <Button onClick={save} variant="contained" sx={{
                            m: 1, width: '40ch', height: '50px', backgroundColor: ' #05445E', marginTop: '20px',
                            '&:hover': {
                                backgroundColor: '#189AB4', // Change this color to your desired hover color
                            },
                        }}>

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
