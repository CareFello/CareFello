//code for add task
import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { TextField, Button, Switch, FormControlLabel } from "@mui/material";
import Stack from "@mui/material/Stack";
import { GuardianMenuItem } from "../../components/GuardianMenuItem";
import { Modal } from "@mui/material";
//import "../../styles/DoctorViewHealthTips.css";
const days = ["M", "T", "W", "Th", "F", "Sa", "Su"]; // Days of the week
const GuardianAddDailyTask = () => {
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState({
    description: "",
    time: "",
    repeat: false,
    selectedDays: new Set(),
  });

  const handleDayClick = (day) => {
    const selectedDays = new Set(task.selectedDays);
    if (selectedDays.has(day)) {
      selectedDays.delete(day);
    } else {
      selectedDays.add(day);
    }
    setTask({ ...task, selectedDays });
  };

  const handleRepeatChange = (event) => {
    setTask({ ...task, repeat: event.target.checked });
  };

  const handleAddTask = () => {
    setTasks([...tasks, task]);
    setTask({
      description: "",
      time: "",
      repeat: false,
      selectedDays: new Set(),
    });
    setOpen(false);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    const taskToEdit = tasks[index];
    setTask(taskToEdit);
    deleteTask(index);
    setOpen(true);
  };
  return (
    <div className="DailyTask">
      <Header />
      <Box height={80} />
      <Box sx={{ display: "flex" }}>
        <Sidebar menuItems={GuardianMenuItem} />
        <Box component="main" sx={{ p: 3 }}  ></Box>

        <div>
          <Grid container>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                Width: 800,
                
              }}
            >
              <Grid item xs={12} md={6}>
                <Typography variant="h6" align="center">
                  Task List
                </Typography>
                {tasks.length > 0 ? (
                  tasks.map((task, index) => (
                    <Paper
                      key={index}
                      sx={{ borderRadius: 3, padding: 2, margin: 2 }}
                      width="100%"
                      
                    >
                      <Typography>
                        {task.description} - {task.time}
                      </Typography>
                      <Stack
                        direction="row"
                        spacing={1}
                        justifyContent="flex-end"
                      >
                        <Button
                          variant="contained"
                          size="small"
                          onClick={() => deleteTask(index)}
                        >
                          Delete
                        </Button>
                        <Button
                          variant="contained"
                          size="small"
                          onClick={() => editTask(index)}
                        >
                          Edit
                        </Button>
                      </Stack>
                    </Paper>
                  ))
                ) : (
                  <Typography variant="body1" align="center">
                    No tasks added yet.
                  </Typography>
                )}
              </Grid>
            </Box>

            <Box sx={{ position: "fixed", bottom: 100, right: 200 }}>
              <Button variant="contained" onClick={() => setOpen(true)}>
                Add Task
              </Button>
            </Box>
          </Grid>

          <Modal open={open} onClose={() => setOpen(false)}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 4,
                width: 600,
                borderRadius: 5,
              }}
            >
              <Typography variant="h6" gutterBottom>
                Add Task
              </Typography>
              <div>
                <Box sx={{ width: "100%", marginTop: 3, marginBottom: 3 }}>
                  <Stack spacing={3}>
                    <input
                      type="text"
                      value={task.description}
                      onChange={(e) =>
                        setTask({ ...task, description: e.target.value })
                      }
                      placeholder="Description"
                    />
                    <input
                      type="time"
                      value={task.time}
                      onChange={(e) =>
                        setTask({ ...task, time: e.target.value })
                      }
                      sx={{ borderRadius: 8 }}
                    />
                  </Stack>
                </Box>
                <Box sx={{ width: 200, mariginTop: "5px", marginBottom: 3 }}>
                  <Typography variant="h8"> Select Days</Typography>
                  <Stack
                    spacing={{ xs: 1, sm: 2 }}
                    direction="row"
                    useFlexGap
                    sx={{ marginTop: 2 }}
                    // flexWrap="wrap"
                  >
                    {days.map((day) => (
                      <Button
                        key={day}
                        variant={
                          task.selectedDays.has(day) ? "contained" : "outlined"
                        }
                        onClick={() => handleDayClick(day)}
                      >
                        {day}
                      </Button>
                    ))}
                  </Stack>
                </Box>
                {/* <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                ></Stack> */}
              </div>
              <Box sx={{ marginBottom: 3 }}>
                <Typography sx={{ marginRight: 2, marginBottom: 2 }}>
                  Repeat Task{" "}
                </Typography>
                <input
                  type="checkbox"
                  checked={task.repeat}
                  onChange={handleRepeatChange}
                  //   sx={{marginLeft:2,}}
                />
              </Box>

              <Button variant="contained" onClick={handleAddTask}>
                Add Task
              </Button>
            </Box>
          </Modal>
        </div>
      </Box>
    </div>
  );
};
export default GuardianAddDailyTask;
