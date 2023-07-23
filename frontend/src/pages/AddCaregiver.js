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



export default function AddCaregiver() {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [gender, setGender] = React.useState('');

    const handleChange = (event) => {
        setGender(event.target.value);
    };

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
                                                    label="Enter the Name of the Caregiver"
                                                    sx={{ m: 1, width: '62ch' }}

                                                />
                                                <TextField
                                                    required
                                                    id="outlined-required"
                                                    label="NIC No"
                                                    sx={{ m: 1, width: '30ch' }}
                                                />
                                                <TextField
                                                    required
                                                    id="outlined-required"
                                                    label="Reg No (Elder Care Center)"

                                                    sx={{ m: 1, width: '30ch' }}
                                                />
                                                <TextField
                                                    required
                                                    id="outlined-required"
                                                    label="Date of Birth"
                                                    sx={{ m: 1, width: '30ch' }}
                                                />
                                                <FormControl sx={{ m: 1, width: '30ch' }}>
                                                    <InputLabel id="demo-simple-select-helper-label">Gender</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-helper-label"
                                                        id="demo-simple-select-helper"
                                                        value={gender}
                                                        label="Gender"
                                                        onChange={handleChange}
                                                    >
                                                        <MenuItem value={1}>Male</MenuItem>
                                                        <MenuItem value={0}>Female</MenuItem>
                                                    </Select>

                                                </FormControl>
                                                <TextField
                                                    required
                                                    id="outlined-required"
                                                    label="Email"

                                                    sx={{ m: 1, width: '30ch' }}
                                                />
                                                <TextField
                                                    id="outlined-multiline-flexible"
                                                    label="Mobile No"
                                                    multiline
                                                    maxRows={4}
                                                    sx={{ m: 1, width: '30ch' }}
                                                />
                                                <TextField
                                                    required
                                                    id="outlined-required"
                                                    label="Address"
                                                    sx={{ m: 1, width: '62ch' }}

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
                                                <Button variant="contained" sx={{ m: 1, width: '30ch' }}>
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