import React from 'react'
import Sidebar from '../../components/Sidebar'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import { CardActionArea } from '@mui/material';
//import DrawerHeader from '@mui/material/Drawer'
import Header from '../../components/Header'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import ElderlyIcon from '@mui/icons-material/Elderly';
import Stack from '@mui/material/Stack';
import img_1 from '../../assets/guardian/elder1.jpeg'
import img_2 from '../../assets/guardian/elder2.jpeg'
import img_3 from '../../assets/guardian/elder3.jpeg'
import img_4 from '../../assets/guardian/acc1.jpg'
import img_5 from '../../assets/guardian/acc2.jpg'
import img_6 from '../../assets/guardian/acc3.jpg'
// import Paper from '@mui/material/Paper';
// import { DateCalendar } from '/packages/x-date-pickers/src';

import '../../styles/Guardian/GuardianDashboard.css';


const GuardianDashboard = () => {
  return (

    <div className='dashboard'>
      <Header />
      <Box height={80} />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
          <Typography component="div" variant="h5">
            Welcome Back, Ramza!
          </Typography>
          <br />
          <Grid container spacing={1}>
            {/* Loved ones section */}
            <Grid item xs={9}>
              <Typography component="div" variant="h6">
                Your Loved Ones<hr width="600"></hr>
              </Typography>
              <Stack spacing={2} direction={'row'}>
                <Card sx={{ maxWidth: 245 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={img_2}
                      alt="Mrs.Priyanthi"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Mrs.Priyanthi
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        76 years
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 245 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={img_1}
                      alt="Mrs.Priyanthi"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Mr.Sunil
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        76 years
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 245 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={img_1}
                      alt="Mr.sunil"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Mr.sunil
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        81 years
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 245 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={img_3}
                      alt="Mrs.Sriyani"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Mrs.Sriyani
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        70 years
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Stack>
            </Grid>
            {/* Pending Payments Section */}
            <Box height={80} />
            <Grid item xs={3}>
              {/* <DateRangeCalendar /> */}
              <Typography component="div" variant="h5">
                Pending Payments
              </Typography>
            </Grid>

            {/* Assigned Caregivers Section */}
            <Box height={40} />
            <Grid container spacing={1}>
              <Grid item xs={9}>
                <Typography component="div" variant="h6">
                  Assigned Caregivers<hr width="600"></hr>
                </Typography>
                <Stack spacing={2} direction={'row'}>
                  <Card sx={{ Width: 160 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        sx={{ width: 75 + "%" }}
                        image={img_2}
                        alt="Mrs.Priyanthi"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Mrs.Priyanthi
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          76 years
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>

                  <Card sx={{ fixWidth: 190 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        sx={{ height: 25 + "vh" }}
                        image={img_1}
                        alt="Mr.sunil"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Mr.sunil
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          81 years
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>

                  <Card sx={{ maxWidth: 245 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={img_3}
                        alt="Mrs.Sriyani"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Mrs.Sriyani
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          70 years
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Stack>

              </Grid>
            </Grid>
            {/* Special Notes Section */}
            <Grid item xs={3}>
              <Card sx={{ maxWidth: 245 }}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Special Notes
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">

                      <ul style={{ listStyle: 'none', marginLeft: 25, fontSize: '15px', textAlign: 'left' }}>
                        <li>Should go to checkup every Saturday </li>
                        <br></br>
                        <li>Take mom for a walk everyday</li>
                        <br></br>
                        <li>+</li>
                        <br></br>
                        <li>+</li>
                        <br></br>
                        <li>+</li>
                        <br></br>
                        <li>+</li>
                        <br></br>
                      </ul>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

            </Grid>

            <Grid item xs={12}>
              <Typography component="div" variant="h6">
                Accommodations
              </Typography>
              <Stack spacing={2} direction={'row'}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={img_4}
                  />


                </Card>
                <Card sx={{ height: 40 + "vh" }}>

                  <CardMedia
                    component="img"
                    height="140"
                    image={img_4}
                    alt="Luxury Room"
                  />

                </Card>
                <Card sx={{ maxWidth: 245 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={img_5}
                      alt="Luxury Room"
                    />
                  </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 245 }}>

                  <CardMedia
                    component="img"
                    height="140"
                    image={img_6}
                    alt="Luxury Room"
                  />

                </Card>

              </Stack>

            </Grid>


          </Grid>
        </Box>

      </Box>



    </div>
  )
}

export default GuardianDashboard



