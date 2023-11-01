import React, { useState, useEffect } from 'react';
import { ManagerMenuItem } from "../components/ManagerMenuItem";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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
  const [uniqueArray, setUniqueArray] = useState([]);
  const [people, setPeople] = useState([]);
  const [idds, setIdds] = useState('');
  const [day, setDay] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    // Make the GET request using Axios to fetch data from the backend
    axios.get(`http://localhost:8080/api/beds/request10/${elderid}`)
      .then((response) => setPeople(response.data))
      .catch((error) => console.error(error));
      console.log(people)
  }, []);

  function calculateDuration(assStartDate, assEndDate) {
    if (!assStartDate || !assEndDate) {
      return '';
    }

    const start = new Date(assStartDate);
    const end = new Date(assEndDate);

    // Calculate the difference in milliseconds
    const durationMs = end - start;

    // Calculate the number of days
    const days = Math.floor(durationMs / (1000 * 60 * 60 * 24));

    return days;
  }



  const check = async (assStartDate, assEndDate, caregiverGender) =>  {
    
    try {
      const response = await axios.post("http://localhost:8080/api/beds/request1", {
        assStartDate: assStartDate,
        assEndDate: assEndDate,
        gender: caregiverGender,
      });
      
  
      if (response.data.length !== 0){
        const bedIds = response.data.map((item) => item.user_id);

        const uniqueElements = [];
    
    bedIds.forEach((element) => {
      if (!uniqueElements.includes(element)) {
        uniqueElements.push(element);
      }
    });

    setUniqueArray(uniqueElements);
    console.log(uniqueArray);
        

        
        axios.post(`http://localhost:8080/api/beds/request6/${uniqueArray}`,{
          assStartDate: assStartDate,
          assEndDate: assEndDate,
          gender: caregiverGender,
          
        }).then((res) => {
          
          if (res.data.str === "good"){
            setIdds(res.data.id);
            alert("good");

            // axios.post("http://localhost:8080/api/beds/request23",{id: res.data.id, assStartDate: assStartDate, assEndDate: assEndDate})
            // .then((res) => {
            //   if (res.data.str == "good"){
            //     setIdds(res.data.id);
            //     alert("good");
            //   }else{
            //     alert("bad");
            //   }
            // })
          }else{
            alert("bad");
            
          }
          
        
        }).catch((error) => {
          console.error(error); 
        });
        
     
       
      
      }else{
        alert("bad");
      }
      

    } catch (err) {
      alert(err);
    }
    
  }

  const accept = async (assStartDate, assEndDate, idds, elderid, bed_id, type) => {

    console.log(elderid);
    try {
      await axios.post(`http://localhost:8080/api/beds/request11`,{
        assStartDate: assStartDate,
        assEndDate: assEndDate,
        assElderId: elderid,
        caregiverId: idds,
        bed_id: bed_id,
        type: type,
      })
      .then((response) => alert(response.data))
      .catch((error) => console.error(error));
      axios.delete(`http://localhost:8080/api/beds/delete/${people.id}`);
      navigate('/GuardianRequest');
      
    } catch (error) {
      console.error('Error deleting helllo:', error);
    }
    
};

const acceptt = async (elderid, price, id, idds) => {

  console.log(elderid);
  try {
    await axios.post(`http://localhost:8080/api/beds/request20`,{
      id: elderid,
      price: price,
      lowerage: id,
      upperage: idds,
    })
    navigate('/GuardianRequest');
    
  } catch (error) {
    console.error('Error deleting helllo:', error);
  }
  
};

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
              <p className="topic-content">{people.duration} days</p>

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

              <p className="label-topic">Price:</p>
              <p className="topic-content">Rs. {people.price}</p>

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
                
                  <MenuItem value={idds}>
                    {idds}
                  </MenuItem>
            
              </Select>
            </FormControl>
          </div>
          <div className="action-buttons">
          <Button variant="contained" color="primary" onClick={() => check(people.assStartDate, people.assEndDate, people.caregiverGender)}>
              Check for Caregiver
            </Button>
            {/* <Button variant="contained" color="primary" onClick={() => accept(people.assStartDate, people.assEndDate, idds, elderid, people.bed_id, people.type)}> */}
            <Button variant="contained" color="primary" onClick={() => acceptt(elderid, people.price, people.id, idds)}>
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
