import React from 'react'
import Sidebar from '../components/Sidebar'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import DrawerHeader from '@mui/material/Drawer'
import '../styles/Dashboard.css'
import Header from '../components/Header'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ElderlyIcon from '@mui/icons-material/Elderly';
import Stack from '@mui/material/Stack';
import img_1 from '../assets/Happy_Elder.jpeg'
import img_2 from '../assets/caregiver.jpg'
import img_3 from '../assets/appoinment.jpg'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];



function ManagerDashboard() {
  return (
    <div>
      <Header />
      <Box height={80} />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
          <Grid container spacing={1} >
            <Grid item xs={12}>
              <Stack spacing={9} direction={'row'}>
                <Card sx={{ display: 'flex', minWidth: 30 + "%", height: 140 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography component="div" variant="h5">
                        78
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        Active Elders
                      </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                    </Box>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{ width: 75 + "%" }}
                    image={img_1}
                    alt="Live from space album cover"
                  />
                </Card>
                <Card sx={{ display: 'flex', minWidth: 30 + "%", height: 140 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto', }}>
                      <Typography component="div" variant="h5">
                        36
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        Active Caregivers
                      </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                    </Box>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{ width: 75 + "%" }}
                    image={img_2}
                    alt="Live from space album cover"
                  />
                </Card>
                <Card sx={{ display: 'flex', minWidth: 30 + "%", height: 140 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography component="div" variant="h5">
                        06
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        Guardian Requests
                      </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                    </Box>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{ width: 75 + "%" }}
                    image={img_3}
                    alt="Live from space album cover"
                  />
                </Card>

              </Stack>
            </Grid>
          </Grid>
          <Box height={40} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent>
                  <h2>Available Room Details</h2><br />
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Dessert (100g serving)</TableCell>
                          <TableCell align="right">Calories</TableCell>
                          <TableCell align="right">Fat&nbsp;(g)</TableCell>
                          <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                          <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent>
                  <Typography component="div" variant="h5">
                    Doctor's Available Time Slot
                  </Typography>
                  <br />
                  <Typography variant="subtitle1" component="div" >
                    <ul style={{ listStyle: 'none', marginLeft: 10, textAlign: 'left' }}>
                      <li>Dr.R.M. Sampath Rathnayake</li>
                      <ul style={{ listStyle: 'none', marginLeft: 25, textAlign: 'left' }}>
                        <li>Monday : 8.30 am - 10.30 am</li>
                        <li>Thursday : 4.30 pm - 5.30 pm </li>
                        <li>Sunday : 7.00 am - 9.00 am</li>
                      </ul>
                      <br></br>
                      <li>Dr.R.M. Sampath Rathnayake</li>
                      <ul style={{ listStyle: 'none', marginLeft: 25, textAlign: 'left' }}>
                        <li>Monday : 8.30 am - 10.30 am</li>
                        <li>Thursday : 4.30 pm - 5.30 pm </li>
                        <li>Sunday : 7.00 am - 9.00 am</li>
                      </ul>
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

      </Box>

    </div>
  )
}

export default ManagerDashboard



