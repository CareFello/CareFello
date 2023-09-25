import React from 'react';
import { useState } from 'react';
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
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import meal1 from "../assets/meal1.jpg"
import { ManagerMenuItem } from '../components/ManagerMenuItem'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { NavLink } from "react-router-dom";
import axios from 'axios';
import MealPlanCard from '../components/MealPlanCard';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function MealPlan() {

    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [expanded1, setExpanded1] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleExpandClick1 = () => {
        setExpanded1(!expanded1);
    };

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        // You can use the form data to create a new meal plan
        handleModalClose();
    };

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const [image, setImage] = useState(null);

    async function save(event) {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("description", description);
            formData.append("price", price);
            formData.append("imageFile", image); // Append the image file

            await axios.post("http://localhost:8080/api/v1/MealPlan/addMealPlan", formData, {
                headers: {
                    "Content-Type": "multipart/form-data", // Set the content type for file upload
                },
            });

            alert("Meal Plan added successfully");
            window.location.reload();

        } catch (err) {
            alert(err);
        }
    }


    return (
        <div>
            <Header />
            <Box height={80} />
            <Box sx={{ display: 'flex' }}>
                <Sidebar menuItems={ManagerMenuItem} />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
                    <Grid container spacing={5} >

                        <Button variant="outlined" onClick={handleModalOpen} sx={{

                            top: '20px', // Adjust the margin top as needed
                            marginLeft: "85%",
                            zIndex: 1, // Ensure the button appears above other content
                        }}>
                            Add New Meal Plan
                        </Button>

                        {/* Modal for adding a new meal plan */}
                        <Modal open={isModalOpen} onClose={handleModalClose}>
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    bgcolor: 'background.paper',
                                    boxShadow: 24,
                                    p: 4,
                                    maxWidth: 400,
                                    width: '100%',
                                }}
                            >
                                <Typography variant="h6">Add New Meal Plan</Typography>
                                <form onSubmit={handleSubmit}>
                                    <TextField
                                        label="Meal Plan Name"
                                        fullWidth
                                        required
                                        style={{ marginTop: "5px" }}
                                        // Add state and onChange handler for input values

                                        value={name}
                                        onChange={(event) => {
                                            setName(event.target.value);
                                        }}
                                    />
                                    <br />
                                    <TextField
                                        label="Description"
                                        multiline
                                        rows={3}
                                        fullWidth
                                        required
                                        style={{ marginTop: "5px" }}
                                        // Add state and onChange handler for input values

                                        value={description}
                                        onChange={(event) => {
                                            setDescription(event.target.value);
                                        }}
                                    />
                                    <br />
                                    <TextField
                                        label="Price"
                                        type="number"
                                        fullWidth
                                        required
                                        style={{ marginTop: "5px" }}
                                        // Add state and onChange handler for input values
                                        value={price}
                                        onChange={(event) => {
                                            setPrice(event.target.value);
                                        }}
                                    />
                                    <br />
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => setImage(e.target.files[0])}
                                    />

                                    <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }} onClick={save}>
                                        Add Meal Plan
                                    </Button>
                                </form>
                            </Box>
                        </Modal>

                        <Grid item xs={12}>
                            <Stack spacing={5} direction={'row'}>
                                <MealPlanCard />
                            </Stack>
                        </Grid>


                    </Grid>

                </Box>

            </Box>
        </div>
    )
}