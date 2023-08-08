import React, { useState } from 'react'
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
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import Shared from '../assets/SharedRoom.jpg'
import Single from '../assets/Single.jpg'
import Luxury from '../assets/Luxury.jpg'
import Model from "react-modal"
import "../styles/form.css"




export default function RoomPackage() {

    const [visible, setVisible] = useState(false);

    return (
        <div>
            <Header />
            <Box height={100} />
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
                    <Grid container spacing={5} >

                        <Grid item xs={12}>
                            <Button onClick={() => setVisible(true)}>Add New Package</Button>
                            <Model isOpen={visible} onRequestClose={() => setVisible(false)} style={{
                                content: { width: "500px", marginLeft: "30%", marginTop: "40px" }
                            }}>
                                <form action="#" className="form">
                                    <div className="input-box">
                                        <label>Package Name</label>
                                        <input type="text" placeholder="Enter full name" required />
                                    </div>
                                    <div className="input-box">
                                        <label>Package description</label><br />
                                        <textarea rows="4" cols="50" required />
                                    </div>
                                    <div className="column">
                                        <div className="input-box">
                                            <label>Phone Number</label>
                                            <input type="number" placeholder="Enter phone number" required />
                                        </div>
                                        <div className="input-box">
                                            <label>Birth Date</label>
                                            <input type="date" placeholder="Enter birth date" required />
                                        </div>
                                    </div>
                                    <div className='column'>
                                        <Button>Submit</Button>
                                        <Button onClick={() => setVisible(false)}>Close</Button>
                                    </div>
                                </form>
                                <br />

                            </Model>
                            <Stack spacing={5} direction={'row'}>

                                <Card sx={{ maxWidth: 32 + "%" }}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="300"
                                        src={Shared}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Basic
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Larger room with two or three beds.Separate Rooms according to the gender.
                                        </Typography><br />
                                        <ul>
                                            <li style={{ textAlign: 'left', marginLeft: 40 }}>
                                                Shared Room(Maximum 3 Beds)
                                            </li>
                                            <li style={{ textAlign: 'left', marginLeft: 40 }}>
                                                One Caregiver per Room
                                            </li>
                                            <li style={{ textAlign: 'left', marginLeft: 40 }}>
                                                Attatched Bathroom
                                            </li>
                                        </ul>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Update</Button>

                                    </CardActions>
                                </Card>
                                <Card sx={{ maxWidth: 32 + "%" }}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="300"
                                        src={Single}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Classic
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography><br />
                                        <ul>
                                            <li style={{ textAlign: 'left', marginLeft: 40 }}>
                                                Single Rooms(Non AC)
                                            </li>
                                            <li style={{ textAlign: 'left', marginLeft: 40 }}>
                                                One Caregiver per Person
                                            </li>
                                            <li style={{ textAlign: 'left', marginLeft: 40 }}>
                                                Attatched Bathroom
                                            </li>
                                            <li style={{ textAlign: 'left', marginLeft: 40 }}>
                                                Separate Balconies
                                            </li>
                                        </ul>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Update</Button>

                                    </CardActions>
                                </Card>
                                <Card sx={{ maxWidth: 32 + "%" }}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="300"
                                        src={Luxury}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Luxury
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography><br />
                                        <ul>
                                            <li style={{ textAlign: 'left', marginLeft: 40 }}>
                                                Single Room(AC)
                                            </li>
                                            <li style={{ textAlign: 'left', marginLeft: 40 }}>
                                                One Caregiver per Person
                                            </li>
                                            <li style={{ textAlign: 'left', marginLeft: 40 }}>
                                                Attatched Bathroom with Hot Water System
                                            </li>
                                            <li style={{ textAlign: 'left', marginLeft: 40 }}>
                                                Room TV , Refrigirator
                                            </li>
                                            <li style={{ textAlign: 'left', marginLeft: 40 }}>
                                                Room WiFi
                                            </li>
                                            <li style={{ textAlign: 'left', marginLeft: 40 }}>
                                                Separate Balcony
                                            </li>
                                        </ul>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Update</Button>

                                    </CardActions>
                                </Card>

                            </Stack>
                        </Grid>
                    </Grid>
                </Box>

            </Box>
        </div>
    )
}