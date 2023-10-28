import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Box from "@mui/material/Box";
import { DoctorMenuItem } from "../components/DoctorMenuItem";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Calendar from 'react-calendar';  // You might need to install this package

import '../styles/DoctorProfile.css';

// import 'react-calendar/dist/npCalendar.css'; // Import calendar styles

export default function DoctorProfile() {
  const [doctorData, setDoctorData] = useState({
    profilePic: "", // You can set the default profile pic here
    nic: "",
    registrationNumber: "",
    address: "",
    email: "",
    mobileNumber: "",
  });

  const [calendarDate, setCalendarDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]); // Replace with your dummy data

  // Handle profile pic upload
  const handleProfilePicUpload = (e) => {
    // Handle profile pic upload logic here
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoctorData({ ...doctorData, [name]: value });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and data saving logic here
  };

  // Handle calendar date change
  const handleCalendarChange = (date) => {
    setCalendarDate(date);
    // Fetch and update appointments for the selected date from your database
    // Replace the logic below with your data fetching logic
    setAppointments([
      { id: 1, patientName: "John Doe", age: 35 },
      { id: 2, patientName: "Jane Smith", age: 42 },
    ]);
  };

  return (
    <div className="doc-profile">
      <Header />
      <Box height={60} />
      <Box>
        <Sidebar menuItems={DoctorMenuItem} />
        <main>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Paper elevation={3} style={{ padding: "16px" }}>
                <div>
                  <img
                    src={doctorData.profilePic || "default-profile-pic.jpg"}
                    alt="Doctor Profile"
                    width="100%"
                  />
                  <input type="file" onChange={handleProfilePicUpload} />
                </div>
                <Typography variant="h5">Personal Details</Typography>
                <form onSubmit={handleFormSubmit}>
                  <TextField
                    name="nic"
                    label="NIC Number"
                    value={doctorData.nic}
                    onChange={handleInputChange}
                    fullWidth
                  />
                  <TextField
                    name="registrationNumber"
                    label="Registration Number"
                    value={doctorData.registrationNumber}
                    onChange={handleInputChange}
                    fullWidth
                  />
                  <TextField
                    name="address"
                    label="Address"
                    value={doctorData.address}
                    onChange={handleInputChange}
                    fullWidth
                  />
                  <TextField
                    name="email"
                    label="Email"
                    value={doctorData.email}
                    onChange={handleInputChange}
                    fullWidth
                  />
                  <TextField
                    name="mobileNumber"
                    label="Mobile Number"
                    value={doctorData.mobileNumber}
                    onChange={handleInputChange}
                    fullWidth
                  />
                  <Button type="submit" variant="contained" color="primary">
                    Save
                  </Button>
                </form>
              </Paper>
            </Grid>
            <Grid item xs={8}>
              <Paper elevation={3} style={{ padding: "16px" }}>
                <Typography variant="h5">Upcoming Appointments</Typography>
                <Calendar
                  value={calendarDate}
                  onChange={handleCalendarChange}
                  tileContent={({ date, view }) => {
                    if (view === 'month' && appointments.some(appointment => appointment.date === date.getDate())) {
                      return <div className="highlighted-date">{date.getDate()}</div>;
                    }
                  }}
                />
                {appointments.length > 0 && (
                  <div>
                    <Typography variant="h6">
                      Appointments on {calendarDate.toLocaleDateString()}
                    </Typography>
                    <ul>
                      {appointments.map(appointment => (
                        <li key={appointment.id}>
                          {`Appointment ID: ${appointment.id}, Patient Name: ${appointment.patientName}, Age: ${appointment.age}`}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Paper>
            </Grid>
          </Grid>
        </main>
      </Box>
    </div>
  );
}
