import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Table from 'react-bootstrap/Table';
import "../styles/Caregiverlist.css"
import Person from "./../assets/person.jpeg"
import Navbar from "../components/Navbar";
import Footer from '../components/HomepageFooter.js';


const Caregiverlist = () => {


  return (
<div>
  <Navbar />

    <Table striped bordered hover className="0">
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
          <td></td>
        </tr>
        <tr>
        <td>
        
          <img className="rounded-circle" src={Person} alt=""  style={{ width: "39px", height: "40px" }} />
        
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
        
          <img className="rounded-circle" src={Person} alt=""  style={{ width: "39px", height: "40px" }} />
        
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
          <img className="rounded-circle" src={Person} alt=""  style={{ width: "39px", height: "40px" }} />
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
     
    


 
<div className='contactus'>
<Footer />
</div>
</div>

);

}

export default Caregiverlist;
