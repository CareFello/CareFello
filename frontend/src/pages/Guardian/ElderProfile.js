import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import PdfViewer from '../../components/PdfViewer';
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
import { HiOutlineArrowRight, HiShoppingCart } from 'react-icons/hi';


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
  const [idi, setIdi] = useState('');
  const [filee, setFilee] = useState(null);
  const [pdfFiles, setPdfFiles] = useState([]);
  const [pdfBlobUrl, setPdfBlobUrl] = useState('');
  const [people2, setPeople2] = useState([]);

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
      .then((response) => {
        setHistory(response.data);



      })
      .catch((error) => {
        console.error('Error fetching elder data:', error);
      });
  }, []);

  // const getPdfUrl = async (id) => {

  //   try {
  //     axios
  //     .get(`http://localhost:8080/api/v1/elderMedical/${id}/medicalReports/downloadReport/${id}`)
  //     .then((response) =>{
  //       return response.data;



  //       })
  //   } catch (error) {
  //     console.error('Error creating PDF URL:', error);
  //     return null;
  //   }
  // };

  const openPdfInNewTab = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/elderMedical/${id}/medicalReports/downloadReport/${id}`, {
        responseType: 'arraybuffer', // Specify responseType as 'arraybuffer' to handle binary data
      });

      const blob = new Blob([response.data], { type: 'application/pdf' });
      const blobUrl = URL.createObjectURL(blob);

      // Open the PDF in a new tab
      const newWindow = window.open(blobUrl, '_blank');
      if (newWindow) {
        newWindow.focus();
      } else {
        console.error('A popup blocker may be preventing the new tab from opening.');
      }
    } catch (error) {
      console.error('Error opening PDF:', error);
    }
  };



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
  const [task, setTask] = useState(''); 
  const [des, setDes] = useState(''); 
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');


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

  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const handleOpenModal1 = () => {
    setIsModalOpen1(true);
  };

  const handleCloseModal1 = () => {
    setIsModalOpen1(false);
  };

  const check = async (id) => {

    console.log(id);

    setIdi(id);
    handleOpenModal1();

    // try {
    //   await axios.delete(`http://localhost:8080/api/persons/delete/${id}`);
    //   axios.get('http://localhost:8080/api/persons/get')
    //   .then((response) => setPeople(response.data))
    //   .catch((error) => console.error(error));

    // } catch (error) {
    //   console.error('Error deleting employee:', error);
    // }
  };

  const addPdf = async (e) => {
    e.preventDefault();
    console.log(idi);

    if (!filee) {
      setMessage('Please select a Pdf file.');
      return;
    }

    try {
      const formData1 = new FormData();
      formData1.append('pdfFile', filee); // Assuming "pdfFile" is the field name on the server

      await axios.post(`http://localhost:8080/api/v1/elderMedical/${idi}/medicalReports/addReports`, formData1, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Consider using React state and not a full page reload
      alert("Successfully uploaded PDF");
      window.location.reload();

      // You can handle the success state here instead of a full page reload
      // Set a success state or update the UI accordingly
    } catch (error) {
      console.error('Error adding Pdf:', error);
      alert("Error adding Pdf");
    }
  };
  
  useEffect(() => {
    // Fetch the list of PDF files using Axios.
    axios.get(`http://localhost:8080/api/v1/dailyTask/viewTask/${elderId}`)
      .then((response) => {
        setPeople2(response.data);
      })
      .catch((error) => {
        console.error('Error fetching PDF list:', error);
      });
  }, []);

  async function save1(event){
    event.preventDefault();
          try {
              await axios.post(`http://localhost:8080/api/v1/dailyTask/addTask/${elderId}`, {
                  taskName: task,
                  description: des,
                  time: time,
                  date: date
                  
              });
  
              alert("Task added");
              window.location.reload();
  
          } catch (err) {
              alert(err);
          }
  }


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
              <Grid item xs={8} md={12} lg={8}>
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
                          <TableCell>Files</TableCell>
                          <TableCell>Actions</TableCell>
                        </TableHead>
                        {history.map((hist) => (
                          <TableBody key={hist.id}>
                            <TableCell>{hist.disease}</TableCell>
                            <TableCell>{hist.description}</TableCell>
                            <TableCell><Button outline onClick={() => openPdfInNewTab(hist.id)}>{hist.name}</Button></TableCell>
                            <TableCell><Button pill onClick={() => check(hist.id)}>Files</Button></TableCell>
                          </TableBody>
                        ))}

                        <Modal open={isModalOpen1} onClose={handleCloseModal1}>
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
                              onClick={handleCloseModal1}
                            >
                              <IoCloseSharp /> {/* Replace with your close icon component */}
                            </IconButton>
                            <Typography variant="h6">Add history reports</Typography>
                            <form >

                              <input type="file" accept=".pdf" onChange={(event) => {
                                setFilee(event.target.files[0]);
                              }} />
                              <p>only pdf files are acceptable</p>


                              <Button type="submit" variant="contained" sx={{ mt: 2 }} onClick={addPdf} >
                                Upload
                              </Button>
                            </form>
                          </Box>
                        </Modal>

                      </Table>
                    </TableContainer>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4} md={12} lg={4}>
                <Card>
                  <CardContent>
                    <Typography>Add Task and medication</Typography>
                    <br />
                    <TextInput
                      placeholder='Task/Medication name'
                      type='text'
                      className='mb-2'

                      value={task}
                      onChange={(event) => {
                      setTask(event.target.value);
                      }}
                    />
                    <TextInput
                      placeholder='description'
                      type='text'
                      className='mb-2'

                      value={des}
                      onChange={(event) => {
                      setDes(event.target.value);
                      }}
                    />
                    <TextInput
                      placeholder='Date'
                      type='date'
                      className='mb-2'

                      value={date}
                      onChange={(event) => {
                      setDate(event.target.value);
                      }}
                    />
                    <TextInput
                      placeholder='description'
                      type='time'
                      className='mb-2'

                      value={time}
                      onChange={(event) => {
                      setTime(event.target.value);
                      }}
                    />
                    <div className="flex items-center space-x-2">
                      <Button onClick={save1}>Add</Button>
                      <Button>
                        View All Task
                        <HiOutlineArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>

                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={7} md={12} lg={7}>
                <Card>
                  <CardContent>
                    <Typography>Task List</Typography>
                    <br />
                    <TableContainer>
                      <Table>
                        <TableHead>
                          <TableCell>Task</TableCell>
                          <TableCell>Description</TableCell>
                          <TableCell>Date</TableCell>
                          <TableCell>Time</TableCell>
                        </TableHead>
                        {people2.map((person2) => (
                          <TableBody key={person2.date}>
                            <TableCell>{person2.taskName}</TableCell>
                            <TableCell>{person2.description}</TableCell>
                            <TableCell>{person2.date}</TableCell>
                            <TableCell>{person2.time}</TableCell>
                          </TableBody>
                          ))}
                          </Table>
                          </TableContainer>
                        
                    

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
