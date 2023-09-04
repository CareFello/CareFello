import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, CardMedia, Grid } from '@mui/material';

function ElderCard() {

  const [elderList, setElderList] = useState([]);
  const guardianId = 1;

  const url = 'http://localhost:8080/api/v1/guardian/' + guardianId + '/elders/viewElderByGuardianId'
  const url2 = 'http://localhost:8080/api/v1/guardian/' + guardianId + '/elders/viewElderImagesByGuardianId'
  useEffect(() => {
    // Make an HTTP GET request to your backend
    axios.get(url)
      .then((response) => {
        console.log(response.data); // Add this line to log the data received
        setElderList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching elders:', error);
      });
    axios.get(url2)
      .then(response => {
        const elderImages = response.data;
        // Handle elder images as needed
      })
      .catch(error => {
        // Handle error
      });
  }, [guardianId]);
  return (
    <div>
      <Grid container spacing={2}>
        {elderList.map(elder => (
          <Grid item key={elder.id} xs={12} sm={4} md={1} lg={4}>
            <Card
              style={{
                minWidth: 165,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardMedia
                component="img"
                alt={elder.name}
                height="160"
                image={"data:image/jpg;base64," + elder.imageData}
              />
              <CardContent style={{ flex: 1 }}>
                <Typography variant="h6">{elder.name}</Typography>
                <Typography variant="body2">{elder.relationship}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default ElderCard;


