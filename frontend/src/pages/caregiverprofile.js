import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Table from 'react-bootstrap/Table';
import "../styles/Caregiverlist.css"
import Person from "./../assets/person.jpeg"
import Navbar from "../components/Navbar";
import Footer from '../components/HomepageFooter';
import Sidebar from '../components/Sidebar';
import * as Icon from "react-icons/md";

const caregiverprofile = () => (
  <div>
    <Navbar />
    <div className="d-flex gap-4">
      <div className="sidbar-div">
        <Sidebar />
      </div>
      <div className="d-flex w-100 gap-3 p-2 flex-column ms-5">
        <div className="d-flex col-12 gap-3 p-2 flex-lg-row flex-md-column flex-column">
          <div
            className="box d-flex col-lg-3 col-sm-8  flex-row align-items-center gap-3 p-2 justify-content-around"
            style={{ backgroundColor: "#2EB998", borderRadius: "12px",opacity:"90%" }}
          >
            <div className="d-flex flex-column">
              <p style={{ color: "#000000", fontSize: "30px" }}>Current Working Details</p>
              <p style={{ fontSize: "15px", fontWeight: "" }}>
             <p >  
              Assigned Room    : A12
              </p>
              <div className="d-flex flex-row" >
            <p className="d-flex align-content-end">
              <div className="d-flex flex-row" style={{ fontSize: "15px", fontWeight: "bold" }}>
              Assigned Elders  : <div style={{ fontSize: "15px", fontWeight: "normal",color:"blue",  }} className="d-flex flex-column align-content-end">
                                 R.N.Perera <br/>
                                 W.T.Gunathilake<br/>
                                 J.S.Hettiarachchi
                                 </div>
             </div>                    
             </p>
             </div>
              </p>
            </div>
            <div className="d-flex">
              <Icon.MdChevronRight />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='contactus'>
      <Footer />
    </div>
  </div>
);

export default caregiverprofile;
