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


const columns = [
    {
        id: 'Guardian',
        label: 'Guardian',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'Elderly_Person',
        label: 'Elderly Person',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'Room_Type',
        label: 'Room Type',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'Caregiver_Type',
        label: 'Caregiver Type',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'Action',
        label: 'Action',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toFixed(2),
    },
];



const rows = [
    createData('G.M.Nishantha', 'G.M.Jayasena', 'Classic', 'Male', <MoreVertIcon />),
    createData('G.M.Nishantha', 'G.M.Jayasena', 'Classic', 'Male', <MoreVertIcon />),
    createData('G.M.Nishantha', 'G.M.Jayasena', 'Classic', 'Male', <MoreVertIcon />),
    createData('G.M.Nishantha', 'G.M.Jayasena', 'Classic', 'Male', <MoreVertIcon />),
    createData('G.M.Nishantha', 'G.M.Jayasena', 'Classic', 'Male', <MoreVertIcon />),
    createData('G.M.Nishantha', 'G.M.Jayasena', 'Classic', 'Male', <MoreVertIcon />),
    createData('G.M.Nishantha', 'G.M.Jayasena', 'Classic', 'Male', <MoreVertIcon />),
    createData('G.M.Nishantha', 'G.M.Jayasena', 'Classic', 'Male', <MoreVertIcon />),
    createData('G.M.Nishantha', 'G.M.Jayasena', 'Classic', 'Male', <MoreVertIcon />),
    createData('G.M.Nishantha', 'G.M.Jayasena', 'Classic', 'Male', <MoreVertIcon />),
    createData('G.M.Nishantha', 'G.M.Jayasena', 'Classic', 'Male', <MoreVertIcon />),
    createData('G.M.Nishantha', 'G.M.Jayasena', 'Classic', 'Male', <MoreVertIcon />),
    createData('G.M.Nishantha', 'G.M.Jayasena', 'Classic', 'Male', <MoreVertIcon />),
    createData('G.M.Nishantha', 'G.M.Jayasena', 'Classic', 'Male', <MoreVertIcon />),
    createData('G.M.Nishantha', 'G.M.Jayasena', 'Classic', 'Male', <MoreVertIcon />),
];

function createData(Guardian, Elderly_Person, Room_Type, Caregiver_Type, Action) {

    return { Guardian, Elderly_Person, Room_Type, Caregiver_Type, Action };
}



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
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
                    <Grid container spacing={5} >

                        <Grid item xs={8}>
                            <Stack spacing={5} direction={'row'}>
                                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                                    <TableContainer sx={{ maxHeight: 600 }}>
                                        <Table stickyHeader aria-label="sticky table">
                                            <TableHead>
                                                <TableRow>
                                                    {columns.map((column) => (
                                                        <TableCell
                                                            key={column.id}
                                                            align={column.align}
                                                            style={{ minWidth: column.minWidth }}
                                                        >
                                                            {column.label}
                                                        </TableCell>
                                                    ))}
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {rows
                                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                    .map((row) => {
                                                        return (
                                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                                {columns.map((column) => {
                                                                    const value = row[column.id];
                                                                    return (
                                                                        <TableCell key={column.id} align={column.align}>
                                                                            {column.format && typeof value === 'number'
                                                                                ? column.format(value)
                                                                                : value}
                                                                        </TableCell>
                                                                    );
                                                                })}
                                                            </TableRow>
                                                        );
                                                    })}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    <TablePagination
                                        rowsPerPageOptions={[10, 25, 100]}
                                        component="div"
                                        count={rows.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        onPageChange={handleChangePage}
                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                    />
                                </Paper>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <Card sx={{ maxWidth: 100 + "%" }} style={{ backgroundColor: "#D4f1f4" }}>
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
                            </Card>
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