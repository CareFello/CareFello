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
import img_1 from '../assets/elderundercare.jpg'
import img_2 from '../assets/pendingcheckups.jpg'
import img_3 from '../assets/Checkuprequest.jpg'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DoctorMenuItem } from '../components/DoctorMenuItem'
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { ChartsLegend } from '@mui/x-charts/ChartsLegend';
import Tooltip from '@mui/material/Tooltip'
import { axisClasses } from '@mui/x-charts';
import '../styles/ManagerDashboard.css';
import Proimg from '../assets/profile1.png';
import "../styles/Doctordashboard.css"
import { withTheme } from '@emotion/react'
import { blueGrey } from '@mui/material/colors'
// import dayjs, { Dayjs } from 'dayjs';
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

  function createDataa(profileimg, name, time) {
    return { profileimg, name, time, };
}

const rows = [
  createDataa(Proimg, 'R.J.Premasiri','08.00 A.M'),
  createDataa( Proimg, 'M.F.Abdulla','10.00 A.M'),
  createDataa(Proimg, 'M.Mahendran','11.30 A.M'),
  createDataa(Proimg, 'G.T.Gunawardena','12.30 p.M'),

];

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



function DoctorDashboard() {
  return (
    <div className='dashboard'>
      <Header />
      <Box height={80} />
      <Box sx={{ display: 'flex' }}>
        <Sidebar menuItems={DoctorMenuItem} />
       
        <Box component="main" sx={{ flexGrow: 1, justifyContent:"center",alignItems:"center",margin:3}} >
          <Grid container spacing={3} sx={{justifyContent:"center",alignItems:"center" }}>
            
            <Grid item xs={12} sx={{backgroundColor:"#cacaca38", p:3,alignItems:"center" }}>
            <p style={{textAlign:"left", fontWeight:"bold",fontSize:20}}>Welcome Perera !</p>
              <Stack spacing={4} direction={'row'}>
                <Card sx={{ display: 'flex', minWidth: 30 + "%", height: 140 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', width:'100%' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography  component="div" variant="h2">
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
                <Card sx={{ display: 'flex', minWidth: 30 + "%", height: 140 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', width:'100%' }}>
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
                <Card sx={{ display: 'flex', minWidth: 30 + "%", height: 140 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', width:'100%' }}>
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
          <Grid item xs={4.5}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent>
                <div className="d-flex flex-column">
                  <p className="" style={{ fontWeight:'bolder',marginTop:"5px",color: "#000000", fontSize: "20px" }}>Checkup Schedule</p>
                        
                                            
     <div className="d-flex flex-column align-content-end">
          <TableContainer component={Paper}>
      <Table style={{  backgroundColor:'#D4F1F4', }} aria-label="simple table">
        
        {/* <TableHead>
          <TableRow>
            <TableCell >From</TableCell>
            <TableCell>To</TableCell>
            <TableCell align="center">Room No</TableCell>
            <TableCell align="center">Assigned Elders</TableCell>
          </TableRow>
        </TableHead> */}

        <TableBody sx={{}}>
          {rows.map((row) => (
            <TableRow key={row.name} style={{ borderBottom: '0.5px solid #ccc' }}>
              {/* <TableCell component="td" scope="row">
                {row.from}
              </TableCell> */}
              <TableCell>
              <img src={row.profileimg} alt={`Photo ${Proimg}`} style={{ width: '50px', height: '50px' }} />
            </TableCell>
              <TableCell fontWeight=
              "bolder" align="center">{row.name}</TableCell>
              <TableCell align="center">{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
    </div>  
    </div>
                </CardContent>
              </Card>
            </Grid>


          
            <Grid item xs={7} sx={{backgroundColor:"#fff", p:3,alignItems:"center" }}>

           
              <h2>Desease ratio</h2><br />
              <div className='doctor-pie-chart' style={{ backgroundColor: '#c5c7ca2e' }}>
              <PieChart className='piechart'
                series={[
                  {
                    data: [
                      { id: 0, value: 10, label: 'Diabeties',color: '#FF5733' },
                      { id: 1, value: 15, label: 'Heart Desease',color: '#007BFF' },
                      { id: 2, value: 5, label: 'Stroke' ,color: '#33C67F'},
                      { id: 2, value: 5, label: 'High Blood Pressure',color: '#FFC107' },
                    ],
                  },
                ]}
                backgroundColor={blueGrey}
                width={500}
                height={250}

             /></div>



            </Grid>
            
            {/* <Grid item xs={4}>
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
            </Grid> */}
            
          </Grid>
        </Box>
       

      </Box>

    </div>
  )
}

export default DoctorDashboard



