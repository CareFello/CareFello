import React, { useState, useEffect } from 'react';
import { ManagerMenuItem } from "../components/ManagerMenuItem";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import "../styles/RequestContinue.css";

function RequestContinue() {
  const dummyData = {
    guardianName: "John Doe",
    elderName: "Jane Smith",
    duration: "2 weeks",
    roomType: "Single",
    caregiverGender: "Female",
    date: "2023-09-15",
    specialRequirements:
      "Special diet- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    roomOptions: ["Room 101", "Room 102"],
    bedOptions: ["Bed A", "Bed B"],
    caregiverOptions: ["Caregiver 1", "Caregiver 2"],
  };

  const { elderid } = useParams();

  const [people, setPeople] = useState([]);

  useEffect(() => {
    // Make the GET request using Axios to fetch data from the backend
    axios.get(`http://localhost:8080/api/beds/request10/${elderid}`)
      .then((response) => setPeople(response.data))
      .catch((error) => console.error(error));
      console.log(people)
  }, []);

  return (
    <div className="req-continue">
      <Header />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Sidebar menuItems={ManagerMenuItem} />
        <Box className="request-continue-container">
          <h2>Guardian Request</h2>
          <div className="request-details">
            <div className="left-details">
              <p className="label-topic">Guardian's Name:</p>
              <p className="topic-content">{people.guradianName}</p>

              <p className="label-topic">Elder's Name:</p>
              <p className="topic-content">{people.elderName}</p>

              <p className="label-topic">Duration:</p>
              <p className="topic-content">{people.duration}</p>

              <p className="label-topic">Requested Room Type:</p>
              <p className="topic-content">{people.type}</p>

            </div>

            <div className="right-details">
              <p className="label-topic">Requested Caregiver's Gender:</p>
              <p className="topic-content">{people.caregiverGender}</p>

              <p className="label-topic">Date:</p>
              <p className="topic-content">{people.assStartDate}</p>

              <p className="label-topic">Special Requirements:</p>
              <p className="topic-content">{people.specRe}</p>

            </div>
          </div>
          <div className="select-options">
            <FormControl>
              <InputLabel>Room No</InputLabel>
              <Select>
                {dummyData.roomOptions.map((room, index) => (
                  <MenuItem key={index} value={room}>
                    {room}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel>Bed No</InputLabel>
              <Select>
                
                  <MenuItem value={people.bed_id}>
                    {people.bed_id}
                  </MenuItem>
               
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel>Caregiver</InputLabel>
              <Select>
                {dummyData.caregiverOptions.map((caregiver, index) => (
                  <MenuItem key={index} value={caregiver}>
                    {caregiver}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="action-buttons">
            <Button variant="contained" color="primary">
              Accept
            </Button>
            <Button variant="contained" color="secondary">
              Reject
            </Button>
          </div>
        </Box>
      </Box>
    </div>
  );
}

export default RequestContinue;
