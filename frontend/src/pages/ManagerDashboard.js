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
import { ScheduleView } from 'react-schedule-view'

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

const data = [
  {
    name: "17 August 2023 , Thursday",
    events: [
      {
        startTime: 10,
        endTime: 12,
        title: "Check-in",
        description:
          "Follow the signs to the registration desk inside the north entrance",
      },
      {
        startTime: 16.5,
        endTime: 17.75,
        title: "Dinner & Team Forming",
      },
      {
        startTime: 18,
        endTime: 19,
        title: "Opening Keynote",
      },
    ],
  },

];

const valueFormatter = (value) => `${value}`;

const doctorSlots = [
  {
    name: 'Dr. R.M. Sampath Rathnayake',
    slots: [
      { day: 'Monday', time: '8.30 am - 10.30 am' },
      { day: 'Thursday', time: '4.30 pm - 5.30 pm' },
      { day: 'Sunday', time: '7.00 am - 9.00 am' },
    ],
  },
  // Add more doctors and their slots here
];


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
            <Grid item xs={6} sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>

              <Card sx={{ flex: 1 }}>
                <CardContent>
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
                    width={500}
                    height={200}
                  />
                </CardContent>
              </Card>
              <Card sx={{ flex: 1, mt: 2 }}>
                <CardContent>
                  {/* Content for the new card */}
                </CardContent>
              </Card>

            </Grid>


            <Grid item xs={6}>
              <Card sx={{ height: '100vh' }}>

                <CardContent>
                  <ScheduleView daySchedules={data} viewStartTime={6} viewEndTime={20} theme="apple" />
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



