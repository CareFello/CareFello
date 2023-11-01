import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Box from "@mui/material/Box";
import { GuardianMenuItem } from "../../components/GuardianMenuItem";
import "../../styles/Guardian/GuardianComplain.css";
import {
  Container,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Stack,
} from "@mui/material";

export default function GuardianComplain() {
  const [complaints, setComplaints] = useState([]);
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");

  const handleComplaintSubmit = () => {
    const newComplaint = {
      id: Date.now(),
      topic: topic,
      description: description,
    };
    setComplaints([...complaints, newComplaint]);
    setTopic("");
    setDescription("");
  };

  const handleViewResponses = (complaintId) => {
    // Implement viewing responses here
    console.log(`View responses for complaint with ID: ${complaintId}`);
  };

  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#F9FFFE",
      }}
    >
      <Header />
      <Box height={80} />
      <Box sx={{ display: "flex" }}>
        <Sidebar menuItems={GuardianMenuItem} />

        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              {/* <Typography variant="h6" marginBottom="50px" color="#" >Add Complaint</Typography>
               */}

              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Add Complaint
              </h1>

              <Card>
                <CardContent>
                  <Stack spacing={1}>
                    <TextField
                      className="text"
                      // variant="standard"
                      placeholder="Complain Topic"
                      fullWidth
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                    />
                    <TextField
                      placeholder="Complaint Description"
                      //variant="filled"
                      fullWidth
                      multiline
                      rows={4}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleComplaintSubmit}
                    >
                      Submit Complaint
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <div>
                {/* <Typography variant="h6">Previous Complaints</Typography> */}
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Previous Complaint
                </h1>
                {complaints.map((complaint) => (
                  <Card
                    key={complaint.id}
                    style={{ marginBottom: "16px" }}
                    fullWidth
                  >
                    <CardContent>
                      <Stack spacing={2}>
                        <Typography variant="subtitle2" align="center">
                          <span className="label">Date & Time :</span>{" "}
                          {new Date(complaint.id).toLocaleString()} <br />
                          <span className="label">Topic :</span>{" "}
                          {complaint.topic}
                        </Typography>
                        <Typography variant="subtitle2" align="left">
                          {" "}
                          <span className="label">Description :</span> <br />
                          {complaint.description}
                        </Typography>
                        <Button
                          variant="outlined"
                          color="primary"
                          onClick={() => handleViewResponses(complaint.id)}
                        >
                          View Responses
                        </Button>
                      </Stack>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
