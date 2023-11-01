import React, { useState } from "react";
import "../styles/Home.css";

import Footer from "../components/HomepageFooter";
import donate from "../assets/donate1.png";
import "../index.css";
import { Button } from "flowbite-react";

import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export default function DonationRequest() {
  const [donationType, setDonationType] = useState("Monetary"); // State to manage the selected donation type

  const handleDonationTypeChange = (e) => {
    setDonationType(e.target.value); // Update the donation type state
  };
  return (
    <div className="home">
      <div
        style={{
            backgroundImage: `url(${donate})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: 200,
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

        <div className="contactus" id="contact">
          <section class=" dark:bg-#05445E-900">
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-#05445E dark:text-#05445E">
                Donatation Request
              </h2>
              <p class="mb-8 ml-6 mr-6 lg:mb-16 font-light text-justify text-#05445E-500 sm:text-sm">
                At CareFello, we are dedicated to providing exceptional care and
                support for our beloved seniors. Your generous donations allow
                us to continue our mission and enhance the quality of life for
                the elderly in our community.
              </p>
              <h8 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-#05445E dark:text-#05445E">
                How Your Donations Make a Difference
              </h8>
              <p class="mb-8 ml-6 mr-6 lg:mb-16 font-light text-justify text-#05445E-500 sm:text-sm">
                1. Enriching Lives: Your contributions directly impact the lives
                of our elderly residents, providing essential care,
                companionship, and various enriching activities.
              </p>
              <p class="mb-8 ml-6 mr-6 lg:mb-16 font-light text-justify text-#05445E-500 sm:text-sm">
                2. Facility Upgrades: Donations go towards maintaining and
                improving our facilities to create a comfortable and safe
                environment for our seniors.
              </p>
              <p class="mb-8 ml-6 mr-6 lg:mb-16 font-light text-justify text-#05445E-500 sm:text-sm">
                3. Health and Wellness: Supporting our health and wellness
                programs ensures our seniors receive top-notch medical care and
                emotional support.
              </p>
              <form action="#" class="space-y-3">
                <label className="text-center"> Request to donate </label>
                <div>
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-#05445E-900 dark:text-#05445E-300"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    class="shadow-sm bg-#05445E-50 border border-#05445E-300 text-#05445E-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-#05445E-700 dark:border-#05445E-600 dark:placeholder-#05445E-400 dark:text-#05445E dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name"
                    required
                  ></input>
                </div>
                <div>
                  <label
                    for="phone"
                    class="block mb-2 text-sm font-medium text-#05445E-900 dark:text-#05445E-300"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    class="block p-3 w-full text-sm text-#05445E-900 bg-#05445E-50 rounded-lg border border-#05445E-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-#05445E-700 dark:border-#05445E-600 dark:placeholder-#05445E-400 dark:text-#05445E dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="077-1234 000"
                    required
                  ></input>
                </div>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-#05445E-900 dark:text-#05445E-300"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="shadow-sm bg-#05445E-50 border border-#05445E-300 text-#05445E-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-#05445E-700 dark:border-#05445E-600 dark:placeholder-#05445E-400 dark:text-#05445E dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@flowbite.com"
                    required
                  ></input>
                </div>
                <div>
                  <label
                    htmlFor="donationType"
                    className="block mb-2 text-sm font-medium text-#05445E-900 dark:text-#05445E-300"
                  >
                    Select Donation Type
                  </label>
                  <select
                    id="donationType"
                    value={donationType}
                    onChange={handleDonationTypeChange}
                    className="shadow-sm bg-#05445E-50 border border-#05445E-300 text-#05445E-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-#05445E-700 dark:border-#05445E-600 dark:placeholder-#05445E-400 dark:text-#05445E dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    required
                  >
                    <option value="Monetary">Monetary</option>
                    <option value="In-kind">In-kind</option>
                  </select>
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="message"
                    class="block mb-2 text-sm font-medium text-#05445E-900 dark:text-#05445E-400"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    class="block p-2.5 w-full text-sm text-#05445E-900 bg-#05445E-50 rounded-lg shadow-sm border border-#05445E-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-#05445E-700 dark:border-#05445E-600 dark:placeholder-#05445E-400 dark:text-#05445E dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <button
                  className="msg-btn"
                  type="submit"
                  class="py-3 px-3 ml- text-sm font-medium text-center text-white rounded-lg bg-#05445E sm:w-fit hover:bg-#05445E-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-#05445E-600 dark:hover:bg-#05445E-700 dark:focus:ring-primary-800"
                >
                  Send message
                </button>
                <Button type="submit">Request Donation</Button>
              </form>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </div>
  );
}
