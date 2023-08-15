
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import Table from 'react-bootstrap/Table';
import "../styles/Caregiverlist.css"
import Person from "./../assets/person.jpeg"
import Header from "../components/Header";
import Footer from '../components/HomepageFooter';
import Sidebar from '../components/Sidebar';
import * as icon from "react-icons/md";
import { ManagerMenuItem } from '../components/ManagerMenuItem'
import Box from '@mui/material/Box'
import Proimg from '../assets/profile1.png';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function createDataa(profileimg, name, Regno,Email,Mobile,Status,Action) {
  return { profileimg, name, Regno,Email,Mobile,Status,Action };
}

const rows = [
  createDataa(Proimg, 'R.J.Premasiri','cg-11','sanath@gmail.com','0771234567','Assigned'),
  createDataa( Proimg, 'M.F.Abdulla','cg-15','mfAbdulla@gmail.com','0771234567','Assigned'),
  createDataa(Proimg, 'M.Mahendran','cg-18','mahendran@gmail.com','0771234567','Unassigned'),
  createDataa(Proimg, 'G.T.Gunawardena','cg-08','gtguna36@gmail.com','0771234567','Unassigned'),
  createDataa(Proimg, 'David Johnson','cg-02','johndavid@gmail.com','0771234567','Assigned'),
];
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

<TableContainer component={Paper}>
      <Table style={{  backgroundColor:'#D4F1F4', }} aria-label="simple table">
        
        <TableHead>
          <TableRow>
          <TableCell >#</TableCell>
          <TableCell >Name</TableCell>
            <TableCell >Reg No</TableCell>
            <TableCell >E-Mail</TableCell>
            <TableCell>Mobile</TableCell>
            <TableCell >status</TableCell>
            <TableCell >Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody sx={{}}>
          {rows.map((row) => (
            <TableRow key={row.from}>
            
              <TableCell>
              <img src={row.profileimg} alt={`Photo ${Proimg}`} style={{ width: '50px', height: '50px' }} />
            </TableCell>
              <TableCell fontWeight=
              "bolder" align="center">{row.name}</TableCell>
              <TableCell align="center">{row.Regno}</TableCell>
              <TableCell align="center">{row.Email}</TableCell>
              <TableCell align="center">{row.Mobile}</TableCell>
              <TableCell align="center">{row.Status}</TableCell>
              <TableCell align="center">{row.Action}</TableCell>
              <TableCell align="center">{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
    <div className='contactus'>
      {/* <Footer /> */}
    </div>
  </div>
)


export default Caregiverlist;

