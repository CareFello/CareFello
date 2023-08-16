import React from 'react';
import Sidebar from '../../components/Sidebar';
import Box from '@mui/material/Box';
import { Divider, Typography } from '@mui/material';
import { CardActionArea } from '@mui/material';
import Header from '../../components/Header';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import { GuardianMenuItem } from '../../components/GuardianMenuItem';
import '../../styles/Guardian/GuardianDashboard.css';
import elderProfiles from '../../components/ElderCard';// Import your elder profiles data here
// import caregiverProfiles from './caregiverProfiles'; // Import your caregiver profiles data here
// import accommodationImages from './accommodationImages'; // Import your accommodation images data here



const caregiverProfiles = [
  {
    name: 'Ms.Pawani',
    age: 30,
    image: require('../../assets/C1.jpg'),
  },
  {
    name: 'Mr.Kasun',
    age: 28,
    image: require('../../assets/C2.jpg'),
  },
  {
    name: 'Ms.Deshani',
    age: 28,
    image: require('../../assets/C3.jpg'),
  },
  {
    name: 'Mr.Viranga',
    age: 28,
    image: require('../../assets/C4.jpg'),
  },
  // {
  //   name: 'Caregiver 2',
  //   age: 28,
  //   image: require('../../assets/C4.jpg'),
  // },
  
];

const accommodationImages = [
  // require('../../assets/accommodations/accommodation1.jpg'),
  // require('../../assets/accommodations/accommodation2.jpg'),
  // require('../../assets/accommodations/accommodation3.jpg'),
  // Add more accommodation images as needed
];

const GuardianDashboard = () => {

  return (
    <div className='dashboard'>
      <Header />
      <Box height={80} />
      <Box sx={{ display: 'flex' }}>
        <Sidebar menuItems={GuardianMenuItem} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
          <br />
          <Grid container spacing={1}>
            {/* Other grid items */}
            <Grid item xs={9} sx={{marginRight:"50px"}}>
              <Grid item xs={12} spacing={1}>
              <Stack display="flex" flexDirection={'row'}>
                  <Typography component="div" variant="h6" className='topic'>
                    Your Loved Ones
                  </Typography>
                  <div className="horizontal-line"></div>
                </Stack>
                <Stack spacing={3.3} direction={'row'} className='eldercards'>
                  {elderProfiles.map((elder, index) => (
                    <Card key={index} sx={{ minWidth: 165 }}
                    className={'elder-card'}>
                      <CardActionArea >
                        <CardMedia 
                          component="img"
                          height="110"
                          width="205"
                          image={elder.image}
                          alt={elder.name}
                          color='#05445E'
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {elder.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {elder.age} years
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  ))}
                </Stack>
              </Grid>
              <Grid item xs={12} spacing={1}>
              <Stack display="flex" flexDirection={'row'}>
                  <Typography component="div" variant="h6" className='topic'>
                    Assigned Caregivers
                  </Typography>
                  <div className="horizontal-line_2"></div>
                </Stack>
                <Stack spacing={3.3} direction={'row'} className='CGcards'>
                  {caregiverProfiles.map((caregiver, index) => (
                    <Card key={index} sx={{ minWidth: 165 }}
                    data-elder-index={caregiver.assignedTo} // Assign the corresponding elder's index
                      className={`caregiver-card caregiver-${index}`}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="100"
                          width="190"
                          image={caregiver.image}
                          alt={caregiver.name}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {caregiver.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {caregiver.age} years
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  ))}
                </Stack>
              </Grid>
              {/* Other grid items */}
            </Grid>
            <Grid item xs={2} sx={{marginLeft: "10px"}}>
            <div>
              <Card sx={{ Width:'80px', height: '550px', backgroundColor: 'white', marginTop: "10px"}} className={'elder-card'}>
                      <CardActionArea >
                        <CardContent className='payments'>
                        <Typography variant="h6" className='h6'>Pending Payments</Typography>
                        {/* <Typography variant="body1">You have pending payments for the following services at ElderCare Home:</Typography> */}
                        <List>
                          <ListItem>
                            <ListItemText primary="Monthly Residence Fee" secondary="$500" />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Medication Management" secondary="$50" />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Physical Therapy Sessions" secondary="$100" />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Transportation Services" secondary="$25" />
                          </ListItem>
                        </List>
                        {/* <Typography variant="body2">Please make the necessary payments to ensure continued care and support for your loved ones.</Typography> */}
                        </CardContent>
                      </CardActionArea>
                    </Card>
              </div>
            </Grid>
            {/* Accommodations Section */}
            <Grid item xs={12}>
              <Typography component="div" variant="h6">
                {/* Accommodations */}
              </Typography>
              <Stack spacing={2} direction={'row'}>
                {accommodationImages.map((image, index) => (
                  <Card key={index} sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      alt={`Accommodation ${index}`}
                      height="140"
                      image={image}
                    />
                  </Card>
                ))}
              </Stack>
              </Grid>

            </Grid>
            <Grid container spacing={1}>
              {/* Loved ones section
              <Grid item xs={9}>
                
              
              </Grid> */}
              <Grid utem xs={3} className='Pending Payments' sx={{boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'}}>
              
              </Grid>
              <br></br>
              {/* Assigned Caregivers Section */}
              <Box height={40} />
              <Grid item xs={9}>
                
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default GuardianDashboard;
