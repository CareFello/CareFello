import React, { useState } from "react"; // Import useState from react
import { Button, Modal, TextField } from "@mui/material"; // Import Button, Modal, and TextField from @mui/material
import Sidebar from "../components/Sidebar";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import DrawerHeader from "@mui/material/Drawer";
import Header from "../components/Header";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ElderlyIcon from "@mui/icons-material/Elderly";
import Stack from "@mui/material/Stack";
import img_1 from "../assets/elderundercare.jpg";
import img_2 from "../assets/pendingcheckups.jpg";
import img_3 from "../assets/Checkuprequest.jpg";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { TextInput, Label, FileInput, Checkbox, Textarea } from "flowbite-react"


import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DoctorMenuItem } from "../components/DoctorMenuItem";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";
import { ChartsLegend } from "@mui/x-charts/ChartsLegend";
import Tooltip from "@mui/material/Tooltip";
import { axisClasses } from "@mui/x-charts";
import "../styles/ManagerDashboard.css";
import Proimg from "../assets/profile1.png";
import "../styles/Doctordashboard.css";
import { withTheme } from "@emotion/react";
import { blueGrey } from "@mui/material/colors";


// import Tooltip from '@mui/material/Tooltip';
// import dayjs, { Dayjs } from 'dayjs';
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

function createDataa(date, time, max_elders) {
  return { date, time, max_elders };
}

const rows = [
  createDataa("2023-10-25", "08:00 A.M - 10:00 A.M", 5),
  // Add more rows as needed
];

const chartSetting = {
  yAxis: [],
  width: 300,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "rotate(-90deg) translate(0px, -20px)",
    },
  },
};
const dataset = [
  {
    "35-45": 2,
    "45-55": 12,
    Other: 6,
    Gender: "Male",
  },
  {
    "35-45": 1,
    "45-55": 9,
    Other: 3,

    Gender: "Female",
  },
];

const valueFormatter = (value) => `${value}`;

