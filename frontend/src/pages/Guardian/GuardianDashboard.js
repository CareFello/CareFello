import React from 'react'
import Sidebar from '../../components/Sidebar'
import Box from '@mui/material/Box'
import { Divider, Typography } from '@mui/material'
import { CardActionArea } from '@mui/material';
//import DrawerHeader from '@mui/material/Drawer'
import Header from '../../components/Header'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

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
import { GuardianMenuItem } from '../../components/GuardianMenuItem'

import '../../styles/Guardian/GuardianDashboard.css';


const GuardianDashboard = () => {
  return (

    <div className='dashboard'>
      <Header />
      <Box height={80} />
      <Box sx={{ display: 'flex' }}>
        <Sidebar menuItems={GuardianMenuItem} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
          <Typography component="div" variant="h4">
            Welcome Back, Ramza!
          </Typography>
          <br />
          <Grid container spacing={1}>
            <Grid container spacing={1}>
              {/* Loved ones section */}
              <Grid item xs={8}>
                <Stack display="flex" flexDirection={'row'}>
                  <Typography component="div" variant="h6">
                    Your Loved Ones

                  </Typography>
                  <hr className="title" width='500'></hr>
                </Stack>

                <Stack spacing={2} direction={'row'} >
                  <Card sx={{ minWidth: 165 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="140"
                          width="245"
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
                      <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                      </Box>
                    </Box>
                  </Card>

                  <Card sx={{ minWidth: 165 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        width="165"
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

                  <Card sx={{ minWidth: 165 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        width="245"
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

                  <Card sx={{ minWidth: 165 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        width="245"
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
              <Grid item xs={4}>
                {/* <DateRangeCalendar /> */}
                <Typography component="div" variant="h5">
                  Pending Payments
                </Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                  <ListItem alignItems="flex-start">

                    <ListItemText
                      primary="Due on 24-08-2023"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Reminder
                          </Typography>
                          {" — Invoice No. 1023 "}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">

                    <ListItemText
                      primary="Today Due"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Reminder
                          </Typography>
                          {" — Mrs. Priyanthis' medical expenditures"}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">

                    <ListItemText
                      primary="Past Due payment"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Reminder
                          </Typography>
                          {' — Invoice 234 is dued on 04-06-2023'}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">

                    <ListItemText
                      primary="Today Due"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Reminder
                          </Typography>
                          {" — Mrs. Priyanthis' medical expenditures"}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
            {/* Assigned Caregivers Section */}
            <Box height={40} />
            <Grid container spacing={1}>
              <Grid item xs={8}>
              <Stack display="flex" flexDirection={'row'}>
                  <Typography component="div" variant="h6">
                    Assigned Caregivers

                  </Typography>
                  <hr className="title" width='500'></hr>
                </Stack>
                <Stack spacing={2} direction={'row'}>
                  <Card sx={{ minWidth: 165 }}>
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

                  <Card sx={{ minWidth: 165 }}>
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

                  <Card sx={{ minWidth: 165 }}>
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

              {/* Special Notes Section */}
              <Box height={40} />
              <Grid item xs={4}>
                <Card sx={{ minWidth: "vh" }}>
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



