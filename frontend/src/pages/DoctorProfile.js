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
import Calendar from "react-calendar";
import "../styles/DoctorProfile.css";
import img_1 from "../assets/E1.jpg";

export default function DoctorProfile() {
  const [doctorData, setDoctorData] = useState({
    profilePic: img_1,
    nic: "676770010V",
    registrationNumber: "CF453",
    address: "No 12, Flower Road, Nugegoda",
    email: "doctor01@gmail.com",
    mobileNumber: "0701234567",
  });

  const [calendarDate, setCalendarDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);

  const handleProfilePicUpload = (e) => {
    // Handle profile pic upload logic here
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoctorData({ ...doctorData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and data saving logic here
  };

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
      <Box className="profile-content">
        <Sidebar menuItems={DoctorMenuItem} />
        <main>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={3} className="personal-details">
                <div className="pic">
                  <img
                    src={doctorData.profilePic}
                    alt="Doctor Profile"
                    className="profile-pic"
                  />
                  <input type="file" onChange={handleProfilePicUpload} />
                </div>
                <Typography variant="h5">Personal Details</Typography>
                <form onSubmit={handleFormSubmit} className="personal-details-form">
                  <TextField
                    name="nic"
                    label="NIC Number"
                    value={doctorData.nic}
                    onChange={handleInputChange}
                    fullWidth
                    variant="outlined"
                  />
                  <TextField
                    name="registrationNumber"
                    label="Registration Number"
                    value={doctorData.registrationNumber}
                    onChange={handleInputChange}
                    fullWidth
                    variant="outlined"
                  />
                  <TextField
                    name="address"
                    label="Address"
                    value={doctorData.address}
                    onChange={handleInputChange}
                    fullWidth
                    variant="outlined"
                  />
                  <TextField
                    name="email"
                    label="Email"
                    value={doctorData.email}
                    onChange={handleInputChange}
                    fullWidth
                    variant="outlined"
                  />
                  <TextField
                    name="mobileNumber"
                    label="Mobile Number"
                    value={doctorData.mobileNumber}
                    onChange={handleInputChange}
                    fullWidth
                    variant="outlined"
                  />
                  <Button type="submit" variant="contained" color="primary">
                    Save
                  </Button>
                </form>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={8}>
              <Paper elevation={3} className="right">
                <Typography variant="h5" style={{ paddingBottom: "16px" }}>
                  Upcoming Appointments
                </Typography>

                <Calendar
                  value={calendarDate}
                  onChange={handleCalendarChange}
                  tileContent={({ date, view }) => {
                    if (
                      view === "month" &&
                      appointments.some(
                        (appointment) => appointment.date === date.getDate()
                      )
                    ) {
                      return (
                        <div className="highlighted-date">{date.getDate()}</div>
                      );
                    }
                  }}
                />

                {appointments.length > 0 && (
                  <div className="popup">
                    <Typography variant="h6">
                      Appointments on {calendarDate.toLocaleDateString()}
                    </Typography>
                    <ul>
                      {appointments.map((appointment) => (
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
