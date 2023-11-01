// import React, { useState } from 'react';
// import Sidebar from '../components/Sidebar';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Header from '../components/Header';
// import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Container from '@mui/material/Container';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'; // Make sure to import DateTimePicker
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'; // Make sure to import LocalizationProvider
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import dayjs from 'dayjs';
// import { DoctorMenuItem } from '../components/DoctorMenuItem'; // Make sure to import DoctorMenuItem
// import Stack from '@mui/material/Stack'; // Make sure to import Stack

// const DoctorUpdateAvailability = () => {
//   const [selectedDateTime, setSelectedDateTime] = useState(null);
//   const [timeSlots, setTimeSlots] = useState([]);

//   const handleDateTimeChange = (dateTime) => {
//     setSelectedDateTime(dateTime);
//   };

//   const handleAddTimeSlot = () => {
//     if (selectedDateTime) {
//       const formattedDateTime = dayjs(selectedDateTime).format('MM/DD/YYYY, h:mm A');
//       setTimeSlots([...timeSlots, formattedDateTime]);
//       setSelectedDateTime(null);
//     }
//   };

//   const handleDeleteTimeSlot = (index) => {
//     const updatedTimeSlots = [...timeSlots];
//     updatedTimeSlots.splice(index, 1);
//     setTimeSlots(updatedTimeSlots);
//   };

//   return (
//     <div className='dashboard'>
//       <Header />
//       <Box height={80} />

//       <Box sx={{ display: 'flex' }}>

//         <Sidebar menuItems={DoctorMenuItem} />

//         <Box component="main" sx={{ flexGrow: 1, justifyContent: "center", alignItems: "center", margin: 3 }}>
//           <Grid container spacing={3} sx={{ justifyContent: "center", alignItems: "center" }}>

//             <Grid item xs={12} sx={{ backgroundColor: "#cacaca38", p: 3, alignItems: "center" }}>
//               <Typography variant="h4">Welcome Perera!</Typography>
//               <Stack spacing={4} direction={'row'}>
//                 {/* ... Card components ... */}
//               </Stack>
//             </Grid>
//           </Grid>
//           <Box height={40} />
//           <Grid container spacing={5}>
//             <Card sx={{ height: '60vh', width: '100%' }}>
//               <CardContent>
//                 <Typography variant="h4">Checkup Schedule</Typography>
//                 <div style={{ display: 'flex' }}>
//                   <Card sx={{ flex: '0 0 50%', height: '60vh' }}>
//                     <Typography variant="h5">Add Time Slots</Typography>
//                     <LocalizationProvider dateAdapter={AdapterDayjs}>
//                       <Grid container spacing={2}>
//                         <Grid item xs={6}>
//                           <DateTimePicker
//                             label="Select Date and Time"
//                             value={selectedDateTime}
//                             onChange={handleDateTimeChange}
//                             fullWidth
//                           />
//                         </Grid>
//                         <Grid item xs={3}>
//                           <Button
//                             variant="contained"
//                             color="primary"
//                             onClick={handleAddTimeSlot}
//                             disabled={!selectedDateTime}
//                             style={{ marginTop: '16px' }}
//                           >
//                             Add Time Slot
//                           </Button>
//                         </Grid>
//                       </Grid>
//                     </LocalizationProvider>
//                   </Card>
//                   <Container>
//                     <Card sx={{ flex: '0 0 50%', height: '60vh' }}>
//                       <Typography variant="h5">Available Time Slots</Typography>
//                       <TableContainer component={Paper}>
//                         <Table>
//                           <TableHead>
//                             <TableRow>
//                               <TableCell>Date</TableCell>
//                               <TableCell>Time</TableCell>
//                               <TableCell>Action</TableCell>
//                             </TableRow>
//                           </TableHead>
//                           <TableBody>
//                             {timeSlots.map((slot, index) => (
//                               <TableRow key={index}>
//                                 <TableCell>{slot.split(', ')[0]}</TableCell>
//                                 <TableCell>{slot.split(', ')[1]}</TableCell>
//                                 <TableCell>
//                                   <IconButton
//                                     aria-label="Delete"
//                                     onClick={() => handleDeleteTimeSlot(index)}
//                                     style={{ color: 'red' }}
//                                   >
//                                     <DeleteIcon />
//                                   </IconButton>
//                                 </TableCell>
//                               </TableRow>
//                             ))}
//                           </TableBody>
//                         </Table>
//                       </TableContainer>
//                     </Card>
//                   </Container>
//                 </div>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Box>
//       </Box>
//     </div>
//   );
// };

// export default DoctorUpdateAvailability;
