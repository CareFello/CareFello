import React from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import { Box, Typography, Grid, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import { Edit } from '@mui/icons-material'; // Import the Edit icon
import { GuardianMenuItem } from '../../components/GuardianMenuItem';

import img_1 from '../../assets/guardian/elder1.jpeg';
import img_2 from '../../assets/guardian/cb.jpg';
import '../../styles/Guardian/ElderProfile.css';

const sections = [
  { title: 'Caregiver', image: img_2, description: 'Check out and rate/review caregiver' },
  { title: 'Medication', image: img_2, description: 'Check out and add medication' },
  { title: 'Daily Activities', image: img_2, description: 'Check out and add daily activities' },
  { title: 'Daily Reports', image: img_2, description: 'Check out daily reports' },
  { title: 'Contact Caregiver', image: img_2, description: 'Contact the caregiver' },
  { title: 'Accommodation', image: img_2, description: 'Send accomodation requests' },
];

const ElderProfile = () => {

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center", height: "100vh", backgroundColor: "#F9FFFE"
    }}>
      <Header />
      <Box height={80} />

      <Box sx={{ display: "flex" }}>
        <Sidebar menuItems={GuardianMenuItem} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          
          {/* Elder's Image and Name */}
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2, p: 2 }}>
            <img component="img" alt="Elder" height="150" width="120" src={img_1} />
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", p: 2 }}>
              <Typography variant="h5">Elder's Name</Typography>
              <IconButton>
                <Edit />
              </IconButton>
            </Box>

          </Box>

          {/* Sections */}

          <Grid container spacing={2} p={2}>
            {sections.map((section) => (
              <Grid key={section.title} item xs={12} sm={6} md={4}>
                <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="div">
                      {section.title}
                    </Typography>
                    <Typography variant="body2">{section.description}</Typography>
                  </CardContent>
                  <CardMedia component="img" alt={section.title} height="100" src={section.image} />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default ElderProfile;
