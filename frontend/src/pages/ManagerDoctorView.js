import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { ManagerMenuItem } from "../components/ManagerMenuItem";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Switch,
  FormGroup,
  FormControlLabel,
  Typography,
  Box,
} from "@mui/material";

import doc1 from "../assets/doc1.jpg";
import doc2 from "../assets/doc2.jpg";
import doc3 from "../assets/doc3.jpg";

// import "../../styles/Guardian/GuardianComplain.css";

const doctorsData = [
  {
    id: 1,
    name: "Dr. Samantha Dissanayaka",
    image: doc1,
    speciality: "Neurology",
    contactNo: "0717631824",
    email: "samantha@gmail.com",
  },
  {
    id: 2,
    name: "Dr. Asha De Silva",
    image: doc2,
    speciality: "Family Medicine",
    contactNo: "0717631824",
    email: "samantha@gmail.com",
  },

  {
    id: 3,
    name: "Dr. Gayan Mahage",
    image: doc3,
    speciality: "Surgery",
    contactNo: "0717631824",
    email: "samantha@gmail.com",
  },
];

export default function ManagerDoctorView() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#F9FFFE",
      }}
    >
      <Header />
      <Box height={80} />
      <Box sx={{ display: "flex" }}>
        <Sidebar menuItems={ManagerMenuItem} />
        <Grid container spacing={8}>
          {doctorsData.map((doctor) => (
            <Grid item xs={12} sm={6} md={4} key={doctor.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <FormGroup>
                  <FormControlLabel
                    label="Availability"
                    labelPlacement="start"
                    control={<Switch defaultChecked sx={{marginRight: 2 }} />}
                  />
                </FormGroup>

                <CardMedia
                  component="img"
                  alt="doctor-img"
                  height="200"
                  width="500"
                  image={doctor.image}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="div">
                    {doctor.name}
                  </Typography>
                  <Typography variant="body1">{doctor.speciality}</Typography>
                  <Typography>Contact No : {doctor.contactNo}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
