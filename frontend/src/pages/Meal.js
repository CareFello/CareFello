import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { ManagerMenuItem } from '../components/ManagerMenuItem';
import { Box, MenuItem } from '@mui/material';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import FormControl from '@mui/material/FormControl';
//import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import CloseIcon from '@mui/icons-material/Close';
import "../styles/Meal.css";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MealItemCard from '../components/MealItemCard';
import { TextInput, Label, FileInput, Checkbox, Textarea, Select } from "flowbite-react"

function Meal() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleModalOpen = () => {
        setIsModalOpen(true);
    };
    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call the save function when the form is submitted
        handleModalClose(); // Close the modal after submission
    };


    const params = useParams();
    const [itemName, setItemName] = useState("");
    const [type, setType] = useState("");
    const [nutritions, setNutritions] = useState("");
    const [image, setImage] = useState(null); // Add image state

    async function save(event) {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append("itemName", itemName);
            formData.append("type", type);
            formData.append("nutritions", nutritions);
            formData.append("imageFile", image); // Append the image file

            const url = "http://localhost:8080/api/v1/MealPlan/" + params.id + "/meal/addMealItem";
            await axios.post(url, formData, {
                headers: {
                    "Content-Type": "multipart/form-data", // Set the content type for file upload
                },
            });
            alert("Meal added successfully");
            window.location.reload();
        } catch (err) {
            console.error('Error:', err);
            alert('Error adding meal: ' + err.message);
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
                            Add New Meal Item
                        </Button>

                        {/* Modal for adding a new meal item */}
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
                                <Typography variant="h6">Add New Meal Item</Typography>
                                <form onSubmit={handleSubmit}>
                                    <TextInput
                                        label="Meal Item Name"
                                        fullWidth
                                        required
                                        style={{ marginTop: "5px" }}
                                        value={itemName}
                                        onChange={(event) => {
                                            setItemName(event.target.value);
                                        }}
                                    />
                                    <br />
                                    <Select
                                        id="type"
                                        required
                                        defaultValue=""
                                        className='mb-2'
                                        value={type}
                                        onChange={(event) => {
                                            setType(event.target.value);
                                        }}
                                    >
                                        <option value="" disabled hidden>
                                            Choose Meal Type Type
                                        </option>
                                        <option value={'Breakfast'}>
                                            Breakfast
                                        </option>
                                        <option value={'Lunch'}>
                                            Lunch
                                        </option>
                                        <option value={'Dinner'}>
                                            Dinner
                                        </option>

                                    </Select>
                                    <TextInput
                                        label="Nutrition"
                                        type="text"
                                        fullWidth
                                        required
                                        style={{ marginTop: "5px" }}
                                        value={nutritions}
                                        onChange={(event) => {
                                            setNutritions(event.target.value);
                                        }}
                                    />
                                    <br />
                                    <input
                                        type="file"
                                        required
                                        accept="image/*"
                                        onChange={(e) => setImage(e.target.files[0])}
                                    />
                                    <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }} onClick={save}>
                                        Add Meal
                                    </Button>
                                </form>
                            </Box>
                        </Modal>

                        <Grid item xs={12}>
                            <Stack spacing={5} direction={'row'}>
                                {/* <h2>Meal Plan Details for ID: {params.id}</h2> */}
                                <MealItemCard />
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </div>
    )
}

export default Meal;
