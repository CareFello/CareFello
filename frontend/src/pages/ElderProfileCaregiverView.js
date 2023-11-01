import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Box } from "@mui/material";
import { ManagerMenuItem } from "../components/ManagerMenuItem";
import doctor from "../assets/doctor.png";
import "../styles/AddDoctor.css";
import { useState } from "react";
import axios from "axios";
import "../index.css";
import InputAdornment from "@mui/material/InputAdornment";
import { IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Image from "../assets/mail_logo.png";
import { Container, Typography, Paper, Grid, Avatar } from '@mui/material';
import Person from "./../assets/person.jpeg";
import { Button } from "flowbite-react";

function ElderDetails() {

  return (
    <div className="addDoctor">
      <Header />
      <Box height={80} />
      <Box sx={{ display: "flex" }}>
        <Sidebar menuItems={ManagerMenuItem} />
        <div className="app">
        {/* <h4 style={{align:"left", marginRight: "800px"}}>Essential Elder Info</h4> */}
        <Container component="main" maxWidth="md" style={{marginLeft:"400px"}}>
         


              <p className="font-weight-bold" style={{ fontSize: "25px", marginRight: "650px" , marginTop: "100px"}}>G.G.Vasantha</p>
              <img className="rounded-pill align-items-center" src={Person} alt="" style={{ width: "120px", alignContent: "center", height: "120px", marginLeft: "50px", marginBottom:"50px" }} />
              <div style={{ width: "90%" }}>
               
                <Box display="flex" flexDirection="column" alignItems="flex-start" width="100%" mt={1}>
                  <p> <span className="font-weight-bold">Full Name : </span>Somasiri Pathirana</p>
                  <p> <span className="font-weight-bold">Gender : </span>Male</p>
                  <p> <span className="font-weight-bold">DOB : </span>2023-10-03</p>
                  <p> <span className="font-weight-bold">Guardian's Name : </span>Sanath</p>
                  <p> <span className="font-weight-bold">Relationship to Guardian : </span>Son</p>
                  <p> <span className="font-weight-bold">Contact No : </span>076-4023716</p>
                  <div className="d-flex justify-content-end">
                    
                  </div>
                </Box>
              </div>
        


        </Container>
        </div>
        </Box>
        </div>
     
  );
}

export default ElderDetails;