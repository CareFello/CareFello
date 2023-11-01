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
import { Card } from "flowbite-react";
import Image from "../assets/mail_logo.png";

function ElderDetails() {
  return (
    <div className="addDoctor">
      <Header />
      <Box height={80} />
      <Box sx={{ display: "flex" }}>
        <Sidebar menuItems={ManagerMenuItem} />
        <div className="app">
        <h4 style={{align:"left"}}>Elder Care Overview</h4>
          <div className="main-container" style={{display: 'flex', flexDirection:'row'}}>
            <div className="card-1" style={{marginLeft: "80px", marginRight: "80px", marginBottom: "100px", marginTop: "40px"}}>
            <Card 
              renderImage={() => {
                <Image
                  
                  width={300}
                  height={500}
                  src="../assets/mail_logo.png"
                />;
              }}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Essential Elder Info
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400" style={{fontSize: '13px'}}>
              This provides crucial details about an individual,
              This comprehensive overview aids in personalized and attentive care.
              </p>
            </Card>

            </div>
            
            <div className="card-2" style={{marginLeft: "80px", marginRight: "80px", marginBottom: "100px", marginTop: "40px"}}>
            <Card 
              renderImage={() => {
                <Image
                  
                  width={300}
                  height={500}
                  src="../assets/mail_logo.png"
                />;
              }}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Medical Records Overview
              </h5>
              <p style={{fontSize: '13px'}} className="font-normal text-gray-700 dark:text-gray-400">
              Overview offers a comprehensive insight into an elder's health journey, encapsulating vital medical history and past reports.
              </p>
            </Card>

            </div>
            <div className="card-3" style={{marginLeft: "80px", marginRight: "80px", marginBottom: "100px", marginTop: "40px"}}>
            <Card 
              renderImage={() => {
                <Image
                  
                  width={300}
                  height={500}
                  src="../assets/mail_logo.png"
                />;
              }}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Medication & Duty Tracker
              </h5>
              <p style={{fontSize: '13px'}}className="font-normal text-gray-700 dark:text-gray-400">
              efficiently monitors the completion of medical tasks and daily caregiving 
              responsibilities for elders and enhances caregiver accountability and ensures comprehensive health and well-being.
              </p>
            </Card>

            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default ElderDetails;