import { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { ManagerMenuItem } from '../components/ManagerMenuItem'
import { Box, MenuItem } from '@mui/material'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import meal from "../assets/meal1.jpg"
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import CloseIcon from '@mui/icons-material/Close';
import "../styles/Meal.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import MealItemCard from '../components/MealItemCard'


// Modal.setAppElement("#root")

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
        // Handle form submission logic here
        // You can use the form data to create a new meal plan
        handleModalClose();
    };

    const params = useParams();
    const [itemName, setItemName] = useState("");
    const [type, setType] = useState("");
    const [nutritions, setNutritions] = useState("");

    async function save(event) {
        event.preventDefault();
        try {
            const url = "http://localhost:8080/api/v1/MealPlan/" + params.id + "/meal/addMealItem";
            await axios.post(url, {
                itemName: itemName,
                type: type,
                nutritions: nutritions,
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

                                        value={itemName}
                                        onChange={(event) => {
                                            setItemName(event.target.value);
                                        }}
                                    />
                                    <br />
                                    <FormControl sx={{ m: 1, width: '30ch' }}>
                                        <InputLabel id="demo-simple-select-helper-label"
                                        >Type</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={type}
                                            onChange={(event) => {
                                                setType(event.target.value);
                                            }}

                                        >
                                            <MenuItem value={'Breakfast'}>Breakfast</MenuItem>
                                            <MenuItem value={'Lunch'}>Lunch</MenuItem>
                                            <MenuItem value={'Dinner'}>Dinner</MenuItem>
                                        </Select>

                                    </FormControl>
                                    <br />
                                    <TextField
                                        label="Price"
                                        type="text"
                                        fullWidth
                                        required
                                        style={{ marginTop: "5px" }}
                                        // Add state and onChange handler for input values
                                        value={nutritions}
                                        onChange={(event) => {
                                            setNutritions(event.target.value);
                                        }}
                                    />
                                    <br />

                                    <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }} onClick={save}>
                                        Add Meal Plan
                                    </Button>
                                </form>
                            </Box>
                        </Modal>

                        <Grid item xs={12}>
                            <Stack spacing={5} direction={'row'}>
                                <h2>Meal Plan Details for ID: {params.id}</h2>
                                <MealItemCard />
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </div>
    )
}

export default Meal
