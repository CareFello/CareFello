import React, { useState } from 'react';
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { GuardianMenuItem } from "../../components/GuardianMenuItem";
import img_1 from '../../assets/guardian/caregiver-image.jpg'
import { Card, CardContent, CardMedia, Typography, Box, Rating, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { lightBlue } from '@mui/material/colors';

const caregiversData = [
    {
        id: 1,
        name: 'Mrs. E.M. Rathnayaka',
        image: img_1,
        communication: 4.5,
        cleanliness: 3.7,
        professionalism: 4.2,
        overall: 4.2,
    },
    // Add more caregivers as needed
];

const GuardianCaregiverRating = () => {

    const [ratings, setRatings] = useState({ communication: 0, cleanliness: 0, professionalism: 0 });

    const handleRatingChange = (factor, value) => {
        setRatings((prevRatings) => ({ ...prevRatings, [factor]: value }));
    };

    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#05445E',
        },
    });


    return (
        <div style={{ justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: "#F9FFFE" }}>
            <Header />
            <Box height={80} />

            <Grid container justifyContent="center" alignItems="stretch" spacing={2}>
                <Sidebar menuItems={GuardianMenuItem} />
                <Grid item xs={6} md={5} lg={3}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            {/* Section 1: Caregiver Details */}

                            {caregiversData.map((caregiver) => (
                                <div key={caregiver.id}>

                                    <CardMedia
                                        component="img"
                                        height="200"
                                        width="200"
                                        image={caregiver.image}
                                        alt="caregiver-img"
                                    />

                                    <Typography
                                        variant="h5"
                                        mt={3}
                                        mb={3}>
                                        {caregiver.name}</Typography>

                                    <Typography
                                        variant="body1"
                                        mb={1}>
                                        Communication</Typography>
                                    <Box display="flex" justifyContent="center" alignItems="center" mb={3}>
                                        <StyledRating value={caregiver.communication} readOnly precision={0.5} />
                                        <Typography variant="body1" ml={2}>{`${caregiver.communication} / 5`}</Typography>
                                    </Box>

                                    <Typography variant="body1" mb={1}>Cleanliness</Typography>
                                    <Box display="flex" justifyContent="center" alignItems="center" mb={3}>
                                        <StyledRating value={caregiver.cleanliness} readOnly precision={0.5} />
                                        <Typography variant="body1" ml={2}>{`${caregiver.cleanliness} / 5`}</Typography>
                                    </Box>

                                    <Typography variant="body1" mb={1}>Professionalism</Typography>
                                    <Box display="flex" justifyContent="center" alignItems="center" mb={3}>
                                        <StyledRating backgroundColor='red' value={caregiver.professionalism} readOnly precision={0.5} />
                                        <Typography variant="body1" ml={2}>{`${caregiver.professionalism} / 5`}</Typography>
                                    </Box>

                                    <Grid
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                        mb={3}
                                        backgroundColor="#F9FFFE"
                                        border={1}
                                        borderColor={'lightblue'}
                                        borderRadius={5}
                                        padding={1}>
                                        <Typography variant='h6' mr={1}>Overall Rating</Typography>
                                        <Rating value={caregiver.overall} readOnly />
                                    </Grid>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} md={5} lg={3}>
                    <Card sx={{ height: '100%'}}>
                        <CardContent >
                            {/* Section 2: Rate Caregiver */}
                            <Box mt={20} border={1} padding={5} borderRadius={8} borderColor={'lightblue'}>
                                <Typography mb={3} variant="h5">Rate Caregiver</Typography>

                                <Box display="flex" justifyContent={'center'} alignItems="center" mb={2}>
                                    <Typography variant="body1" mr={2}>Communication</Typography>
                                    <Rating
                                        value={ratings.communication}
                                        onChange={(event, newValue) => handleRatingChange('communication', newValue)}
                                        precision={0.5}
                                    />
                                </Box>
                                <Box display="flex" justifyContent={"center"} alignItems="center" mb={2}>
                                    <Typography variant="body1" mr={2}>Cleanliness</Typography>
                                    <Rating
                                        value={ratings.cleanliness}
                                        onChange={(event, newValue) => handleRatingChange('cleanliness', newValue)}
                                        precision={0.5}
                                    />
                                </Box>
                                <Box display="flex" justifyContent={"center"} alignItems="center" mb={3}>
                                    <Typography variant="body1" mr={2}>Professionalism</Typography>
                                    <Rating
                                        value={ratings.professionalism}
                                        onChange={(event, newValue) => handleRatingChange('professionalism', newValue)}
                                        precision={0.5}
                                    />
                                </Box>

                                <Box mt={2} mb={2}>
                                    <Typography variant="body1" style={{fontWeight:600}}>Overall Rating</Typography>
                                    <Rating 
                                    size='large'
                                    value={(ratings.communication + ratings.cleanliness + ratings.professionalism) / 3} readOnly />
                                </Box>
                                <Button variant="contained" color="primary" onClick={() => console.log('Submit Ratings', ratings)}>
                                    Submit
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default GuardianCaregiverRating;
