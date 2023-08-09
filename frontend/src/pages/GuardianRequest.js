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
import RequestCard from '../components/RequestCard'
import { ManagerMenuItem } from '../components/ManagerMenuItem'


const students = [
    {
        name: 'John Doe',
        indexNo: '12345',
        details: ['Age: 20', 'Major: Computer Science', 'GPA: 3.8'],
    },
    {
        name: 'John Doe',
        indexNo: '12346',
        details: ['Age: 20', 'Major: Computer Science', 'GPA: 3.8'],
    },
    {
        name: 'John Doe',
        indexNo: '12346',
        details: ['Age: 20', 'Major: Computer Science', 'GPA: 3.8'],
    },
    {
        name: 'John Doe',
        indexNo: '12346',
        details: ['Age: 20', 'Major: Computer Science', 'GPA: 3.8'],
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
        <div>
            <Header />
            <Box height={100} />
            <Box sx={{ display: 'flex' }}>
                <Sidebar menuItems={ManagerMenuItem} />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
                    <Grid container spacing={5} >

                        <Grid item xs={8}>
                            <Stack spacing={5} direction={'row'}>
                                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                                    <TableContainer sx={{ maxHeight: 600 }}>
                                        <div>
                                            {students.map((student, index) => (
                                                <RequestCard key={index} {...student} />
                                            ))}
                                        </div>
                                    </TableContainer>
                                    {/* <TablePagination
                                        rowsPerPageOptions={[10, 25, 100]}
                                        component="div"
                                        count={rows.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        onPageChange={handleChangePage}
                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                    /> */}
                                </Paper>
                            </Stack>
                        </Grid>
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
                            <Card sx={{ maxWidth: 100 + "%" }} style={{ backgroundColor: "#D4f1f4" }}>
                                <CardActionArea>
                                    <CardContent style={{ textAlign: 'left' }}>
                                        <LivingIcon />
                                        <Typography gutterBottom variant="h5" component="div">
                                            Available Shared Rooms
                                        </Typography>
                                        <Typography>
                                            <ul style={{ marginLeft: 40 }}>
                                                <li>Male : 7 Beds</li>
                                                <li>Femaleale : 9 Beds</li>
                                            </ul>
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
                                            Available Male Caregivers : 3
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
                                            Available Female Caregivers : 3
                                        </Typography>

                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <br />


                        </Grid>
                    </Grid>

                </Box>

            </Box>
        </div>
    )
}