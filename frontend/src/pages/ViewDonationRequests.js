import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import '../styles/ViewDonationRequests.css';
import { ManagerMenuItem } from "../components/ManagerMenuItem";
import Header from "../components/Header";
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData('Cupcake', 305, 3.7),
  createData('Donut', 452, 25.0),
  createData('Eclair', 262, 16.0),
  // Add more rows as needed...
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function CustomPaginationActionsTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const donationRequests = [
    {
      donorName: 'John Doe',
      donationType: 'Monetary Donation',
      date: '2023-09-15',
      email: 'john@example.com',
      phone: '123-456-7890',
      description: 'A generous donation for our elderly residents.',
      donationDate: '2023-09-20',
      comments: 'Please use this donation for recreational activities.',
    },
    {
      donorName: 'John Doe',
      donationType: 'Monetary Donation',
      date: '2023-09-15',
      email: 'john@example.com',
      phone: '123-456-7890',
      description: 'A generous donation for our elderly residents.',
      donationDate: '2023-09-20',
      comments: 'Please use this donation for recreational activities.',
    },
    {
      donorName: 'John Doe',
      donationType: 'Monetary Donation',
      date: '2023-09-15',
      email: 'john@example.com',
      phone: '123-456-7890',
      description: 'A generous donation for our elderly residents.',
      donationDate: '2023-09-20',
      comments: 'Please use this donation for recreational activities.',
    },
    {
      donorName: 'John Doe',
      donationType: 'Monetary Donation',
      date: '2023-09-15',
      email: 'john@example.com',
      phone: '123-456-7890',
      description: 'A generous donation for our elderly residents.',
      donationDate: '2023-09-20',
      comments: 'Please use this donation for recreational activities.',
    },
    {
      donorName: 'John Doe',
      donationType: 'Monetary Donation',
      date: '2023-09-15',
      email: 'john@example.com',
      phone: '123-456-7890',
      description: 'A generous donation for our elderly residents.',
      donationDate: '2023-09-20',
      comments: 'Please use this donation for recreational activities.',
    },
    {
      donorName: 'John Doe',
      donationType: 'Monetary Donation',
      date: '2023-09-15',
      email: 'john@example.com',
      phone: '123-456-7890',
      description: 'A generous donation for our elderly residents.',
      donationDate: '2023-09-20',
      comments: 'Please use this donation for recreational activities.',
    },
    {
      donorName: 'John Doe',
      donationType: 'Monetary Donation',
      date: '2023-09-15',
      email: 'john@example.com',
      phone: '123-456-7890',
      description: 'A generous donation for our elderly residents.',
      donationDate: '2023-09-20',
      comments: 'Please use this donation for recreational activities.',
    },
    {
      donorName: 'John Doe',
      donationType: 'Monetary Donation',
      date: '2023-09-15',
      email: 'john@example.com',
      phone: '123-456-7890',
      description: 'A generous donation for our elderly residents.',
      donationDate: '2023-09-20',
      comments: 'Please use this donation for recreational activities.',
    },
    // Add more donation requests here...
  ];

  const cardColors = ['#9AC5F4', '#FFEEBB', '#A7ECEE', '#9AC5F4']; // Shades of blue

  return (
    <div>
      <Header />
      <Box height={80} />
      <Box sx={{ display: 'flex' }}>
        <Sidebar menuItems={ManagerMenuItem} />
        <div className="main-container">
          <h3 style={{ display: 'flex', alignItems: 'flex-start', marginLeft: '30px', marginTop: '25px', marginBottom: '30px' }}>Donation Requests</h3>
          <div className="app">
            <TableContainer component={Paper} style={{ marginLeft: '50px', height: '1000px' }}>
              <Table sx={{ minWidth: 1050 }} aria-label="custom pagination table">
                <TableBody>
                  {donationRequests.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((request, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Card variant="outlined" style={{ height: '200px', backgroundColor: cardColors[index % cardColors.length], borderRadius: '15px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
                          <CardContent>
                            <Typography sx={{ fontSize: 16 }} gutterBottom>
                              Donor: {request.donorName}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} >
                              Donation Type: {request.donationType}
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 1.5 }} color="text.secondary">
                              Description: {request.description}
                            </Typography>
                            <Typography variant="body3" sx={{ mb: 1.5 }} color="text.secondary">
                              Donation Date: {request.donationDate}
                            </Typography>
                            <br></br>
                            <br></br>
                            <Button size="small" variant="contained" color="primary" style={{ marginLeft:'850px', borderRadius: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', height:'35px' }}>Accept</Button>
                            <Button size="small" variant="contained" style={{ marginLeft: '25px',borderRadius: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', height:'35px', backgroundColor: '#FF6969', color: '#FFFFFF' }}>Decline</Button>
                          </CardContent>
                        </Card>
                      </TableCell>
                    </TableRow>
                  ))}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={donationRequests.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableContainer>
          </div>
        </div>
      </Box>
    </div>
  );
}
