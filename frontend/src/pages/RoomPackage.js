import React, { useState, useEffect } from 'react'
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
import basic from '../assets/Basic.jpg'
import classic from '../assets/Classic.jpg'
import luxury from '../assets/Luxury1.jpg'
import Model from "react-modal"
import "../styles/form.css"
import { ManagerMenuItem } from '../components/ManagerMenuItem'

import axios from "axios";
import { FaLungs } from 'react-icons/fa'



export default function RoomPackage() {

    const [visible, setVisible] = useState(false);
    const [pack, setPack] = useState([]);
    const [name11, setName] = useState("");
    const [price11, setPrice] = useState("");
    const [conten11, setConten] = useState("");
    const [feature1, setFeature] = useState([]);
    const [des, setDes] = useState("");
    const [pri, setPri] = useState("");
    const [id1, setId1] = useState("");
    const [fea, setFea] = useState([]);

    const addFeatureInput = () => {
        setFeature([...feature1, '']); // Add an empty string to the feature1 state array
    };

    const packageImages = {
        basic: basic,
        classic: classic,
        luxury: luxury,
    };

    useEffect(() => {
        // Make the GET request using Axios to fetch data from the backend
        axios.get('http://localhost:8080/api/package/get')
            .then((response) => setPack(response.data))
            .catch((error) => console.error(error));
    }, []);

    const handlePack = async (id, name, price, conten, feature) => {

        setName(name);
        setPrice(price);
        setConten(conten);
        setFeature(feature);
        setId1(id);
        setVisible(true);
    }

    async function updat(event) {
        event.preventDefault();

        const finalDes = des || conten11;
        const finalPri = pri || price11;

        try {

            await axios.put(`http://localhost:8080/api/package/update/${id1}`, {
                conten: finalDes,
                price: finalPri,
                feature: fea
            });
            axios.get('http://localhost:8080/api/package/get')
                .then((response) => setPack(response.data))
                .catch((error) => console.error(error));
            window.location.reload();
        } catch (error) {
            console.error(error);
            alert(error);
        }
    }

    // const handleUpdate = async (id1,des,pri,fea) => {
    //     console.log(id1, des, pri, fea);

    //     try {
    //         await axios.put(`http://localhost:8085/api/package/update/${id1}`, 
    //             conten: des,
    //             price: pri,
    //             feature: fea
    //         );
    //         axios.get('http://localhost:8085/api/package/get')
    //         .then((response) => setPack(response.data))
    //         .catch((error) => console.error(error));
    //       } catch (error) {
    //         console.error(error);
    //         alert(error);
    //       }
    // }

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
                                        <textarea rows="4" cols="50" required placeholder={conten11}
                                            value={des}
                                            onChange={(event) => {
                                                setDes(event.target.value);
                                            }}
                                        />
                                    </div>
                                    <div className="column">
                                        <div className="input-box">
                                            <label>Price</label>
                                            <input type="text" placeholder={price11} required
                                                value={pri}
                                                onChange={(event) => {
                                                    setPri(event.target.value);
                                                }}
                                            />
                                        </div>
                                    </div>


                                    {feature1.map((tag, index) => (
                                        <div className="column" key={index}>
                                            <div className="input-box">
                                                <label>Feature {index + 1}</label>
                                                <input
                                                    type="text"
                                                    placeholder={tag}
                                                    required
                                                    id={index}
                                                    value={fea[index] || ""}
                                                    onChange={(event) => {
                                                        const updatedFea = [...fea]; // Create a copy of the current state array
                                                        updatedFea[index] = event.target.value; // Update the value for the current index
                                                        setFea(updatedFea); // Update the state with the new array
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}

                                    <Button onClick={addFeatureInput}>Add feature</Button>
                                    <div className='column'>
                                        <Button onClick={updat}>Submit</Button>
                                        <Button onClick={() => setVisible(false)}>Close</Button>
                                    </div>
                                </form>
                                <br />

                            </Model>
                            <Stack spacing={5} direction={'row'}>

                                {pack.map((pack1) => (

                                    <Card sx={{ maxWidth: 32 + "%" }} key={pack1.id}>
                                        <CardMedia
                                            component="img"
                                            alt={pack1.name}
                                            height="300"
                                            src={packageImages[pack1.name]}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {pack1.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {pack1.conten}<br /> LKR {pack1.price}
                                            </Typography><br />
                                            <ul>
                                                {pack1.feature.map((tag, index) => (
                                                    <li key={index} style={{ textAlign: 'left', marginLeft: 40 }}>
                                                        {tag}
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" onClick={() => handlePack(pack1.id, pack1.name, pack1.price, pack1.conten, pack1.feature)}>Update</Button>

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