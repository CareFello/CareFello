import React, {useState} from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { ManagerMenuItem } from "../components/ManagerMenuItem";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Modal,IconButton
} from "@mui/material";
import { TextInput, Label, FileInput, Checkbox, Textarea,Select } from "flowbite-react"
import { IoCloseSharp } from 'react-icons/io5'
import doc1 from "../assets/doc1.jpg";
import doc2 from "../assets/doc2.jpg";
import doc3 from "../assets/doc3.jpg";

export default function ManagerDoctorView() {
  // Dummy data for demonstration
  const doctorData = [
    { name: "Dr. John Doe", date: "2023-11-01", startTime: "09:00 AM", finishTime: "05:00 PM", maxElders: 20 },
    // Add more doctor entries as needed
  ];


  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header />
      <Box height={80} />
      <Box sx={{ display: "flex" }}>
        <Sidebar menuItems={ManagerMenuItem} />
        <Grid container justifyContent="center">
            <Typography>Assign Elders</Typography>
            <br/>
          <TableContainer component={Card}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Doctor Name</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Start Time</TableCell>
                  <TableCell>Finish Time</TableCell>
                  <TableCell>Max Elders</TableCell>
                  <TableCell>No. of Elders Assigned</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {doctorData.map((doctor) => (
                  <TableRow key={doctor.name}>
                    <TableCell>{doctor.name}</TableCell>
                    <TableCell>{doctor.date}</TableCell>
                    <TableCell>{doctor.startTime}</TableCell>
                    <TableCell>{doctor.finishTime}</TableCell>
                    <TableCell>{doctor.maxElders}</TableCell>
                    {/* Add the logic to calculate and display the number of elders currently assigned */}
                    <TableCell>{/* Display the number of elders assigned */}</TableCell>
                    <TableCell>
                      <Button variant="contained" color="primary" onClick={handleOpenModal}>
                        Action
                      </Button>
                      <Modal open={isModalOpen} onClose={handleCloseModal}>
                          <Box
                            sx={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%, -50%)',
                              bgcolor: 'background.paper',
                              boxShadow: 24,
                              p: 4,
                              maxWidth: 400,
                              width: '100%',
                            }}
                          >
                            <IconButton
                              sx={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                zIndex: 1, // Ensure the close button appears above the content
                              }}
                              onClick={handleCloseModal}
                            >
                              <IoCloseSharp /> {/* Replace with your close icon component */}
                            </IconButton>
                            <Typography variant="h6">Add history reports</Typography>
                            <form >

                              <Select></Select>


                              <Button type="submit" variant="contained" sx={{ mt: 2 }} >
                                Upload
                              </Button>
                            </form>
                          </Box>
                        </Modal>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Box>
    </div>
  );
}
