import React, { useState } from "react";
import Header from "../../components/Header";
import Box from "@mui/material/Box";
import Sidebar from "../../components/Sidebar";
import { DoctorMenuItem } from "../../components/DoctorMenuItem";
import "../../styles/Guardian/GuardianAddTasks.css";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBInput,
  MDBTooltip,
} from "mdb-react-ui-kit";
import { Container, Section, Column, Title, Button, Input} from "rbx";
import "rbx/index.css";
import {
  Card,
  Content,
  Progress,
} from "rbx";

export default function App() {
  const [task, setTask] = useState("");
  const [pendingTasks, setPendingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const totalTasks = pendingTasks.length + completedTasks.length;
  const completedPercentage = (completedTasks.length / totalTasks) * 100;
  const pendingPercentage = (pendingTasks.length / totalTasks) * 100;

  const handleAddTask = () => {
    if (task.trim() !== "") {
      const newTask = {
        text: task,
        date: new Date().toLocaleDateString(),
      };
      setPendingTasks([...pendingTasks, newTask]);
      setTask("");
    }
  };

  return (
    <div className="Elders" style={{ backgroundColor: "#F9FFFE", minHeight: "100vh", fontSize: "13px" }}>
      <Header />
      <Box height={80} />
      <Box sx={{ display: "flex" }}>
        <Sidebar menuItems={DoctorMenuItem} />
        <Box component="main" sx={{ flexGrow: 1, justifyContent: "center", alignItems: "left", margin: 3 }}>
          <div className="topic_1" sx={{ justifyContent: "center", alignItems: "left", color: "#05445E" }}>
            <Title textAlign="left" style={{ color: "#05445E", fontSize: "27px" }}>
              Manage Tasks
            </Title>
          </div>

          <Container>
            <Section>
              <Column size="half" style={{ display: "flex", flexDirection: "row" }}>
              <Input
                  type="text"
                  placeholder="Add a new task..."
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  style={{ textAlign: "left" }}
                />
                <Button color="info" onClick={handleAddTask} style={{ backgroundColor: "#189AB4", marginLeft: "10px" }}>
                  Add Task
                </Button>
              </Column>
            </Section>

            <Column.Group>
              {/* Pending Tasks Section */}
              <Column size="half">
                <Card style={{ backgroundColor: "#189AB4", minHeight: "200px" }}>
                  <Card.Content>
                    <Content>
                      <Title style={{ color: "#05445E", fontSize: "20px" }}>
                        Pending Tasks
                      </Title>
                      {pendingTasks.length === 0 ? (
                        <p>No pending tasks</p>
                      ) : (
                        <ul>
                          {pendingTasks.map((t, index) => (
                            <li key={index}>
                              {t.text} (Added on {t.date})
                            </li>
                          ))}
                        </ul>
                      )}
                    </Content>
                  </Card.Content>
                </Card>
              </Column>

              {/* Completed Tasks Section */}
              <Column size="half">
                <Card style={{ backgroundColor: "#75E6DA", minHeight: "200px" }}>
                  <Card.Content>
                    <Content>
                      <Title style={{ color: "#05445E", fontSize: "20px" }}>
                        Completed Tasks
                      </Title>
                      {completedTasks.length === 0 ? (
                        <p>No completed tasks</p>
                      ) : (
                        <ul>
                          {completedTasks.map((t, index) => (
                            <li key={index}>
                              {t.text} (Completed on {t.date})
                            </li>
                          ))}
                        </ul>
                      )}
                    </Content>
                  </Card.Content>
                </Card>
              </Column>
            </Column.Group>

            {/* Task Completion Analysis Section */}
            <Section>
              <Column size="half" offset="one-quarter">
                <Card>
                  <Card.Content>
                    <Content>
                      <Title style={{ color: "#05445E", fontSize: "20px" }}>
                        Task Completion Analysis
                      </Title>
                      <p>Total Tasks: {totalTasks}</p>
                      <Progress
                        value={completedPercentage}
                        color="success"
                        style={{ height: "10px", marginBottom: "5px" }}
                      >
                        Completed Tasks: {completedTasks.length}
                      </Progress>
                      <Progress
                        value={pendingPercentage}
                        color="danger"
                        style={{ height: "10px", marginBottom: "5px" }}
                      >
                        Pending Tasks: {pendingTasks.length}
                      </Progress>
                    </Content>
                  </Card.Content>
                </Card>
              </Column>
            </Section>

          </Container>

          <Box height={40} />
        </Box>
      </Box>
    </div>
  );
}
