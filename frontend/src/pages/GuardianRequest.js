import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { CardActionArea } from '@mui/material';
import LivingIcon from '@mui/icons-material/Living';
import RequestCard from '../components/RequestCard';
import '../styles/GuardianRequest.css';

import Elder from '../assets/Happy_Elder.jpeg';

import { MdOutlineBedroomParent } from "react-icons/md";
import {LiaUserNurseSolid} from "react-icons/lia";

import Person from '../assets/person.jpeg';

import { useTheme } from '@mui/material/styles';

import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';

import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';




const students = [
    {
        Gname: 'John Doe',
        Ename: 'Sirisena',
        Age: '65',
        // ['Age: 20', 'Major: Computer Science', 'GPA: 3.8'],
    },
    {
        Gname: 'John Doe',
        Ename: 'Sirisena',
        Age: '65',
        // details: ['Age: 20', 'Major: Computer Science', 'GPA: 3.8'],
    },
    {
        Gname: 'John Doe',
        Ename: '12346',
        Age: '65',
        // details: ['Age: 20', 'Major: Computer Science', 'GPA: 3.8'],
    },
    {
        Gname: 'John Doe',
        Ename: '12346',
        Age: '65',
        // details: ['Age: 20', 'Major: Computer Science', 'GPA: 3.8'],
    },
    // Add more student objects as needed
];


export default function GuardianRequest() {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div className='requestPage'>
            <Header />
            <Box height={100} />
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
                    <Grid container spacing={5} >

                    <Grid item xs={4}>
                            {/* <Card sx={{ maxWidth: 100 + "%" }} style={{ backgroundColor: "#D4f1f4" }}>
                                <CardActionArea>
                                    <CardContent style={{ textAlign: 'left' }}>
                                        <LivingIcon />
                                        <Typography gutterBottom variant="h5" component="div">
                                            Available Luxury Rooms : 3
                                        </Typography>

                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <br />
                            <Card sx={{ maxWidth: 100 + "%" }} style={{ backgroundColor: "#D4f1f4" }}>
                                <CardActionArea>
                                    <CardContent style={{ textAlign: 'left' }}>
                                        <LivingIcon />
                                        <Typography gutterBottom variant="h5" component="div">
                                            Available Classic Rooms : 5
                                        </Typography>

                                    </CardContent>
                                </CardActionArea>
                            </Card> */}
                            <br />
                            <Card sx={{ maxWidth: 100 + "%" }} style={{ backgroundImage: "linear-gradient(45deg, #05445E 10%, #189AB4 90%)",
                                backgroundColor: "#D4f1f4",
                                color: 'white', // Text color for better contrast
                                }}>
                                
                                <CardActionArea>
                                    <CardContent style={{ textAlign: 'left', display: 'flex', // Use flexbox
                                alignItems: 'center', // Center vertically
                                }}>
                                        
                                        <MdOutlineBedroomParent style={{ fontSize: 20, marginBottom: 2, marginRight: 8  }}/>
                                        <Typography gutterBottom variant="h5" component="div" style={{ fontSize: 20, marginBottom: 0}}>
                                            Available Shared Rooms
                                        </Typography>
                                    </CardContent>
                                    <Typography>
                                    <ul style={{ marginLeft: 40, textAlign: 'left', marginBottom: 9 }}>
                                        <li>
                                        Male Beds <span style={{ color: '#75E6DA', marginLeft: 28 }}>7</span>
                                        </li>
                                        <li>
                                        Female Beds <span style={{ color: '#75E6DA', marginLeft: 10,  marginBottom: 5}}>9</span>
                                        </li>
                                    </ul>
                                        </Typography>
                                </CardActionArea>
                            </Card>
                            <br />
                            <Card sx={{ maxWidth: 100 + "%" }} style={{ backgroundImage: "linear-gradient(45deg, #05445E 10%, #189AB4 90%)",
                                backgroundColor: "#D4f1f4",
                                color: 'white', // Text color for better contrast
                                }}>
                                <CardActionArea>
                                    <CardContent style={{ textAlign: 'left', display: 'flex', // Use flexbox
                                alignItems: 'center', // Center vertically
                                }}>
                                        <LiaUserNurseSolid style={{ fontSize: 20, marginBottom: 2, marginRight: 8  }}/>
                                        <Typography gutterBottom variant="h5" component="div" style={{ fontSize: 20, marginBottom: 0}}>
                                            Available Caregivers
                                        </Typography>
                                        

                                    </CardContent>
                                    <Typography>
                                    <ul style={{ marginLeft: 40, textAlign: 'left', marginBottom: 9 }}>
                                        <li>
                                        Male  <span style={{ color: '#75E6DA', marginLeft: 28 }}>7</span>
                                        </li>
                                        <li>
                                        Female  <span style={{ color: '#75E6DA', marginLeft: 10  }}>9</span>
                                        </li>
                                    </ul>
                                        </Typography>
                                </CardActionArea>
                            </Card>
                            <br />


                        </Grid>

                        <Grid item xs={8}>
                            <Stack spacing={5} direction={'row'}>
                               
                                    <TableContainer sx={{ maxHeight: 600 }}>
                                        <div>
                                            {students.map((student) => (
                                                <RequestCard {...student.Gname} imageSrc={Elder} />
                                            ))}
                                        </div>
                                    </TableContainer>
                                   
                            </Stack>
                        </Grid>
                        
                    </Grid>

                </Box>

            </Box>
        </div>
    )
}