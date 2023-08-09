import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { ManagerMenuItem } from '../components/ManagerMenuItem'
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import meal from "../assets/meal1.jpg"
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Meal() {
    return (
        <div>
            <Header />
            <Box height={80} />
            <Box sx={{ display: 'flex' }}>
                <Sidebar menuItems={ManagerMenuItem} />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
                    <Grid container spacing={5} >

                        <Grid item xs={12}>
                            <Stack spacing={5} direction={'row'}>

                                <Card sx={{ display: 'flex', width: 100 + "%", height: 200 }}>
                                    <Card sx={{ maxWidth: 200, height: 180, marginLeft: 4, marginTop: 1 }}>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="90"
                                            image={meal}
                                        />
                                        <CardContent>

                                            <Typography variant="body2" color="text.secondary">
                                                Vegetable Salad
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Share</Button>
                                            <Button size="small">Learn More</Button>
                                        </CardActions>
                                    </Card>
                                    <Card sx={{ maxWidth: 200, height: 180, marginLeft: 4, marginTop: 1 }}>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="90"
                                            image={meal}
                                        />
                                        <CardContent>

                                            <Typography variant="body2" color="text.secondary">
                                                Vegetable Salad
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Share</Button>
                                            <Button size="small">Learn More</Button>
                                        </CardActions>
                                    </Card>
                                    <Card sx={{ maxWidth: 200, height: 180, marginLeft: 4, marginTop: 1 }}>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="90"
                                            image={meal}
                                        />
                                        <CardContent>

                                            <Typography variant="body2" color="text.secondary">
                                                Vegetable Salad
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Share</Button>
                                            <Button size="small">Learn More</Button>
                                        </CardActions>
                                    </Card>
                                    <Card sx={{ maxWidth: 200, height: 180, marginLeft: 4, marginTop: 1 }}>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="90"
                                            image={meal}
                                        />
                                        <CardContent>

                                            <Typography variant="body2" color="text.secondary">
                                                Vegetable Salad
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Share</Button>
                                            <Button size="small">Learn More</Button>
                                        </CardActions>
                                    </Card>
                                    <Card sx={{ maxWidth: 200, height: 180, marginLeft: 4, marginTop: 1 }}>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="90"
                                            image={meal}
                                        />
                                        <CardContent>

                                            <Typography variant="body2" color="text.secondary">
                                                Vegetable Salad
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Share</Button>
                                            <Button size="small">Learn More</Button>
                                        </CardActions>
                                    </Card>

                                </Card>

                            </Stack>
                        </Grid>


                    </Grid>
                </Box>
            </Box>
        </div>
    )
}

export default Meal
