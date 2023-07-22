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
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


function ManagerDashboard() {
  return (
    <div>
      <Header />
      <Box height={50} />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack spacing={2} direction={'row'}>
                <Card sx={{ maxWidth: 49 + "%", height: 140 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ maxWidth: 49 + "%", height: 140 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2} >
                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <span>Achala</span>
                    <span>Punsara</span>
                  </CardContent>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <span>Achala</span>
                    <span>Punsara</span>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>
          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent>

                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent>

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



