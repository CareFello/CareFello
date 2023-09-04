import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import Table from 'react-bootstrap/Table';
import "../styles/Caregiverlist.css";
import Person from "./../assets/person.jpeg";
import Header from "../components/Header";
import Footer from "../components/HomepageFooter";
import Sidebar from "../components/Sidebar";
import * as icon from "react-icons/md";
import { ManagerMenuItem } from "../components/ManagerMenuItem";
import Box from "@mui/material/Box";
import Profimg from "../assets/profile1.png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Paper";
import { Link } from "react-router-dom";

function createDataa(profileimg, name, guardian, age,) {
  return { profileimg, name, guardian, age, };
}

const rows = [
  createDataa(
    Profimg,
    "Piyadasa",
    "G.M.Perera",
    "68",
  ),
  createDataa(
    Profimg,
    "G.L.Lahiru",
    "Pathirana",
    "72",
    
  ),
  createDataa(
    Profimg,
    "M.Priyani",
    "Jayani",
    "73",
 
  ),
  createDataa(
    Profimg,
    "sehin David",
    "michelle David",
    "80",
    
  ),
 
];

// const handleEdit = (rowData) => {
//   // Implement edit logic here using rowData
// };

// const handleView = (rowData) => {
//   // Implement view logic here using rowData
// };

// const handleDelete = (rowData) => {
//   // Implement delete logic here using rowData
// };

const Caregiverlist = () => (
  <div>
    <Box height={80} />
    <Header />
    <div className="d-flex gap-4">
      <div className="sidbar-div">
        <Sidebar menuItems={ManagerMenuItem} />
        {/* <Sidebar /> */}
      </div>

      {/* <Table striped bordered hover className="table-height">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Reg No</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>

              <img className="rounded-pill" src={Person} alt="" style={{ width: "39px", height: "40px" }} />

            </td>

            <td>Sanath</td>
            <td>cg-11</td>
            <td>sanath@gmail.com</td>
            <td>0771234567</td>
            <td>Assigned</td>
            <td>
              <button
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  padding: "3px 3px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  margin: "10px",
                }}
                onClick={() => {
                  console.log("Button clicked!");
                } }
              >
                <icon.MdEdit size="1.5rem" color="black" /> </button>    
              <button
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  padding: "3px 5px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  margin: "10px",
                }}
                onClick={() => {
                  console.log("Button clicked!");
                } }
              >
                <icon.MdPersonPin size="1.5rem" color="blue" /> </button>
              <button
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  padding: "3px 5px",
                  borderRadius: "3px",
                  cursor: "pointer",
                  margin: "10px",
                }}
                onClick={() => {
                  console.log("Button clicked!");
                } }
              >
                <icon.MdDelete size="1.5rem" color="red" /> </button>
            </td>
          </tr>
          <tr>
            <td>

              <img className="rounded-circle" src={Person} alt="" style={{ width: "39px", height: "40px" }} />

            </td>

            <td>Sanath</td>
            <td>cg-11</td>
            <td>sanath@gmail.com</td>
            <td>0771234567</td>
            <td>unassigned</td>
            <td></td>
          </tr>
          <tr>
            <td>

              <img className="rounded-circle" src={Person} alt="" style={{ width: "39px", height: "40px" }} />

            </td>

            <td>Sanath</td>
            <td>cg-11</td>
            <td>sanath@gmail.com</td>
            <td>0771234567</td>
            <td>Assigned</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <img className="rounded-circle" src={Person} alt="" style={{ width: "39px", height: "40px" }} />
            </td>
            <td>Sanath</td>
            <td>cg-11</td>
            <td>sanath@gmail.com</td>
            <td>0771234567</td>
            <td>unassigned</td>
            <td></td>
          </tr>
        </tbody>
      </Table> */}

      <TableContainer component={Paper} style={{ marginBottom: "10px" }}>
        <Table style={{ backgroundColor: "#d4d4d459" }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ borderBottom: "1px solid #ccc" }}>
              <TableCell align="center">Image</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Guardian</TableCell>
              <TableCell align="center">Age</TableCell>
              {/* <TableCell align="center">Mobile</TableCell>
              <TableCell align="center">status</TableCell> */}
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.name}
                style={{ borderBottom: "1px solid #ccc" }}
                sx={{
                  "&:hover": {
                    backgroundColor: "#d4d4d459", // Change background color on hover

                  },
                  // Add any other custom styles you want
                }}
              >
                <TableCell align="center">
                  <img src={row.profileimg} alt={`Photo ${Profimg}`} style={{ width: "50px", height: "50px" }}/>
                </TableCell>
                <TableCell fontWeight="bolder" align="center">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.guardian}</TableCell>
                <TableCell align="center">{row.age}</TableCell>
                {/* <TableCell align="center">{row.Mobile}</TableCell>
                <TableCell align="center">{row.Status}</TableCell> */}

 
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    <div className="contactus">{/* <Footer /> */}</div>
  </div>
);
export default Caregiverlist;
