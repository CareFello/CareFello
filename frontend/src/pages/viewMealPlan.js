import React from 'react';
import { useState } from 'react';
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal'

import { IoCloseSharp } from 'react-icons/io5';
import { TextInput, Label, FileInput, Checkbox, Textarea } from "flowbite-react"
import { GuardianMenuItem } from '../components/GuardianMenuItem'
import axios from 'axios';
import Meal from '../components/Meal';

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




    return (
        <div>
            <Header />
            <Box height={80} />
            <Box sx={{ display: 'flex' }}>
                <Sidebar menuItems={GuardianMenuItem} />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
                    <Grid container spacing={5} >

                        {/* Modal for adding a new meal plan */}
                        

                        <Grid item xs={12}>
                            <Stack spacing={5} direction={'row'}>
                                <Meal />
                            </Stack>
                        </Grid>


                    </Grid>

                </Box>

            </Box>
        </div>
    )
}