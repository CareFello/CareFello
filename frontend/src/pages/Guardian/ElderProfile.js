import React from 'react'
import Sidebar from '../../components/Sidebar'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import { CardActionArea } from '@mui/material';
import Header from '../../components/Header'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import img_1 from '../../assets/guardian/elder1.jpeg'
import { GuardianMenuItem } from '../../components/GuardianMenuItem'

import '../../styles/Guardian/ElderProfile.css';


const ElderProfile = () => {
  return (
    <div className='profile'>
      <Header />
      <Box height={80} />
      <Box sx={{ display: 'flex' }}>
        <Sidebar menuItems={GuardianMenuItem} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
          <Grid container spacing={1}>
            <Grid item xs={9}>
              <Stack spacing={2} direction={'row'}>
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
                    sx={{ Maxwidth: 75 + "%" }}
                    image={img_1}
                    alt="Elder Image"
                  />
                </Card>



              </Stack>
            </Grid>
            <Grid container spacing={2}>
              <Grid sx={{ flexGrow: 1, p: 3, flexDirection: 'row' }} >
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        Caregiver
                      </Typography>

                    </CardContent>
                    <CardMedia
                      component="img"
                      height="140"
                      image={img_1}
                      alt="Caregiver"
                    />
                  </CardActionArea>
                </Card>
                <Card sx={{ minWidth: 175 }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        Medication
                      </Typography>

                    </CardContent>
                    <CardMedia
                      component="img"
                      height="140"
                      image={img_1}
                      alt="Caregiver"
                    />
                  </CardActionArea>
                </Card>
                <Card sx={{ minWidth: 175 }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        Daily Activities
                      </Typography>

                    </CardContent>
                    <CardMedia
                      component="img"
                      height="140"
                      image={img_1}
                      alt="Caregiver"
                    />
                  </CardActionArea>
                </Card>
                <Card sx={{ mixWidth: 175 }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        Daily Reports
                      </Typography>

                    </CardContent>
                    <CardMedia
                      component="img"
                      height="140"
                      image={img_1}
                      alt="Caregiver"
                    />
                  </CardActionArea>
                </Card>
                <Card sx={{ mixWidth: 175 }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        Contact Caregiver
                      </Typography>

                    </CardContent>
                    <CardMedia
                      component="img"
                      height="140"
                      image={img_1}
                      alt="Caregiver"
                    />
                  </CardActionArea>
                </Card>
                <Card sx={{ minWidth: 175 }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        Request Accommodation
                      </Typography>

                    </CardContent>
                    <CardMedia
                      component="img"
                      height="140"
                      image={img_1}
                      alt="Caregiver"
                    />
                  </CardActionArea>
                </Card>
                <Card sx={{ minWidth: 175 }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        Complaints
                      </Typography>

                    </CardContent>
                    <CardMedia
                      component="img"
                      height="140"
                      image={img_1}
                      alt="Caregiver"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Box>

      </Box>



    </div >
  )
}

export default ElderProfile



