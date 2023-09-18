import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { DoctorMenuItem } from '../components/DoctorMenuItem';
import Box from '@mui/material/Box';
import Img1 from '../assets/E4.jpg';
import Img2 from '../assets/E5.jpg';
const dataFromDatabase = [
  {
    id: 1,
    Name: 'P. Perera',
    description: 'Description for Elder 1',
    imageUrl: Img1,
  },
  {
    id: 2,
    Name: 'G.K Gunasekara',
    description: 'Description for Elder 2',
    imageUrl: Img2,
  },
  // Add more data items as needed
];

const cardImageStyle = {
    width: '100%', // Set the desired width
    height: '200px', // Set the desired height
    objectFit: 'cover', // Preserve aspect ratio and cover the entire space
  };

const DoctorViewEldersList = () => {
  return (
    <div>
      <Header />
      <Box height={80} />

      <Box sx={{ml: 30 }}>
      <Sidebar menuItems={DoctorMenuItem} />
     
      <div className='dashboard__content'> 
      
        <Grid container spacing={2}>
          {dataFromDatabase.map((elder) => (
            <Grid item xs={2} sm={2} md={2} key={elder.id}>
              <Link to={`/elder-details/${elder.id}`} style={{ textDecoration: 'none' }}>
                <Card>
                <img src={elder.imageUrl} alt={elder.title} style={cardImageStyle} />
                  <CardContent>
                    <Typography item xs={4} sm={4} md={4} variant="h6" component="div">
                      {elder.Name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {elder.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
    </div>
     </Box>
    </div>
    
  );
};

export default DoctorViewEldersList;
