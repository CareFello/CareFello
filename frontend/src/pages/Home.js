import React, { useState } from "react";
import Background from "../assets/background.png";
import healthcare from "../assets/healthcare.png";
import accomadation from "../assets/accomadation.png";
import Relax from "../assets/relax.png";
import Elders from "../assets/elders.png";
import About from "../assets/about.png";
import "../styles/Home.css";
import Navbar from "../components/Navbar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CountUp, { useCountUp } from "react-countup";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Footer from "../components/HomepageFooter";
import ContactUs from "../components/ContactUs";
import Location from "../assets/location_logo.png";
import Phone from "../assets/phone_logo.png";
import Mail from "../assets/mail_logo.png";

import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const images = [
  Background,
  Background,
  Background,
  Background,
  Background,
  Background,
  Background,
  Background,
  Background,
];

function Home() {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  const [data, setData] = useState({ img: "", i: 0 });
  const viewImage = (img, i) => {
    setData({ img, i });
  };
  return (
    <div className="home">
      <div
        style={{
          backgroundImage: `url(${Background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: 700,
          borderBottomLeftRadius: "100px",
          borderBottomRightRadius: "100px",
        }}
      >
        <div className="links">
          <div className="left">
            <img src={Logo} alt="logo" className="logo" />
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/about" activeClassName="inactive">
             About Us
            </NavLink>
            <NavLink to="/2" activeClassName="inactive">
              Our Services
            </NavLink>
            <NavLink to="/contact" activeClassName="inactive">
             Contact Us
            </NavLink>
          </div>
        </div>

        <div className="fixed-link">
          <NavLink to="/Login" className="login-btn" activeClassName="inactive">
            Login/Signup
          </NavLink>
        </div>

        <div className="container">
          <div className="quote-box">
            <div className="quote">
              <h1>CareFello</h1>
              <h3>Live Life Beyond the Age</h3>
            </div>
          </div>
        </div>

        <div className="grid">
          <div className="box">
            <img src={healthcare} alt="healthcare" />
            <div className="topic">
              <b>Health Care</b>
            </div>
            <p>
              Caregiver Protection <br></br>
              Individual Attention<br></br>
              Doctors’ Visit<br></br>
              On Call Doctor<br></br>
              Healthy Foods<br></br>
              create checklists<br></br>
              connect with caregivers<br></br>
              shedule tracker
            </p>
          </div>
          <div className="box">
            <img src={healthcare} alt="healthcare" />
            <div className="topic">
              <b>Food</b>
            </div>
            <p>
              Preferd meal Plans<br></br>
              Preferd meal items<br></br>
              concerned with alergies
            </p>
          </div>
          <div className="box">
            <img src={accomadation} alt="accomadation" />
            <div className="topic">
              <b>Accomodation</b>
            </div>
            <p>
              Both Single & Shared<br></br>
              Rooms<br></br>
              Attached Bathroom<br></br>
              Room TV<br></br>
              Room Services
            </p>
          </div>
          <div className="box">
            <img src={Relax} alt="relax" />
            <div className="topic">
              <b>Relax Environment</b>
            </div>
            <p>
              Large Garden Area &<br></br>
              Sitting Rooms<br></br>
              Separate Balcony<br></br>
              Friendly Staff
            </p>
          </div>
        </div>
        <div className="About">
          <h2>About Us</h2>
          <div className="Aboutus" id="about">
            <div className="text">
              <p>
                CareFello, Elder Care System is determined to create a nurturing
                environment that enhances the quality of life for elderly
                individuals with intellectual and developmental disabilities by
                providing community-based personalized residential support
                services. We are committed in making a difference in the lives
                of individuals we serve through our trained and dedicated staff.
                We strongly believe everyone have a God given potential and can
                do better with the right structure, right personnel, and the
                right resources to thrive. Our Mission is guided by our Core
                Values: Opportunity, independence, Caring, Respect, Faith,
                Quality and Trust.
              </p>
            </div>
            <div className="image">
              <img src={About} alt="about" />
            </div>
          </div>
        </div>
        <br></br>
        <div className="countup">
          <div className="card01">
            <Card sx={{ maxWidth: 500 }}>
              <CardContent>
                <h4>
                  <CountUp end={1000} enableScrollSpy /> + <br></br>Satisfied
                  Users
                </h4>
              </CardContent>
            </Card>
          </div>
          <div className="card02">
            <Card>
              <CardContent>
                <h4>
                  <CountUp end={50} enableScrollSpy /> + <br></br>working Staff
                </h4>
              </CardContent>
            </Card>
          </div>
          <div className="card03">
            <Card>
              <CardContent>
                <h4>
                  <CountUp end={15} enableScrollSpy /> + <br></br>Years of
                  Experience
                </h4>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="contactus" id="contact">
          <h2>Contact Us Directly</h2>
          <ContactUs />
        </div>
        <div className="contact">
          {/* <div className="linklocation">
            <img src={Location} alt="location" />
            <h6>No.23 , Garden Rd, Dehiwala</h6>
          </div>
          <div className="linkphone">
            <img src={Phone} alt="phone" />
            <div className="phone_no">
              <h6>+ 94 117901360</h6>
              <h6>+ 94 117901360</h6>
            </div>
          </div>
          <div className="linkmail">
            <img src={Mail} alt="mail" />
            <h6>info@Carefello.com</h6>
          </div> */}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
