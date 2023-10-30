import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import {
  Box,
  Container,
  TextField,

  Typography,
  Avatar,
  Grid,
  Card,
  Stack,
  CardContent,
  CardMedia,
  IconButton, Modal, TableContainer, TableCell, Table, TableBody
} from '@mui/material';
import { GuardianMenuItem } from '../../components/GuardianMenuItem';
import pro from '../../assets/avatar.png';
import '../../styles/Guardian/ElderProfile.css';
import { Button, TextInput, Label, FileInput, Checkbox, Textarea } from "flowbite-react"
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { BiAddToQueue, BiCloset } from 'react-icons/bi';
import { IoCloseSharp } from 'react-icons/io5'
import { TableHead } from 'flowbite-react/lib/esm/components/Table/TableHead';

function ElderProfile() {

  const { elderId } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const guardianId = queryParams.get('guardianId');

  const [elder, setElder] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [message, setMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [history, setHistory] = useState([]);

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


  useEffect(() => {
    // Fetch elder data by elderId and guardianId
    axios
      .get(`http://localhost:8080/api/v1/guardian/${guardianId}/elders/${elderId}/viewHistory`)
      .then((response) => 
        setHistory(response.data)
      )
      .catch((error) => {
        console.error('Error fetching elder data:', error);
      });
  }, []);

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

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [disease, setDisease] = useState("");
  const [description, setDescription] = useState("");

  async function save(event) {
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8080/api/v1/guardian/${guardianId}/elders/${elderId}/addHistory`, {
        disease: disease,
        description: description
      });

      console.log(response);
      if (response.status == 200) {
        alert("Medical History added");
        window.location.reload();
      } else {
        console.error('Error:', response);
        alert('Error adding elder: ' + response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error adding elder: ' + error.message);
    }
  }

  if (!elder) {
    return <div>Loading...</div>; // You can display a loading indicator
  }

  const check = async (id) => {

    console.log(id);
    // try {
    //   await axios.delete(`http://localhost:8080/api/persons/delete/${id}`);
    //   axios.get('http://localhost:8080/api/persons/get')
    //   .then((response) => setPeople(response.data))
    //   .catch((error) => console.error(error));
      
    // } catch (error) {
    //   console.error('Error deleting employee:', error);
    // }
  };

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
                      <Button onClick={handleSubmit} variant="contained" style={{ border: "blue" }}>
                        Upload Image
                      </Button>
                      <div>{message}</div>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={8} lg={9}>
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
            <Box height={40} />
            <Grid container spacing={2}>
              <Grid item xs={6} md={12} lg={6}>
                <Card>
                  <CardContent>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Typography variant='h6' >Medical History & Reports </Typography>
                      <Button variant="contained" onClick={handleOpenModal} sx={{

                        top: '20px', // Adjust the margin top as needed
                        left: '50px',
                        zIndex: 1, // Ensure the button appears above other content
                      }}>
                        Add Medical History
                      </Button>
                      <Modal open={isModalOpen} onClose={handleCloseModal}>
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
                          <IconButton
                            sx={{
                              position: 'absolute',
                              top: 0,
                              right: 0,
                              zIndex: 1, // Ensure the close button appears above the content
                            }}
                            onClick={handleCloseModal}
                          >
                            <IoCloseSharp /> {/* Replace with your close icon component */}
                          </IconButton>
                          <Typography variant="h6">Add Medical History</Typography>
                          <form >
                            <TextInput
                              id="name"
                              sizing="md"
                              type="text"
                              className='mb-2'
                              placeholder='Disease / Surgery '
                              value={disease}
                              onChange={(event) => {
                                setDisease(event.target.value);
                              }}

                            />
                            <Textarea
                              id="name"
                              sizing="md"
                              type="text"
                              className='mb-2'
                              placeholder='Enter Description '
                              value={description}
                              onChange={(event) => {
                                setDescription(event.target.value);
                              }}

                            />


                            <Button type="submit" variant="contained" sx={{ mt: 2 }} onClick={save} >
                              Submit
                            </Button>
                          </form>
                        </Box>
                      </Modal>
                      
                    </div>
                    <TableContainer>
                        <Table>
                          <TableHead>
                            <TableCell>Disease</TableCell>
                            <TableCell>Descriptions</TableCell>
                            <TableCell>Actions</TableCell>
                          </TableHead>
                          {history.map((hist) => (
                            <TableBody key={hist.id}>
                            <TableCell>{hist.disease}</TableCell>
                            <TableCell>{hist.description}</TableCell>
                            <TableCell><button onClick={() => check(hist.id)}>Check</button></TableCell>
                          </TableBody>
                          ))}
                          
                          
                          
                        </Table>
                      </TableContainer>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={12} lg={6}>
                <Card>
                  <CardContent>

                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>

    </div>
  );
}

export default ElderProfile;
