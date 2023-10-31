import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Box } from "@mui/material";
import { ManagerMenuItem } from "../components/ManagerMenuItem";
import doctor from "../assets/doctor.png";
import "../styles/AddDoctor.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";

function createData(id, name, startDate, endDate) {
  return {
    id,
    name,
    startDate,
    endDate,
  };
}

const rows = [
  createData(1, "Task 1", "2023-01-01", "2023-01-10"),
  createData(2, "Task 2", "2023-02-15", "2023-03-01"),
  createData(2, "Task 2", "2023-02-15", "2023-03-01"),
  createData(2, "Task 2", "2023-02-15", "2023-03-01"),
  createData(2, "Task 2", "2023-02-15", "2023-03-01"),
  createData(2, "Task 2", "2023-02-15", "2023-03-01"),
  // ... rest of the rows ...
];

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  {
    id: "startDate",
    numeric: false,
    disablePadding: false,
    label: "Start Date",
  },
  {
    id: "endDate",
    numeric: false,
    disablePadding: false,
    label: "End Date",
  },
];

const EightPartsPage = () => {
  const [dense, setDense] = React.useState(false);

  const partStyle = {
    flex: 1,
    margin: "70px",
    height: "50%",
    width: "450px",
    border: "1px solid #ccc",
    overflowY: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "18px",
  };

  const rowStyle = {
    display: "flex",
    flexDirection: "row",
  };

  return (
    <div className="addDoctor">
      <Header />
      <Box height={80} />
      <Box sx={{ display: "flex" }}>
        <Sidebar menuItems={ManagerMenuItem} />
        <div className="app">
        
          <div>
          <div className="heading" sx={{alignItems: 'left'}}>
          <h4>Occupancy Overview</h4>
          </div>
          
            {/* First row */}
            <div style={{ ...rowStyle, height: "100px" }}>
              <div
                style={{
                  ...partStyle,
                  borderRadius: "15px",
                  backgroundColor: "#05445E",
                  color: "#D4F1F4",
                }}
              >
                Occupied Beds
              </div>
              <div
                style={{
                  ...partStyle,
                  borderRadius: "15px",
                  backgroundColor: "#05445E",
                  color: "#D4F1F4",
                }}
              >
                Occupied Caregivers
              </div>
            </div>

            {/* Second row */}
            <div style={{ ...rowStyle, height: "500px" , marginTop: "-20px" }}>
              <div style={{ ...partStyle, borderRadius: "15px" }}>
                <TableContainer>
                  <Table
                    sx={{ minWidth: "400px", marginTop: "100px" }}
                    aria-labelledby="tableTitle"
                    size={dense ? "small" : "medium"}
                  >
                    <TableHead>
                      <TableRow>
                        {headCells.map((headCell) => (
                          <TableCell
                            key={headCell.id}
                            align="center"
                            padding={
                              headCell.disablePadding ? "none" : "normal"
                            }
                            style={{
                              position: "sticky",
                              top: 0,
                              backgroundColor: "#fff",
                              zIndex: 1,
                            }}
                          >
                            {headCell.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell align="center">{row.name}</TableCell>
                          <TableCell align="center">{row.startDate}</TableCell>
                          <TableCell align="center">{row.endDate}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
              <div style={{ ...partStyle, borderRadius: "15px" }}>
                <TableContainer>
                  <Table
                    sx={{ minWidth: "400px", marginTop: "100px" }}
                    aria-labelledby="tableTitle"
                    size={dense ? "small" : "medium"}
                  >
                    <TableHead>
                      <TableRow>
                        {headCells.map((headCell) => (
                          <TableCell
                            key={headCell.id}
                            align="center"
                            padding={
                              headCell.disablePadding ? "none" : "normal"
                            }
                            style={{
                              position: "sticky",
                              top: 0,
                              backgroundColor: "#fff",
                              zIndex: 1,
                            }}
                          >
                            {headCell.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell align="center">{row.name}</TableCell>
                          <TableCell align="center">{row.startDate}</TableCell>
                          <TableCell align="center">{row.endDate}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>

            {/* Third row */}
            <div style={{ ...rowStyle, height: "100px", marginTop: "-150px" }}>
              <div
                style={{
                  ...partStyle,
                  borderRadius: "15px",
                  backgroundColor: "#189AB4",
                  color: "#05445E",
                }}
              >
                Assigned Beds
              </div>
              <div
                style={{
                  ...partStyle,
                  borderRadius: "15px",
                  backgroundColor: "#189AB4",
                  color: "#05445E",
                }}
              >
                Assigned Caregivers
              </div>
            </div>

            {/* Fourth row */}
            <div style={{ ...rowStyle, height: "500px" , marginTop: "-20px" }}>
              <div style={{ ...partStyle, borderRadius: "15px" }}>
                <TableContainer>
                  <Table
                    sx={{ minWidth: "400px", marginTop: "100px" }}
                    aria-labelledby="tableTitle"
                    size={dense ? "small" : "medium"}
                  >
                    <TableHead>
                      <TableRow>
                        {headCells.map((headCell) => (
                          <TableCell
                            key={headCell.id}
                            align="center"
                            padding={
                              headCell.disablePadding ? "none" : "normal"
                            }
                            style={{
                              position: "sticky",
                              top: 0,
                              backgroundColor: "#fff",
                              zIndex: 1,
                            }}
                          >
                            {headCell.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell align="center">{row.name}</TableCell>
                          <TableCell align="center">{row.startDate}</TableCell>
                          <TableCell align="center">{row.endDate}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
              <div style={{ ...partStyle, borderRadius: "15px" }}>
                <TableContainer>
                  <Table
                    sx={{ minWidth: "400px", marginTop: "100px" }}
                    aria-labelledby="tableTitle"
                    size={dense ? "small" : "medium"}
                  >
                    <TableHead>
                      <TableRow>
                        {headCells.map((headCell) => (
                          <TableCell
                            key={headCell.id}
                            align="center"
                            padding={
                              headCell.disablePadding ? "none" : "normal"
                            }
                            style={{
                              position: "sticky",
                              top: 0,
                              backgroundColor: "#fff",
                              zIndex: 1,
                            }}
                          >
                            {headCell.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell align="center">{row.name}</TableCell>
                          <TableCell align="center">{row.startDate}</TableCell>
                          <TableCell align="center">{row.endDate}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default EightPartsPage;
