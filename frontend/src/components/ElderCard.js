import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, CardMedia, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import pro from "../assets/avatar.png";

function ElderCard({ guardianId }) {
  const [elderList, setElderList] = useState([]);

  useEffect(() => {
    // Make an HTTP GET request to fetch elders' details including images
    axios.get(`http://localhost:8080/api/v1/guardian/${guardianId}/elders/viewElderByGuardianId`)
      .then((response) => {
        console.log(response.data);
        setElderList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching elders:', error);
      });
  }, [guardianId]);

  // Function to generate placeholder cards with the "Space for Loved Once" text
  const generatePlaceholderCards = () => {
    const placeholders = [];
    for (let i = 0; i < 4; i++) {
      placeholders.push(
        <Grid item key={`placeholder-${i}`} xs={12} sm={6} md={3} lg={3}>
          <Card
            style={{
              maxWidth: 165,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <CardMedia
              component="img"
              height="100"
              alt="Space for Your Loved Once"
              src={pro}
            />
            <CardContent style={{ flex: 1 }}>
              <Typography variant="h6">Space for Your Loved Once</Typography>
            </CardContent>
          </Card>
        </Grid>
      );
    }
    return placeholders;
  };

  return (
    <div>
      <Grid container spacing={2}>
        {elderList.map((elder, index) => (
          <Grid item key={elder.id} xs={12} sm={6} md={3} lg={3}>
            <NavLink to={`/elder/${elder.id}?guardianId=${guardianId}`} style={{ textDecoration: 'none' }}>
              <Card
                style={{
                  maxWidth: 165,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardMedia
                  component="img"
                  height="100"
                  alt={elder.name}
                  src={elder.image ? `data:image/jpeg;base64,${elder.image}` : pro}
                  onError={(e) => {
                    e.target.src = pro;
                  }}
                />
                <CardContent style={{ flex: 1 }}>
                  <Typography variant="h6">{elder.name}</Typography>
                  <Typography variant="body2">{elder.relationship}</Typography>
                </CardContent>
              </Card>
            </NavLink>
          </Grid>
        ))}
        {/* Generate placeholder cards for the remaining empty slots */}
        {elderList.length < 4 && generatePlaceholderCards().slice(0, 4 - elderList.length)}
      </Grid>
    </div>
  );
}

export default ElderCard;
