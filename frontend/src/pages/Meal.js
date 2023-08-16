import { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { ManagerMenuItem } from '../components/ManagerMenuItem'
import { Box } from '@mui/material'
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
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';
import "../styles/Meal.css"


Modal.setAppElement("#root")

function Meal() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const [foodItemName, setFoodItemName] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

    const handleFoodItemNameChange = (event) => {
        setFoodItemName(event.target.value);
    };

    const handleImageChange = (event) => {
        setSelectedImage(event.target.files[0]);
    }

    return (
        <div>
            <Header />
            <Box height={80} />
            <Box sx={{ display: 'flex' }}>
                <Sidebar menuItems={ManagerMenuItem} />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
                    <Grid container spacing={5} >

                        <Grid item xs={12}>
                            <Stack spacing={5} direction={'row'}>
                                <h3>Breakfast</h3>
                                <Card sx={{ display: 'flex', width: 100 + "%", height: 260 }}>
                                    <Card sx={{ maxWidth: 200, height: 240, marginLeft: 4, marginTop: 1 }}>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="90"
                                            image={meal}
                                        />
                                        <CardContent>

                                            <Typography variant="body2" color="text.primary">
                                                Vegetable Salad
                                            </Typography>

                                            <Typography variant="body2" color="text.secondary">
                                                Salad which made from fresh vegetables.
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                3 Calories Per Gram
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <DeleteIcon />

                                        </CardActions>
                                    </Card>
                                    <Card sx={{ maxWidth: 200, height: 240, marginLeft: 4, marginTop: 1 }}>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="90"
                                            image={meal}
                                        />
                                        <CardContent>

                                            <Typography variant="body2" color="text.primary">
                                                Vegetable Salad
                                            </Typography>

                                            <Typography variant="body2" color="text.secondary">
                                                Salad which made from fresh vegetables.
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                3 Calories Per Gram
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <DeleteIcon />

                                        </CardActions>
                                    </Card>
                                    <Card sx={{ maxWidth: 200, height: 240, marginLeft: 4, marginTop: 1 }}>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="90"
                                            image={meal}
                                        />
                                        <CardContent>

                                            <Typography variant="body2" color="text.primary">
                                                Vegetable Salad
                                            </Typography>

                                            <Typography variant="body2" color="text.secondary">
                                                Salad which made from fresh vegetables.
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                3 Calories Per Gram
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <DeleteIcon />

                                        </CardActions>
                                    </Card>
                                    <Card sx={{ maxWidth: 200, height: 240, marginLeft: 4, marginTop: 1 }}>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="90"
                                            image={meal}
                                        />
                                        <CardContent>

                                            <Typography variant="body2" color="text.primary">
                                                Vegetable Salad
                                            </Typography>

                                            <Typography variant="body2" color="text.secondary">
                                                Salad which made from fresh vegetables.
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                3 Calories Per Gram
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <DeleteIcon />

                                        </CardActions>
                                    </Card>

                                    {/* <Card sx={{ maxWidth: 200, height: 180, marginLeft: 4, marginTop: 1 }}> */}
                                    <IconButton aria-label="Add" color="primary" onClick={openModal}>
                                        <AddCircleOutlineIcon style={{ width: 40, height: 40, marginLeft: 20, marginTop: 5 }} />
                                    </IconButton>
                                    {/* </Card> */}
                                    <Modal
                                        isOpen={isModalOpen}
                                        onRequestClose={closeModal}
                                        contentLabel="Add Item"
                                        className="modal"
                                        overlayClassName="overlay"

                                    >
                                        <div className="modal-header">
                                            <IconButton
                                                aria-label="Close"
                                                color="inherit"
                                                onClick={closeModal}
                                                className="close-button"
                                            >
                                                <CloseIcon />
                                            </IconButton>
                                        </div>
                                        <div className="modal-content">
                                            {/* Your popup form content */}
                                            <h2>Add Item</h2>
                                            <form>
                                                <TextField
                                                    required
                                                    id="outlined-required"
                                                    label="Food Item Name"
                                                    sx={{ m: 1, width: '38ch' }} />
                                                <TextField
                                                    required
                                                    id="outlined-required"
                                                    label="Discription"
                                                    sx={{ m: 1, width: '38ch' }} />
                                                <TextField
                                                    required
                                                    id="outlined-required"
                                                    label="Calaories Pe Gram"
                                                    sx={{ m: 1, width: '38ch' }} />
                                                <input
                                                    accept="image/*"
                                                    type="file"
                                                    id="image-uploader"
                                                    onChange={handleImageChange}
                                                    style={{ display: 'none' }}
                                                />
                                                <label htmlFor="image-uploader">
                                                    <Button >
                                                        Upload Image
                                                    </Button>
                                                </label>
                                                {selectedImage && <p>Selected image: {selectedImage.name}</p>}
                                                <Button variant="contained" sx={{ m: 1, width: '49ch', height: '50px' }} >Add</Button>
                                            </form>
                                        </div>
                                    </Modal>


                                </Card>


                            </Stack>
                        </Grid>

                        <Grid item xs={12}>
                            <Stack spacing={5} direction={'row'}>
                                <h3>Lunch</h3>
                                <Card sx={{ display: 'flex', width: 100 + "%", height: 260 }}>
                                    <Card sx={{ maxWidth: 200, height: 240, marginLeft: 4, marginTop: 1 }}>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="90"
                                            image={meal}
                                        />
                                        <CardContent>

                                            <Typography variant="body2" color="text.primary">
                                                Vegetable Salad
                                            </Typography>

                                            <Typography variant="body2" color="text.secondary">
                                                Salad which made from fresh vegetables.
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                3 Calories Per Gram
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <DeleteIcon />

                                        </CardActions>
                                    </Card>
                                    <Card sx={{ maxWidth: 200, height: 240, marginLeft: 4, marginTop: 1 }}>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="90"
                                            image={meal}
                                        />
                                        <CardContent>

                                            <Typography variant="body2" color="text.primary">
                                                Vegetable Salad
                                            </Typography>

                                            <Typography variant="body2" color="text.secondary">
                                                Salad which made from fresh vegetables.
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                3 Calories Per Gram
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <DeleteIcon />

                                        </CardActions>
                                    </Card>
                                    <Card sx={{ maxWidth: 200, height: 240, marginLeft: 4, marginTop: 1 }}>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="90"
                                            image={meal}
                                        />
                                        <CardContent>

                                            <Typography variant="body2" color="text.primary">
                                                Vegetable Salad
                                            </Typography>

                                            <Typography variant="body2" color="text.secondary">
                                                Salad which made from fresh vegetables.
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                3 Calories Per Gram
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <DeleteIcon />

                                        </CardActions>
                                    </Card>
                                    <Card sx={{ maxWidth: 200, height: 240, marginLeft: 4, marginTop: 1 }}>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="90"
                                            image={meal}
                                        />
                                        <CardContent>

                                            <Typography variant="body2" color="text.primary">
                                                Vegetable Salad
                                            </Typography>

                                            <Typography variant="body2" color="text.secondary">
                                                Salad which made from fresh vegetables.
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                3 Calories Per Gram
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <DeleteIcon />

                                        </CardActions>
                                    </Card>

                                    {/* <Card sx={{ maxWidth: 200, height: 180, marginLeft: 4, marginTop: 1 }}> */}
                                    <IconButton aria-label="Add" color="primary" onClick={openModal}>
                                        <AddCircleOutlineIcon style={{ width: 40, height: 40, marginLeft: 20, marginTop: 5 }} />
                                    </IconButton>
                                    {/* </Card> */}
                                    <Modal
                                        isOpen={isModalOpen}
                                        onRequestClose={closeModal}
                                        contentLabel="Add Item"
                                        className="modal"
                                        overlayClassName="overlay"

                                    >
                                        <div className="modal-header">
                                            <IconButton
                                                aria-label="Close"
                                                color="inherit"
                                                onClick={closeModal}
                                                className="close-button"
                                            >
                                                <CloseIcon />
                                            </IconButton>
                                        </div>
                                        <div className="modal-content">
                                            {/* Your popup form content */}
                                            <h2>Add Item</h2>
                                            <form>
                                                <TextField
                                                    required
                                                    id="outlined-required"
                                                    label="Food Item Name"
                                                    sx={{ m: 1, width: '38ch' }} />
                                                <TextField
                                                    required
                                                    id="outlined-required"
                                                    label="Discription"
                                                    sx={{ m: 1, width: '38ch' }} />
                                                <TextField
                                                    required
                                                    id="outlined-required"
                                                    label="Calaories Pe Gram"
                                                    sx={{ m: 1, width: '38ch' }} />
                                                <input
                                                    accept="image/*"
                                                    type="file"
                                                    id="image-uploader"
                                                    onChange={handleImageChange}
                                                    style={{ display: 'none' }}
                                                />
                                                <label htmlFor="image-uploader">
                                                    <Button >
                                                        Upload Image
                                                    </Button>
                                                </label>
                                                {selectedImage && <p>Selected image: {selectedImage.name}</p>}
                                                <Button variant="contained" sx={{ m: 1, width: '49ch', height: '50px' }} >Add</Button>
                                            </form>
                                        </div>
                                    </Modal>


                                </Card>


                            </Stack>
                        </Grid>

                        <Grid item xs={12}>
                            <Stack spacing={5} direction={'row'}>
                                <h3>Dinner</h3>
                                <Card sx={{ display: 'flex', width: 100 + "%", height: 260 }}>
                                    <Card sx={{ maxWidth: 200, height: 240, marginLeft: 4, marginTop: 1 }}>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="90"
                                            image={meal}
                                        />
                                        <CardContent>

                                            <Typography variant="body2" color="text.primary">
                                                Vegetable Salad
                                            </Typography>

                                            <Typography variant="body2" color="text.secondary">
                                                Salad which made from fresh vegetables.
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                3 Calories Per Gram
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <DeleteIcon />

                                        </CardActions>
                                    </Card>
                                    <Card sx={{ maxWidth: 200, height: 240, marginLeft: 4, marginTop: 1 }}>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="90"
                                            image={meal}
                                        />
                                        <CardContent>

                                            <Typography variant="body2" color="text.primary">
                                                Vegetable Salad
                                            </Typography>

                                            <Typography variant="body2" color="text.secondary">
                                                Salad which made from fresh vegetables.
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                3 Calories Per Gram
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <DeleteIcon />

                                        </CardActions>
                                    </Card>
                                    <Card sx={{ maxWidth: 200, height: 240, marginLeft: 4, marginTop: 1 }}>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="90"
                                            image={meal}
                                        />
                                        <CardContent>

                                            <Typography variant="body2" color="text.primary">
                                                Vegetable Salad
                                            </Typography>

                                            <Typography variant="body2" color="text.secondary">
                                                Salad which made from fresh vegetables.
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                3 Calories Per Gram
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <DeleteIcon />

                                        </CardActions>
                                    </Card>
                                    <Card sx={{ maxWidth: 200, height: 240, marginLeft: 4, marginTop: 1 }}>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="90"
                                            image={meal}
                                        />
                                        <CardContent>

                                            <Typography variant="body2" color="text.primary">
                                                Vegetable Salad
                                            </Typography>

                                            <Typography variant="body2" color="text.secondary">
                                                Salad which made from fresh vegetables.
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                3 Calories Per Gram
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <DeleteIcon />

                                        </CardActions>
                                    </Card>

                                    {/* <Card sx={{ maxWidth: 200, height: 180, marginLeft: 4, marginTop: 1 }}> */}
                                    <IconButton aria-label="Add" color="primary" onClick={openModal}>
                                        <AddCircleOutlineIcon style={{ width: 40, height: 40, marginLeft: 20, marginTop: 5 }} />
                                    </IconButton>
                                    {/* </Card> */}
                                    <Modal
                                        isOpen={isModalOpen}
                                        onRequestClose={closeModal}
                                        contentLabel="Add Item"
                                        className="modal"
                                        overlayClassName="overlay"

                                    >
                                        <div className="modal-header">
                                            <IconButton
                                                aria-label="Close"
                                                color="inherit"
                                                onClick={closeModal}
                                                className="close-button"
                                            >
                                                <CloseIcon />
                                            </IconButton>
                                        </div>
                                        <div className="modal-content">
                                            {/* Your popup form content */}
                                            <h2>Add Item</h2>
                                            <form>
                                                <TextField
                                                    required
                                                    id="outlined-required"
                                                    label="Food Item Name"
                                                    sx={{ m: 1, width: '38ch' }} />
                                                <TextField
                                                    required
                                                    id="outlined-required"
                                                    label="Discription"
                                                    sx={{ m: 1, width: '38ch' }} />
                                                <TextField
                                                    required
                                                    id="outlined-required"
                                                    label="Calaories Pe Gram"
                                                    sx={{ m: 1, width: '38ch' }} />
                                                <input
                                                    accept="image/*"
                                                    type="file"
                                                    id="image-uploader"
                                                    onChange={handleImageChange}
                                                    style={{ display: 'none' }}
                                                />
                                                <label htmlFor="image-uploader">
                                                    <Button >
                                                        Upload Image
                                                    </Button>
                                                </label>
                                                {selectedImage && <p>Selected image: {selectedImage.name}</p>}
                                                <Button variant="contained" sx={{ m: 1, width: '49ch', height: '50px' }} >Add</Button>
                                            </form>
                                        </div>
                                    </Modal>


                                </Card>


                            </Stack>
                        </Grid>



                    </Grid>
                </Box>
            </Box>
        </div>
    )
}

export default Meal