function DoctorDashboard() {

  const { doctorId } = useParams();
  console.log(doctorId)

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  async function handleSubmit(event){
    event.preventDefault(); 
        try {
            await axios.post(`http://localhost:8080/api/v1/doctor/${doctorId}/timeSlot/addTimeSlot`, {
                startTime: time1,
                finishTime: time2,
                date: date_available,
                maxElders: max,
                
            });

            alert("Time Slot Updated");
            window.location.reload();

        } catch (err) {
            alert(err);
        }
    handleModalClose();
  };

  const [expanded1, setExpanded1] = useState(false); // Add the state variable declaration

  const [date_available, setDateAvailable] = useState("");
  const [max, setMax] = useState("");
  const [time1, setTime1] = useState("");
  const [time2, setTime2] = useState("");

  return (
    <div className="dashboard">
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
          <Grid
            container
            spacing={3}
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <Grid
              item
              xs={12}
              sx={{ backgroundColor: "#cacaca38", p: 3, alignItems: "center" }}
            >
              <p
                style={{ textAlign: "left", fontWeight: "bold", fontSize: 20 }}
              >
                Welcome Perera !
              </p>
              <Stack spacing={4} direction={"row"}>
                <Card sx={{ display: "flex", minWidth: 30 + "%", height: 140 }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h2">
                        18
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        Total Elders Under Care
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        pl: 1,
                        pb: 1,
                      }}
                    ></Box>
                  </Box>
                </Card>
                <Card sx={{ display: "flex", minWidth: 30 + "%", height: 140 }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h2">
                        06
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        Today Pending Checkups
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        pl: 1,
                        pb: 1,
                      }}
                    ></Box>
                  </Box>
                </Card>
                <Card sx={{ display: "flex", minWidth: 30 + "%", height: 140 }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h2">
                        03
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        Checkup Requests
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        pl: 1,
                        pb: 1,
                      }}
                    ></Box>
                  </Box>
                </Card>
              </Stack>
            </Grid>
          </Grid>
          <Box height={40} />
          <Grid container spacing={5}>
            <Grid item xs={4.5}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent>
                  <div className="d-flex flex-column">

                    <p
                      className=""
                      style={{
                        fontWeight: "bolder",
                        marginTop: "5px",
                        color: "#000000",
                        fontSize: "20px",
                      }}
                    >
                      Availability
                    </p>
                    <Button
                      // variant="outlined"
                      onClick={handleModalOpen}
                      sx={{
                        top: "0px", // Adjust the margin top as needed
                        marginLeft: "80%",
                        mariginBottom: "20px",
                        zIndex: 1, // Ensure the button appears above other content
                        fontSize: "12px",
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Add New
                    </Button>

                    {/* Modal for adding a new meal plan */}
                    <Modal open={isModalOpen} onClose={handleModalClose}>
                      <Box
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          bgcolor: "background.paper",
                          boxShadow: 24,
                          p: 4,
                          maxWidth: 400,
                          width: "100%",
                        }}
                      >
                        <Typography variant="h6" align="center">Add Availability</Typography>
                        <form onSubmit={handleSubmit}>

                          <TextInput

                            placeholder="Date"
                            fullWidth
                            type="date"
                            required
                            style={{ marginTop: "5px", fontSize: "13px", }}
                            value={date_available}
                            onChange={(e) => setDateAvailable(e.target.value)} // Add onChange handler
                          />

                          <br />
                          {/* Update the Time Slot TextField */}
                          <div className="timeSlot" sx={{ display: "flex", flexDirection: "row" }}>
                            <TextInput
                              placeholder="From Time A"
                              multiline
                              type="time"
                              rows={3}
                              fullWidth
                              required
                              style={{ marginTop: "5px", fontSize: "13px", }}
                              value={time1}
                              onChange={(e) => setTime1(e.target.value)} // Add onChange handler
                            />

                            <TextInput

                              placeholder="To Time B"
                              multiline
                              type="time"
                              rows={1}
                              fullWidth
                              required
                              style={{ marginTop: "5px", fontSize: "13px", }}
                              value={time2}
                              onChange={(e) => setTime2(e.target.value)} // Add onChange handler
                            />
                          </div>

                          <br />
                          {/* Update the Maximum Elders TextField */}

                          <TextInput

                            placeholder="Maximum elders can observe"
                            type="number"
                            fullWidth
                            required
                            style={{ marginTop: "5px", fontSize: "13px", }}
                            value={max}
                            onChange={(e) => setMax(e.target.value)} // Add onChange handler
                          />
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{ mt: 4 }}
                          >
                            Add
                          </Button>
                        </form>
                      </Box>
                    </Modal>

                    <div className="d-flex flex-column align-content-end">
                      <TableContainer component={Paper}>
                        <Table
                          style={{ backgroundColor: "#D4F1F4" }}
                          aria-label="simple table"
                        >
                          <TableHead>
                            <TableRow
                              style={{
                                backgroundColor: "#189AB4",
                                color: "#189AB4",
                              }}
                            >
                              <TableCell align="center">Date</TableCell>
                              <TableCell align="center">Time</TableCell>
                              <TableCell align="center">Maximum Elders</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody sx={{}}>
                            {rows.map((row) => (
                              <TableRow
                                key={row.name}
                                style={{ borderBottom: "0.5px solid #ccc" }}
                              >
                                <TableCell align="center">{row.date}</TableCell>
                                <TableCell align="center">{row.time}</TableCell>
                                <TableCell align="center">
                                  {row.max_elders}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>

            <Grid
              item
              xs={7}
              sx={{ backgroundColor: "#fff", p: 3, alignItems: "center" }}
            >
              <h2>Desease ratio</h2>
              <br />
              <div
                className="doctor-pie-chart"
                style={{ backgroundColor: "#c5c7ca2e" }}
              >
                <PieChart
                  className="piechart"
                  series={[
                    {
                      data: [
                        {
                          id: 0,
                          value: 10,
                          label: "Diabeties",
                          color: "#FF5733",
                        },
                        {
                          id: 1,
                          value: 15,
                          label: "Heart Desease",
                          color: "#007BFF",
                        },
                        { id: 2, value: 5, label: "Stroke", color: "#33C67F" },
                        {
                          id: 2,
                          value: 5,
                          label: "High Blood Pressure",
                          color: "#FFC107",
                        },
                      ],
                    },
                  ]}
                  backgroundColor={blueGrey}
                  width={500}
                  height={250}
                />
              </div>
            </Grid>

            {/* <Grid item xs={4}>
              <h2>Available Caregiver Details</h2><br />
              <BarChart
                dataset={dataset}
                xAxis={[{ scaleType: 'band', dataKey: 'Gender' }]}
                series={[
                  { dataKey: '35-45', label: 'Age 35-45', valueFormatter },
                  { dataKey: '45-55', label: 'Age 45 -55', valueFormatter },
                  { dataKey: 'Other', label: 'Other', valueFormatter },

                ]}
                {...chartSetting}
              />
            </Grid> */}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default DoctorDashboard;
