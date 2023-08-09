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
import "../styles/form.css"
import { ManagerMenuItem } from '../components/ManagerMenuItem'

function SendRequest() {
    return (
        <div>
            <Header />
            <Box height={80} />
            <Box sx={{ display: 'flex' }}>
                <Sidebar menuItems={ManagerMenuItem} />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
                    <Grid container spacing={0} >
                        <Grid item xs={8} >
                            <Stack spacing={9} direction={'row'}>
                                <Card sx={{ display: 'flex', minWidth: 100 + "%", height: 100 + "%" }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography component="div" variant="h4">
                                                Request Form
                                            </Typography>
                                            <form action="#" className="form">
                                                <div className="column">
                                                    <div className="input-box">
                                                        <label>Elder Name</label>
                                                        <input type="text" placeholder="Enter full name" required />
                                                    </div>
                                                    <div className="input-box">
                                                        <label>Elder Id</label>
                                                        <input type="text" placeholder="Enter email address" required />
                                                    </div>
                                                </div>
                                                <div className="input-box">
                                                    <label>Reason</label>
                                                    <input type="text" placeholder="Enter full name" required />
                                                </div>
                                                <div className="column">
                                                    <div className="input-box">
                                                        <label>Starting Date</label>
                                                        <input type="date" placeholder="Enter phone number" required />
                                                    </div>
                                                    <div className="input-box">
                                                        <label>Duration</label>
                                                        <input type="number" placeholder="Enter number of date" required />
                                                    </div>
                                                </div>

                                                <div className="input-box address">
                                                    <label>Caregiver Type</label>
                                                    <div className="column">
                                                        <div className="select-box">
                                                            <select>
                                                                <option hidden>Gender</option>
                                                                <option>Male</option>
                                                                <option>Female</option>
                                                                <option>Any</option>
                                                            </select>
                                                        </div>
                                                        <div className="select-box">
                                                            <select>
                                                                <option hidden>Age Limit of Caregiver</option>
                                                                <option>30-40</option>
                                                                <option>40-50</option>
                                                                <option>50-60</option>
                                                                <option>Any</option>
                                                            </select>
                                                        </div>

                                                    </div>
                                                    <div className="column">
                                                        <div className="select-box">
                                                            <select>
                                                                <option hidden>Package</option>
                                                                <option>Basic</option>
                                                                <option>Classic</option>
                                                                <option>Luxury</option>
                                                            </select>
                                                        </div>
                                                        <div className="select-box">
                                                            <select>
                                                                <option hidden>Meal Type</option>
                                                                <option>Basic</option>
                                                                <option>Diabetic Free</option>
                                                                <option>Cholestrol Free</option>
                                                                <option>Veg Only</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="input-box">
                                                    <label>Special Notes</label>
                                                    <textarea type="text" placeholder="Enter full name" required />
                                                </div>
                                                <button>Submit</button>
                                            </form>
                                        </CardContent>
                                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                                        </Box>
                                    </Box>
                                </Card>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </div>
    )
}

export default SendRequest
