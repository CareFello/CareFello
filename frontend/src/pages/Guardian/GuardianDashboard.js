import React from 'react';
import { useState, useEffect } from 'react';
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
import axios from 'axios';
import { useParams } from 'react-router-dom';


import elderProfiles from '../../components/ElderCard';// Import your elder profiles data here
import ElderCard from '../../components/ElderCard';
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


];




const GuardianDashboard = () => {

  // Inside your component function
  const { guardianId } = useParams();
  console.log(guardianId)

  const [people, setPeople] = useState([]);
  const [people1, setPeople1] = useState([]);
  const [people2, setPeople2] = useState([]);

  const handlePayment = async (id) => {

    console.log(id);
    try {
      await axios.put(`http://localhost:8080/api/beds/request40/${id}`);
      // axios.get('http://localhost:8080/api/persons/get')
      // .then((response) => setPeople(response.data))
      // .catch((error) => console.error(error));
      
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };


  useEffect(() => {
    // Make the GET request using Axios to fetch data from the backend
    axios.get(`http://localhost:8080/api/beds/request21/${guardianId}`)
      .then((response) => setPeople(response.data))
      .catch((error) => console.error(error));
      console.log(people)
  }, []);



  useEffect(() => {
    // Make the GET request using Axios to fetch data from the backend
    axios.get(`http://localhost:8080/api/beds/request30/${guardianId}`)
      .then((response) => setPeople1(response.data))
      .catch((error) => console.error(error));
      console.log(people1)
  }, []);

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
            <Grid item xs={9} sx={{ marginRight: "50px" }}>
              <Grid item xs={12} spacing={1}>
                <Stack display="flex" flexDirection={'row'}>
                  <Typography component="div" variant="h6" className='topic'>
                    Your Loved Ones
                  </Typography>
                  <div className="horizontal-line"></div>
                </Stack>
                <Stack spacing={3.3} direction={'row'} className='eldercards'>

                  <ElderCard guardianId={guardianId} />

                </Stack>
              </Grid>
              {/* <Grid item xs={10} spacing={1}>
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
              </Grid> */}
              {/* Other grid items */}
            </Grid>
            <Grid item xs={2} sx={{ marginLeft: "10px" }}>
              <div>
                <Card sx={{ Width: '80px', height: '550px', backgroundColor: 'white', marginTop: "10px" }} className={'elder-card'}>
                  <CardActionArea >
                    <CardContent className='payments'>
                      <Typography variant="h6" className='h6'>Pending Payments</Typography>
                      {/* <Typography variant="body1">You have pending payments for the following services at ElderCare Home:</Typography> */}
                      <List>
                        {people.map((person) => (
                          <ListItem key={person.id}>
                          <ListItemText primary={person.name} secondary={person.price} />
                          <button onClick={() => handlePayment(person.id)}>Pay</button>
                        </ListItem>
                        ))}
                        
                        
                      </List>
                      <Typography variant="h6" className='h6'>Pending Requests</Typography>
                      <List>
                        {people1.map((person1) => (
                          <ListItem key={person1.id}>
                          <ListItemText primary="Saman Perera" secondary={person1.assStartDate}/>
                          
                        </ListItem>
                        ))}
                        
                        
                      </List>
                      {/* <Typography variant="body2">Please make the necessary payments to ensure continued care and support for your loved ones.</Typography> */}
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            </Grid>
            {/* Accommodations Section */}


          </Grid>
          <Grid container spacing={1}>
            {/* Loved ones section
              <Grid item xs={9}>
                
              
              </Grid> */}
            <Grid utem xs={3} className='Pending Payments' sx={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>

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
