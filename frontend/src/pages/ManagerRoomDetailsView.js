import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Box from "@mui/material/Box";
import { ManagerMenuItem } from "../components/ManagerMenuItem";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import "../styles/ManagerRoomDetailsView.css";

import img_1 from "../assets/guardian/guardian.jpg";

export default function ManagerRoomDetailsView() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    // Dummy data for rooms and their details
    const dummyRooms = [
      {
        id: 1,
        roomName: "Room 101",
        caregiver: "John Doe",
        elders: [
          { id: 1, name: "Elder 1", image: "elder1.jpg" },
          { id: 2, name: "Elder 2", image: "elder2.jpg" },
        ],
        roomImage: "img_1",
      },
      {
        id: 2,
        roomName: "Room 102",
        caregiver: "Jane Smith",
        elders: [
          { id: 3, name: "Elder 3", image: "elder3.jpg" },
          { id: 4, name: "Elder 4", image: "elder4.jpg" },
        ],
        roomImage: "room102.jpg",
      },
    ];

    setRooms(dummyRooms);
  }, []);

  return (
    <div className="room-details">
      <Header />
      <Box height={80} />
      <Box className="room-details-content">
        <Sidebar menuItems={ManagerMenuItem} />
        <main className="room-details-body">
          <div className="room-card-list">
            {rooms.map((room) => (
              <Card className="room-card" key={room.id}>
                <CardContent>
                  <img src={room.roomImage} alt={room.roomName} className="room-image" />
                  <Typography variant="h5" component="div">
                    {room.roomName}
                  </Typography>
                  <Typography variant="subtitle1" className="caregiver">
                    Caregiver: {room.caregiver}
                  </Typography>
                  <Typography variant="subtitle1" className="elders">
                    Elders:
                  </Typography>
                  <Grid container spacing={1}>
                    {room.elders.map((elder) => (
                      <Grid item key={elder.id}>
                        <Avatar alt={elder.name} src={elder.image} />
                        <Typography variant="body2" className="elder-name">
                          {elder.name}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </Box>
    </div>
  );
}
