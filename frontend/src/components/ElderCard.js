import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, CardMedia, Grid } from '@mui/material';

function ElderCard({ guardianId }) {
  const [elderList, setElderList] = useState([]);

  const url = "http://localhost:8080/api/v1/guardian/${guardianId}/elders/viewElderByGuardianId";

  useEffect(() => {
    // Make an HTTP GET request to fetch elders' details and images
    axios.get(`http://localhost:8080/api/v1/guardian/${guardianId}/elders/viewElderByGuardianId`)
      .then((response) => {
        console.log(response.data);
        setElderList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching elders:', error);
      });
  }, [guardianId]);

  return (
    <div>
      <Grid container spacing={2}>
        {elderList.map((elder) => (
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
                height="140"
                alt={elder.name}
                image={elder.imagePath} // Use the image path directly from the elder object
              />
              <CardContent style={{ flex: 1 }}>
                <Typography variant="h6">{elder.name}</Typography>
                <Typography variant="body2">{elder.relationship}</Typography>
                <Typography variant="body2">{elder.image}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ElderCard;





