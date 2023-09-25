
import React, { useState, useEffect } from 'react';

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
import '../styles/GuardianRequest.css';
import Elder from '../assets/Happy_Elder.jpeg';
import { MdOutlineBedroomParent } from "react-icons/md";
import {LiaUserNurseSolid} from "react-icons/lia";
import pp1 from '../assets/pp1.jpg';
import pp2 from '../assets/pp2.png';
import pp3 from '../assets/pp3.png';
import pp4 from '../assets/pp4.png';
import pp5 from '../assets/pp5.jpg';
import pp6 from '../assets/pp6.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';

import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';

import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';


import RequestCard from '../components/RequestCard';
import { ManagerMenuItem } from '../components/ManagerMenuItem';





const students = [
    {
        dp: pp1,
        Gname: 'Senura',
        Egender: 'Female',
        Eage: '65',
        // ['Age: 20', 'Major: Computer Science', 'GPA: 3.8'],
    },
    {
        dp: pp2,
        Gname: 'senali',
        Egender: 'Male',
        Eage: '72',
        // details: ['Age: 20', 'Major: Computer Science', 'GPA: 3.8'],
    },
    {
        dp: pp3,
        Gname: 'Kalyani',
        Egender: 'Male',
        Eage: '65',
        // details: ['Age: 20', 'Major: Computer Science', 'GPA: 3.8'],
    },
    {
        dp: pp4,
        Gname: 'Kenesith',
        Egender: 'Male',
        Eage: '75',
        // details: ['Age: 20', 'Major: Computer Science', 'GPA: 3.8'],
    },
    {
        dp: pp5,
        Gname: 'Shehanya',
        Egender: 'Female',
        Eage: '84',
        // details: ['Age: 20', 'Major: Computer Science', 'GPA: 3.8'],
    },
    {
        dp: pp6,
        Gname: 'sandaruwan',
        Egender: 'Female',
        Eage: '67',
        // details: ['Age: 20', 'Major: Computer Science', 'GPA: 3.8'],
    },
    // Add more student objects as needed
];


export default function GuardianRequest() {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [people, setPeople] = useState([]);
    const navigate = useNavigate();

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleDelete = async (id) => {

        console.log(id);
        try {
          await axios.delete(`http://localhost:8080/api/beds/delete/${id}`);
          axios.get('http://localhost:8080/api/beds/request9')
          .then((response) => setPeople(response.data))
          .catch((error) => console.error(error));
          
        } catch (error) {
          console.error('Error deleting employee:', error);
        }
    };

    const handleContinue = async (elderid) => {

        console.log(elderid);
        navigate(`/RequestContinue/${elderid}`);
    };

    useEffect(() => {
        // Make the GET request using Axios to fetch data from the backend
        axios.get('http://localhost:8080/api/beds/request9')
          .then((response) => setPeople(response.data))
          .catch((error) => console.error(error));
          console.log(people)
      }, []);

    return (
        <div className='requestPage'>
            <Header />

            <Box height={100} />
            <Box sx={{ display: 'flex' }}>
                <Sidebar menuItems={ManagerMenuItem} />

                <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
                    <Grid container spacing={5}>
                    
                    <Grid item xs={6}>
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

                        <Grid item xs={6}>
                            <Stack spacing={5} direction={'row'}>
                               
                                    <TableContainer sx={{ maxHeight: 600 }}>
                                        {people.map((person) =>(
                                            <div>
                                                Name: {person.guardianName} Age: {person.age}
                                                <button onClick={() => handleDelete(person.id)}>Delete</button>
                                                <button onClick={() => handleContinue(person.elderid)}>Continue</button>
                                            </div>
                                        ))}
                                        
                                    </TableContainer>
                                   
                            </Stack>
                        </Grid>
                        
                    </Grid>

                </Box>
                </Box>
                

            </Box>
        </div>
    )
}