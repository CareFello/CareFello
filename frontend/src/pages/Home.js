import React, { useState } from "react";
import Background from "../assets/background.png";
import healthcare from "../assets/healthcare.png";
import accomadation from "../assets/accomadation.png";
import Relax from "../assets/relax.png";
import Food from "../assets/food.png";
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
// import ContactUs from "../components/ContactUs";
import Location from "../assets/location_logo.png";
import Phone from "../assets/phone_logo.png";
import Mail from "../assets/mail_logo.png";
import '../index.css';
import { Button } from 'flowbite-react';

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
              <div className="main-topic">CareFello</div>
              <div className="sub-topic">Live Life Beyond the Age</div>
            </div>
          </div>
        </div>

        <div className="grid-box">
          <div className="s_box">
            <img src={healthcare} alt="healthcare" />
            <div className="topic">
              <b>Health Care</b>
            </div>
            <p>
              Caregiver Protection <br></br>
              Individual Attention<br></br>
              Doctors’ Visit<br></br>
              On Call Doctor<br></br>
              create checklists<br></br>
              connect with caregivers<br></br>
              shedule tracker
            </p>
          </div>
          <div className="s_box">
            <img src={Food} alt="food" />
            <div className="topic">
              <b>Food</b>
            </div>
            <p>
              Preferd meal Plans<br></br>
              Preferd meal items<br></br>
              concerned with alergies
            </p>
          </div>
          <div className="s_box">
            <img src={accomadation} alt="accomadation" />
            <div className="topic">
              <b>Accomodation</b>
            </div>
            <p>
              Both Single & Shared<br></br>
              Rooms<br></br>
              Attached Bathrooms<br></br>
              Room TVs<br></br>
              Room Services
            </p>
          </div>
          <div className="s_box">
            <img src={Relax} alt="relax" />
            <div className="topic">
              <b>Relax Environment</b>
            </div>
            <p>
              Large Garden Area &<br></br>
              Sitting Room<br></br>
              Separate Balcony<br></br>
              Friendly Staff
            </p>
          </div>
        </div>
        <div className="About">
          <h2>About Us</h2>
          <div className="Aboutus_txt" id="about">
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
            <div className="image_about">
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
          <section class=" dark:bg-#05445E-900">
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-#05445E dark:text-#05445E">Contact Us</h2>
              <p class="mb-8 ml-6 mr-6 lg:mb-16 font-light text-justify text-#05445E-500 sm:text-sm">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
              <form action="#" class="space-y-3">
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-#05445E-900 dark:text-#05445E-300">Your email</label>
                  <input type="email" id="email" class="shadow-sm bg-#05445E-50 border border-#05445E-300 text-#05445E-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-#05445E-700 dark:border-#05445E-600 dark:placeholder-#05445E-400 dark:text-#05445E dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required></input>
                </div>
                <div>
                  <label for="subject" class="block mb-2 text-sm font-medium text-#05445E-900 dark:text-#05445E-300">Subject</label>
                  <input type="text" id="subject" class="block p-3 w-full text-sm text-#05445E-900 bg-#05445E-50 rounded-lg border border-#05445E-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-#05445E-700 dark:border-#05445E-600 dark:placeholder-#05445E-400 dark:text-#05445E dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required></input>
                </div>
                <div class="sm:col-span-2">
                  <label for="message" class="block mb-2 text-sm font-medium text-#05445E-900 dark:text-#05445E-400">Your message</label>
                  <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-#05445E-900 bg-#05445E-50 rounded-lg shadow-sm border border-#05445E-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-#05445E-700 dark:border-#05445E-600 dark:placeholder-#05445E-400 dark:text-#05445E dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Leave a comment..."></textarea>
                </div>
                <button className="msg-btn" type="submit" class="py-3 px-3 ml- text-sm font-medium text-center text-white rounded-lg bg-#05445E sm:w-fit hover:bg-#05445E-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-#05445E-600 dark:hover:bg-#05445E-700 dark:focus:ring-primary-800">Send message</button>
                <Button type="submit">Send message</Button>
              </form>

            </div>
          </section>
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
