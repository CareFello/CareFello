import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Avatar,
  Grid,
  Card,
  Stack,
  CardContent,
  CardMedia,

} from '@mui/material';
import { GuardianMenuItem } from '../../components/GuardianMenuItem';
import pro from '../../assets/avatar.png';
import '../../styles/Guardian/ElderProfile.css';
import { TextInput, Label, FileInput } from "flowbite-react"
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
function ElderProfile() {

  const { elderId } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const guardianId = queryParams.get('guardianId');

  const [elder, setElder] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch elder data by elderId and guardianId
    axios
      .get(`http://localhost:8080/api/v1/guardian/${guardianId}/elders/${elderId}`)
      .then((response) => {
        setElder(response.data);
      })
      .catch((error) => {
        console.error('Error fetching elder data:', error);
      });
  }, [elderId, guardianId]);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedImage) {
      setMessage('Please select an image file.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('imageFile', selectedImage);

      const response = await axios.put(`http://localhost:8080/api/v1/guardian/${guardianId}/elders/${elderId}/updateImage`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        setMessage('Elder image updated successfully.');
        window.location.reload();
      } else {
        setMessage('Error occurred while updating elder image.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred while updating the image.');
    }
  };

  if (!elder) {
    return <div>Loading...</div>; // You can display a loading indicator
  }

  return (
    <div >
      <Header />
      <Box height={80} />
      <Box sx={{ display: 'flex' }}>
        <Sidebar menuItems={GuardianMenuItem} />
        <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
          <Container>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4} lg={3}>
                    <Box sx={{ position: 'relative' }}>
                      <Avatar
                        alt="Elder's Photo"
                        src={elder.image ? `data:image/jpeg;base64,${elder.image}` : pro}
                        sx={{ width: 120, height: 120, alignSelf: 'center', marginLeft: 7 }}
                      />
                      <div className="mb-2 block">

                      </div>
                      <input type="file" accept=".jpg, .jpeg, .png" onChange={handleImageChange} />
                      <br />
                      <br />
                      <Button onClick={handleSubmit} variant="contained" color="primary">
                        Upload Image
                      </Button>
                      <div>{message}</div>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={8} lg={9}>
                    <Grid container spacing={2}>
                      <Grid item xs={4} className='text-left'>
                        <Label
                          htmlFor="small"
                          value="Full Name"
                        />
                        <TextInput
                          disabled
                          fullWidth
                          placeholder={elder.name}

                        // Add value and onChange props for the name field
                        />
                      </Grid>
                      <Grid item xs={4} className='text-left'>
                        <Label
                          htmlFor="small"
                          value="Gender"
                        />
                        <TextInput
                          disabled
                          fullWidth
                          label="NIC"
                          variant="outlined"
                          placeholder={elder.gender}
                        // Add value and onChange props for the NIC field
                        />
                      </Grid>
                      <Grid item xs={4} className='text-left'>
                        <Label
                          htmlFor="small"
                          value="Date of Birth"
                        />
                        <TextInput
                          disabled
                          fullWidth
                          label="Birthday"
                          variant="outlined"
                          placeholder={elder.dob}
                        // Add value and onChange props for the birthday field
                        />

                      </Grid>
                      <Grid item xs={6} className='text-left'>
                        <Label
                          htmlFor="small"
                          value="National Identity Card No"
                        />
                        <TextInput
                          disabled
                          fullWidth
                          placeholder={elder.nic}

                        // Add value and onChange props for the name field
                        />
                      </Grid>
                      <Grid item xs={6} className='text-left'>
                        <Label
                          htmlFor="small"
                          value="Relationship to Guardian"
                        />
                        <TextInput
                          disabled
                          fullWidth
                          label="Relationship to Guardian"
                          variant="outlined"
                          placeholder={elder.relationship}
                        // Add value and onChange props for the NIC field
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Container>
        </Box>
      </Box>
    </div>
  );
}

export default ElderProfile;
