import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import meal1 from "../assets/meal1.jpg"

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));




export default function MealPlan() {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <Header />
            <Box height={80} />
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
                    <Grid container spacing={5} >

                        <Grid item xs={12}>
                            <Stack spacing={5} direction={'row'}>

                                <Card sx={{ maxWidth: 32 + "%" }}>
                                    <CardHeader

                                        action={
                                            <IconButton aria-label="settings">
                                                <MoreVertIcon />
                                            </IconButton>
                                        }
                                        title="Package 1"
                                        subheader="Price : Rs.10,000"
                                    />
                                    <CardMedia
                                        component="img"
                                        height="220"
                                        src={meal1}
                                        alt="Paella dish"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            Sri lankan authentic and healthy foods. Including both veg and non veg items.
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>

                                        <ExpandMore
                                            expand={expanded}
                                            onClick={handleExpandClick}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                            <ExpandMoreIcon />
                                        </ExpandMore>
                                    </CardActions>
                                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                                        <CardContent>
                                            <h3>Breakfast</h3>
                                            <Typography paragraph>
                                                Herbal Porridge / Kurakkan Porridge<br />
                                                String Hoppers with curries / Milk Rice<br />
                                                Chickpea / Green Beans  <br />
                                                Banana or anyother fruit
                                            </Typography>
                                            <br />
                                            <h3>Lunch</h3>
                                            <Typography paragraph>
                                                Herbal Porridge / Kurakkan Porridge<br />
                                                String Hoppers with curries / Milk Rice<br />
                                                Chickpea / Green Beans  <br />
                                                Banana or anyother fruit
                                            </Typography>
                                            <br />
                                            <h3>Dinner</h3>
                                            <Typography paragraph>
                                                Herbal Porridge / Kurakkan Porridge<br />
                                                String Hoppers with curries / Milk Rice<br />
                                                Chickpea / Green Beans  <br />
                                                Banana or anyother fruit
                                            </Typography>
                                            <br />

                                        </CardContent>
                                    </Collapse>
                                </Card>
                                <Card sx={{ maxWidth: 32 + "%" }}>
                                    <CardHeader

                                        action={
                                            <IconButton aria-label="settings">
                                                <MoreVertIcon />
                                            </IconButton>
                                        }
                                        title="Package 1"
                                        subheader="Price : Rs.10,000"
                                    />
                                    <CardMedia
                                        component="img"
                                        height="220"
                                        src={meal1}
                                        alt="Paella dish"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            Sri lankan authentic and healthy foods. Including both veg and non veg items.
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>

                                        <ExpandMore
                                            expand={expanded}
                                            onClick={handleExpandClick}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                            <ExpandMoreIcon />
                                        </ExpandMore>
                                    </CardActions>
                                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                                        <CardContent>
                                            <h3>Breakfast</h3>
                                            <Typography paragraph>
                                                Herbal Porridge / Kurakkan Porridge<br />
                                                String Hoppers with curries / Milk Rice<br />
                                                Chickpea / Green Beans  <br />
                                                Banana or anyother fruit
                                            </Typography>
                                            <br />
                                            <h3>Lunch</h3>
                                            <Typography paragraph>
                                                Herbal Porridge / Kurakkan Porridge<br />
                                                String Hoppers with curries / Milk Rice<br />
                                                Chickpea / Green Beans  <br />
                                                Banana or anyother fruit
                                            </Typography>
                                            <br />
                                            <h3>Dinner</h3>
                                            <Typography paragraph>
                                                Herbal Porridge / Kurakkan Porridge<br />
                                                String Hoppers with curries / Milk Rice<br />
                                                Chickpea / Green Beans  <br />
                                                Banana or anyother fruit
                                            </Typography>
                                            <br />

                                        </CardContent>
                                    </Collapse>
                                </Card>
                                <Card sx={{ maxWidth: 32 + "%" }}>
                                    <CardHeader

                                        action={
                                            <IconButton aria-label="settings">
                                                <MoreVertIcon />
                                            </IconButton>
                                        }
                                        title="Package 1"
                                        subheader="Price : Rs.10,000"
                                    />
                                    <CardMedia
                                        component="img"
                                        height="220"
                                        src={meal1}
                                        alt="Paella dish"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            Sri lankan authentic and healthy foods. Including both veg and non veg items.
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>

                                        <ExpandMore
                                            expand={expanded}
                                            onClick={handleExpandClick}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                            <ExpandMoreIcon />
                                        </ExpandMore>
                                    </CardActions>
                                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                                        <CardContent>
                                            <h3>Breakfast</h3>
                                            <Typography paragraph>
                                                Herbal Porridge / Kurakkan Porridge<br />
                                                String Hoppers with curries / Milk Rice<br />
                                                Chickpea / Green Beans  <br />
                                                Banana or anyother fruit
                                            </Typography>
                                            <br />
                                            <h3>Lunch</h3>
                                            <Typography paragraph>
                                                Herbal Porridge / Kurakkan Porridge<br />
                                                String Hoppers with curries / Milk Rice<br />
                                                Chickpea / Green Beans  <br />
                                                Banana or anyother fruit
                                            </Typography>
                                            <br />
                                            <h3>Dinner</h3>
                                            <Typography paragraph>
                                                Herbal Porridge / Kurakkan Porridge<br />
                                                String Hoppers with curries / Milk Rice<br />
                                                Chickpea / Green Beans  <br />
                                                Banana or anyother fruit
                                            </Typography>
                                            <br />

                                        </CardContent>
                                    </Collapse>
                                </Card>
                            </Stack>
                        </Grid>
                        <Grid item xs={12}>
                            <Stack spacing={5} direction={'row'}>

                                <Card sx={{ maxWidth: 32 + "%" }}>
                                    <CardHeader

                                        action={
                                            <IconButton aria-label="settings">
                                                <MoreVertIcon />
                                            </IconButton>
                                        }
                                        title="Package 1"
                                        subheader="Price : Rs.10,000"
                                    />
                                    <CardMedia
                                        component="img"
                                        height="220"
                                        src={meal1}
                                        alt="Paella dish"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            Sri lankan authentic and healthy foods. Including both veg and non veg items.
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>

                                        <ExpandMore
                                            expand={expanded}
                                            onClick={handleExpandClick}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                            <ExpandMoreIcon />
                                        </ExpandMore>
                                    </CardActions>
                                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                                        <CardContent>
                                            <h3>Breakfast</h3>
                                            <Typography paragraph>
                                                Herbal Porridge / Kurakkan Porridge<br />
                                                String Hoppers with curries / Milk Rice<br />
                                                Chickpea / Green Beans  <br />
                                                Banana or anyother fruit
                                            </Typography>
                                            <br />
                                            <h3>Lunch</h3>
                                            <Typography paragraph>
                                                Herbal Porridge / Kurakkan Porridge<br />
                                                String Hoppers with curries / Milk Rice<br />
                                                Chickpea / Green Beans  <br />
                                                Banana or anyother fruit
                                            </Typography>
                                            <br />
                                            <h3>Dinner</h3>
                                            <Typography paragraph>
                                                Herbal Porridge / Kurakkan Porridge<br />
                                                String Hoppers with curries / Milk Rice<br />
                                                Chickpea / Green Beans  <br />
                                                Banana or anyother fruit
                                            </Typography>
                                            <br />
                                            <Button size="small">Share</Button>
                                            <Button size="small">Learn More</Button>
                                        </CardContent>
                                    </Collapse>
                                </Card>
                                <Card sx={{ maxWidth: 32 + "%" }}>
                                    <CardHeader

                                        action={
                                            <IconButton aria-label="settings">
                                                <MoreVertIcon />
                                            </IconButton>
                                        }
                                        title="Package 1"
                                        subheader="Price : Rs.10,000"
                                    />
                                    <CardMedia
                                        component="img"
                                        height="220"
                                        src={meal1}
                                        alt="Paella dish"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            Sri lankan authentic and healthy foods. Including both veg and non veg items.
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>

                                        <ExpandMore
                                            expand={expanded}
                                            onClick={handleExpandClick}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                            <ExpandMoreIcon />
                                        </ExpandMore>
                                    </CardActions>
                                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                                        <CardContent>
                                            <h3>Breakfast</h3>
                                            <Typography paragraph>
                                                Herbal Porridge / Kurakkan Porridge<br />
                                                String Hoppers with curries / Milk Rice<br />
                                                Chickpea / Green Beans  <br />
                                                Banana or anyother fruit
                                            </Typography>
                                            <br />
                                            <h3>Lunch</h3>
                                            <Typography paragraph>
                                                Herbal Porridge / Kurakkan Porridge<br />
                                                String Hoppers with curries / Milk Rice<br />
                                                Chickpea / Green Beans  <br />
                                                Banana or anyother fruit
                                            </Typography>
                                            <br />
                                            <h3>Dinner</h3>
                                            <Typography paragraph>
                                                Herbal Porridge / Kurakkan Porridge<br />
                                                String Hoppers with curries / Milk Rice<br />
                                                Chickpea / Green Beans  <br />
                                                Banana or anyother fruit
                                            </Typography>
                                            <br />

                                        </CardContent>
                                    </Collapse>
                                </Card>
                                <Card sx={{ maxWidth: 32 + "%" }}>
                                    <CardHeader

                                        action={
                                            <IconButton aria-label="settings">
                                                <MoreVertIcon />
                                            </IconButton>
                                        }
                                        title="Package 1"
                                        subheader="Price : Rs.10,000"
                                    />
                                    <CardMedia
                                        component="img"
                                        height="220"
                                        src={meal1}
                                        alt="Paella dish"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            Sri lankan authentic and healthy foods. Including both veg and non veg items.
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>

                                        <ExpandMore
                                            expand={expanded}
                                            onClick={handleExpandClick}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                            <ExpandMoreIcon />
                                        </ExpandMore>
                                    </CardActions>
                                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                                        <CardContent>
                                            <h3>Breakfast</h3>
                                            <Typography paragraph>
                                                Herbal Porridge / Kurakkan Porridge<br />
                                                String Hoppers with curries / Milk Rice<br />
                                                Chickpea / Green Beans  <br />
                                                Banana or anyother fruit
                                            </Typography>
                                            <br />
                                            <h3>Lunch</h3>
                                            <Typography paragraph>
                                                Herbal Porridge / Kurakkan Porridge<br />
                                                String Hoppers with curries / Milk Rice<br />
                                                Chickpea / Green Beans  <br />
                                                Banana or anyother fruit
                                            </Typography>
                                            <br />
                                            <h3>Dinner</h3>
                                            <Typography paragraph>
                                                Herbal Porridge / Kurakkan Porridge<br />
                                                String Hoppers with curries / Milk Rice<br />
                                                Chickpea / Green Beans  <br />
                                                Banana or anyother fruit
                                            </Typography>
                                            <br />

                                        </CardContent>
                                    </Collapse>
                                </Card>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>

            </Box>
        </div>
    )
}