import React from 'react'
import Sidebar from '../components/Sidebar'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import DrawerHeader from '@mui/material/Drawer'
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
import { ManagerMenuItem } from '../components/ManagerMenuItem'
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
//import { ChartsLegend } from '@mui/x-charts/ChartsLegend';
import Tooltip from '@mui/material/Tooltip'
import { axisClasses } from '@mui/x-charts';

import '../styles/ManagerDashboard.css';

function createData(Room_No, Type, Bed_1, Bed_2, Bed_3) {
  return { Room_No, Type, Bed_1, Bed_2, Bed_3 };
}



const chartSetting = {
  yAxis: [

  ],
  width: 300,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'rotate(-90deg) translate(0px, -20px)',
    },
  },
};
const dataset = [
  {
    '35-45': 2,
    '45-55': 12,
    Other: 6,
    Gender: 'Male',
  },
  {
    '35-45': 1,
    '45-55': 9,
    Other: 3,

    Gender: 'Female',
  },

];

const valueFormatter = (value) => `${value}`;


function ManagerDashboard() {
  return (
    <div className='dashboard'>
      <Header />
      <Box height={80} />
      <Box sx={{ display: 'flex' }}>
        <Sidebar menuItems={ManagerMenuItem} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
          <Grid container spacing={1} >
            <Grid item xs={12}>
              <Stack spacing={9} direction={'row'}>
              <Card sx={{ display: 'flex', minWidth: 30 + "%", height: 140 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography component="div" variant="h5">
                        06
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        Guardians' Requests
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
                

              </Stack>
            </Grid>
          </Grid>
          <Box height={40} />
          <Grid container spacing={2}>
            <Grid item xs={4}>


              <h2>Available Room Details</h2><br />
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 10, label: 'Classic' },
                      { id: 1, value: 15, label: 'Luxury' },
                      { id: 2, value: 5, label: 'Basic(M)' },
                      { id: 2, value: 5, label: 'Basic(F)' },
                    ],
                  },
                ]}
                width={400}
                height={200}
              />



            </Grid>
            <Grid item xs={4}>


              <h2>Available Caregiver Details</h2><br />
              <BarChart
                dataset={dataset}
                xAxis={[{ scaleType: 'band', dataKey: 'Gender' }]}
                series={[
                  { dataKey: '35-45', label: 'Age 35-45', valueFormatter },
                  { dataKey: '45-55', label: 'Age 45 -55', valueFormatter },
                  { dataKey: 'Other', label: 'Other', valueFormatter },

                ]}
                {...chartSetting}
              />


            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent>
                  <Typography component="div" variant="h5">
                    Available Time Slots for Doctors
                  </Typography>
                  <br />
                  <Typography variant="subtitle1" component="div" >
                    <ul style={{ listStyle: 'none', marginLeft: 10, textAlign: 'left' }}>
                      <li>Dr.R.M. Sampath Rathnayake</li>
                      <ul style={{ listStyle: 'none', marginLeft: 25, fontSize: '12px', textAlign: 'left' }}>
                        <li>Monday : 8.30 am - 10.30 am</li>
                        <li>Thursday : 4.30 pm - 5.30 pm </li>
                        <li>Sunday : 7.00 am - 9.00 am</li>
                      </ul>
                      <br></br>
                      <li>Dr.R.M. Sampath Rathnayake</li>
                      <ul style={{ listStyle: 'none', marginLeft: 25, fontSize: '12px', textAlign: 'left' }}>
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



