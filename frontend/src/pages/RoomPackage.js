import React, { useState,useEffect } from 'react'
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
import { ManagerMenuItem } from '../components/ManagerMenuItem'

import axios from "axios";



export default function RoomPackage() {

    const [visible, setVisible] = useState(false);
    const [pack, setPack] = useState([]);
    const [name11, setName] = useState("");
    const [price11, setPrice] = useState("");
    const [conten11, setConten] = useState("");

    useEffect(() => {
        // Make the GET request using Axios to fetch data from the backend
        axios.get('http://localhost:8085/api/package/get')
          .then((response) => setPack(response.data))
          .catch((error) => console.error(error));
      }, []);

    const handlePack = async (id,name,price,conten) => {
        console.log(id,name);
        setName(name);
        setPrice(price);
        setConten(conten);
        setVisible(true);
    }  

    return (
        <div>
            <Header />
            <Box height={100} />
            <Box sx={{ display: 'flex' }}>
                <Sidebar menuItems={ManagerMenuItem} />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
                    <Grid container spacing={5} >

                        <Grid item xs={12}>
                            {/* <Button onClick={() => setVisible(true)}>Add New Package</Button> */}
                            <Model isOpen={visible} onRequestClose={() => setVisible(false)} style={{
                                content: { width: "500px", marginLeft: "30%", marginTop: "40px" }
                                }}>
                                <form action="#" className="form">
                                    <div className="input-box">
                                        <label>{name11}</label>
                                    </div>
                                    <div className="input-box">
                                        <label>Package description</label><br />
                                        <textarea rows="4" cols="50" required placeholder={conten11} />
                                    </div>
                                    <div className="column">
                                        <div className="input-box">
                                            <label>Price</label>
                                            <input type="number" placeholder={price11} required />
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
                                
                                    {pack.map((pack1) => (
                                    
                                <Card sx={{ maxWidth: 32 + "%" }}  key={pack1.id}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="300"
                                        src={Luxury}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {pack1.name} 
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {pack1.conten} {pack1.price}
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
                                        <Button size="small" onClick={() => handlePack(pack1.id,pack1.name,pack1.price,pack1.conten)}>Update</Button>

                                    </CardActions>
                                </Card>
                                
                                ))}
                            
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>

            </Box>
        </div>
    )
}