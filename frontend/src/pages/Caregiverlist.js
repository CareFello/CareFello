
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Table from 'react-bootstrap/Table';
import "../styles/Caregiverlist.css"
import Person from "./../assets/person.jpeg"
import Header from "../components/Header";
import Footer from '../components/HomepageFooter';
import Sidebar from '../components/Sidebar';
import * as icon from "react-icons/md";
import { ManagerMenuItem } from '../components/ManagerMenuItem'
import Box from '@mui/material/Box'



const Caregiverlist = () => (
  <div>


<Box height={80} />
    <Header />
    <div className="d-flex gap-4">
      <div className="sidbar-div">
      <Sidebar menuItems={ManagerMenuItem} />
        {/* <Sidebar /> */}
      </div>

      <Table striped bordered hover className="table-height">
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
      </Table>
    </div>
    <div className='contactus'>
      {/* <Footer /> */}
    </div>
  </div>
)


export default Caregiverlist;

