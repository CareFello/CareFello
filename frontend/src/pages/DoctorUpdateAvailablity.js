import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
// import DrawerHeader from '@mui/material/DrawerHeader';
import Header from '../components/Header';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ElderlyIcon from '@mui/icons-material/Elderly';
import Stack from '@mui/material/Stack';
import img_1 from '../assets/elderundercare.jpg';
import img_2 from '../assets/pendingcheckups.jpg';
import img_3 from '../assets/Checkuprequest.jpg';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DoctorMenuItem } from '../components/DoctorMenuItem';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { ChartsLegend } from '@mui/x-charts/ChartsLegend';
import Tooltip from '@mui/material/Tooltip';
import { axisClasses } from '@mui/x-charts';
import '../styles/ManagerDashboard.css';
import Proimg from '../assets/profile1.png';
import '../styles/Doctordashboard.css';
import { withTheme } from '@emotion/react';
import { blueGrey } from '@mui/material/colors';
import { Button } from '@mui/material';
import {
  Container,
  TextField,
  IconButton,
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import DeleteIcon from '@mui/icons-material/Delete';

const DoctorUpdateAvailability = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);

  const handleDateTimeChange = (dateTime) => {
    setSelectedDateTime(dateTime);
  };

  
  const handleAddTimeSlot = () => {
    if (selectedDateTime) {
      const formattedDateTime = dayjs(selectedDateTime).format('MM/DD/YYYY, h:mm A');
      setTimeSlots([...timeSlots, formattedDateTime]);

      // Reset date and time selection
      setSelectedDateTime(null);
    }
  };

  const handleDeleteTimeSlot = (index) => {
    const updatedTimeSlots = [...timeSlots];
    updatedTimeSlots.splice(index, 1);
    setTimeSlots(updatedTimeSlots);
  };

  return (
    <div className='dashboard'>
      <Header />
      <Box height={80} />
      <Box sx={{ display: 'flex' }}>
        <Sidebar menuItems={DoctorMenuItem} />

        <Box component="main" sx={{ flexGrow: 1, justifyContent: "center", alignItems: "center", margin: 3 }}>
          <Grid container spacing={3} sx={{ justifyContent: "center", alignItems: "center" }}>

            <Grid item xs={12} sx={{ backgroundColor: "#cacaca38", p: 3, alignItems: "center" }}>
              <p style={{ textAlign: "left", fontWeight: "bold", fontSize: 20 }}>Welcome Perera !</p>
              <Stack spacing={4} direction={'row'}>

                <Button
                  onClick={() => {
                    alert('clicked');
                  }}
                >
                  <Card sx={{ display: 'flex', minWidth: '30%', height: 140 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                      <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h2">
                          18
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                          Total Elders Under Care
                        </Typography>
                      </CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                      </Box>
                    </Box>
                  </Card>
                </Button>

                <Card sx={{ display: 'flex', minWidth: '30%', height: 140 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <CardContent sx={{ flex: '1 0 auto', }}>
                      <Typography component="div" variant="h2">
                        06
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        Today Pending Checkups
                      </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                    </Box>
                  </Box>

                </Card>
                <Card sx={{ display: 'flex', minWidth: '30%', height: 140 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography component="div" variant="h2">
                        03
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        Checkup Requests
                      </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                    </Box>
                  </Box>

                </Card>

              </Stack>
            </Grid>
          </Grid>
          <Box height={40} />
          <Grid container spacing={5}>

            <Card sx={{ height: '60vh', width: '100%' }}>
              <CardContent>

                <p className="" style={{ fontWeight: 'bolder', marginTop: "5px", color: "#000000", fontSize: "25px" }}>Checkup Schedule</p>
                <div style={{ display: 'flex' }}>
                  <Card sx={{ flex: '0 0 50%', height: '60vh' }}>
                    {/* Content for the left card */}
                    
                    <p className="" style={{ fontWeight: 'bolder', marginTop: "5px", color: "#000000", fontSize: "20px" }}>Add Time Slots</p>
                  
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <DateTimePicker
                            label="Select Date and Time"
                            value={selectedDateTime}
                            onChange={handleDateTimeChange}
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={3}>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleAddTimeSlot}
                            disabled={!selectedDateTime}
                            style={{ marginTop: '16px' }}
                          >
                            Add Time Slot
                          </Button>
                        </Grid>
                      </Grid>
                    </LocalizationProvider>
                  </Card>
                  <Container>
                    <Card sx={{ flex: '0 0 50%', height: '60vh' }}>
                      {/* Content for the right card */}
                      <Box mt={2}>
                      <p className="" style={{ fontWeight: 'bolder', marginTop: "5px", color: "#000000", fontSize: "20px" }}>Available Time Slots</p>
                        <TableContainer component={Paper}>
                          <Table>
                            <TableHead>
                              <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>Time</TableCell>
                                <TableCell>Action</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {timeSlots.map((slot, index) => (
                                <TableRow key={index}>
                                  <TableCell>{slot.split(', ')[0]}</TableCell>
                                  <TableCell>{slot.split(', ')[1]}</TableCell>
                                  <TableCell>
                                  <IconButton
                                      aria-label="Delete"
                                     onClick={() => handleDeleteTimeSlot(index)}
                                      style={{ color: 'red' }}
                                    >
                                     <DeleteIcon />
                                    </IconButton>

                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Box>
                    </Card>
                  </Container>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default DoctorUpdateAvailability;
