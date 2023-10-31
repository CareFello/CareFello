import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { ManagerMenuItem } from "../components/ManagerMenuItem";
import Box from "@mui/material/Box";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

function CaregiverViewReport() {
    const [selectedDate, setSelectedDate] = useState(null);

    function handleDateChange(date) {
        setSelectedDate(date);
    }

    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <Box height={80} />
            <Header />
            <div className="sidbar-div">
                <Sidebar menuItems={ManagerMenuItem} />
            </div>

            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "36px",
                           marginTop: "15%",
                           marginLeft: "10%",
                            width: "100%",
                           
                        }}
                    >
                        <Card
                            sx={{ width: "80%", boxShadow: 3, bgcolor: "#D4F1F4" }}
                        >
                            <CardContent>
                                <Typography variant="h5" component="div" sx={{ textAlign: "left", fontWeight: "bold" }}>
                                    Medication Report
                                </Typography>
                                <div
                                    style={{ display: "flex", flexDirection: "column" }}
                                >
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Vitamin tablet for morning"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Calcium tablet for evening"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Use inhaler for breathing problems"
                                    />
                                    
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Take metformin 100mg after eating"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                        <Card
                            sx={{ width: "80%", boxShadow: 3, bgcolor: "#D4F1F4" }}
                        >
                            <CardContent>
                            <Typography variant="h5" component="div" sx={{ textAlign: "left", fontWeight: "bold" }}>
                                    Daily Routine Report
                                </Typography>
                                <div
                                    style={{ display: "flex", flexDirection: "column" }}
                                >
                                    <FormControlLabel
                                        control={
                                            <Checkbox />
                                        }
                                        label="Begin day with vitamin supplement for added vitality"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Take calcium tablet in the evening to maintain strong bones and overall health"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </Grid>
                 <Grid item xs={4} style={{ marginTop: "10%" }}>
                    <Paper
                        style={{ padding: 16 }}
                        sx={{
                            border: "1px solid #ccc",
                            bgcolor: "#f8f3ef",
                            
                        }}
                    >
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateCalendar
                                showDaysOutsideCurrentMonth
                                fixedWeekNumber={6}
                                date={selectedDate}
                                onChange={(newDate) => handleDateChange(newDate)}
                            />
                        </LocalizationProvider>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default CaregiverViewReport;
