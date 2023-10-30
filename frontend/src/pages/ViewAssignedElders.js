import React from "react";
import Header from "../components/Header";
import Box from "@mui/material/Box";
import Sidebar from "../components/Sidebar";
import { blueGrey } from "@mui/material/colors";
import { DoctorMenuItem } from "../components/DoctorMenuItem";
import { PieChart } from "@mui/x-charts/PieChart";
import Grid from "@mui/material/Grid";
import "../styles/ViewAssignedElders.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img_1 from '../assets/E1.jpg';
import img_2 from '../assets/E2.jpg';
import img_5 from '../assets/E5.jpg';
import img_3 from '../assets/E3.jpg';


function ViewAssignedRooms() {
  const eldersData = [
    {
      name: "Mr. Malu Banis",
      roomCategory: "Luxury",
      roomNo: 15,
      image: img_1,
    },
    {
      name: "Mr. Ros Pan",
      roomCategory: "Luxury",
      roomNo: 22,
      image: img_2,
    },

    {
      name: "Mr. Seenidasa",
      roomCategory: "Classic",
      roomNo: 56,
      image: img_3,
    }, 
    {
      name: "Mr. Kithul Hakuru",
      roomCategory: "Luxury",
      roomNo: 25,
      image: img_5,
    },   // Add more elders as needed
  ];

  // Group elders in pairs
  const groupedElders = eldersData.reduce((result, item, index) => {
    if (index % 2 === 0) {
      result.push([item]);
    } else {
      result[result.length - 1].push(item);
    }
    return result;
  }, []);

  return (
    <div className="Elders" style={{ backgroundColor: "#F9FFFE", minHeight: "100vh" }}>
      <Header />
      <Box height={80} />
      <Box sx={{ display: "flex" }}>
        <Sidebar menuItems={DoctorMenuItem} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            margin: 3,
          }}
        >
          <div className="topic_1" sx={{ justifyContent: "center", alignItems: "center" }}>
            <h4>You have to take care of these elders !</h4>
          </div>

          <Grid
            container
            spacing={3}
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <div className="main-part">
              {groupedElders.map((row, rowIndex) => (
                <div className="row" key={rowIndex} style={{ textAlign: "center" }}>
                  {row.map((elder, index) => (
                    <Card key={index} sx={{ display: 'flex', minWidth: "300px",  height: 140 , marginLeft: "120px", marginTop: "100px"}}>
                      <CardMedia
                        component="img"
                        sx={{ width: "130px"}}
                        image={elder.image}
                        alt={`Image of ${elder.name}`}
                      />
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                          <Typography component="div" variant="h5">
                            {elder.name}
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" component="div">
                            Room Category - {elder.roomCategory} <br></br><h6>Rooms no {elder.roomNo}</h6>
                          </Typography>
                        </CardContent>
                        <CardActions>
                          {/* Add any actions or buttons here */}
                        </CardActions>
                      </Box>
                    </Card>
                  ))}
                </div>
              ))}
            </div>
          </Grid>
          <Box height={40} />
        </Box>
      </Box>
    </div>
  );
}

export default ViewAssignedRooms;
