import React, { useState } from "react";
import Navbar from "./Navbar";
import img from "../assets/signup-img.png";
import "../styles/GuardianSignup.css";

const GuardianSignup = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [nic, setNic] = useState("");
  const [email, setEmail] = useState("");
  const [num, setNum] = useState("");
  const [address, setAddress] = useState("");
  const [job, setJob] = useState("");
  const [uname, setUname] = useState("");
  const [pwd, setPwd] = useState("");
  const [cpwd, setCpwd] = useState("");

  return (
    <div className="main">
      <Navbar />

      <div className="outer-body">
        <p className="topic">Sign Up</p>

        <div className="inner-body">
          <div className="imgBox">
            <img src={img} alt="signup-img" />
          </div>

          <form action="">
            <div className="nameAlign">
              <input
                className="fname"
                type="text"
                id="fname"
                placeholder="First Name"
                value={fname}
                onChange={(event) => {
                  setFname(event.target.value);
                }}
              />

              <input
                className="lname"
                type="text"
                id="lname"
                placeholder="Last Name"
                value={lname}
                onChange={(event) => {
                  setLname(event.target.value);
                }}
              />
            </div>
            <div className="inputAlign">
              <input
                className="nic"
                type="text"
                id="nic"
                placeholder="NIC"
                value={nic}
                onChange={(event) => {
                  setNic(event.target.value);
                }}
              />

              <input
                className="email"
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />

              <input
                className="num"
                type="text"
                id="num"
                placeholder="Contact Number"
                value={num}
                onChange={(event) => {
                  setNum(event.target.value);
                }}
              />

              <input
                className="address"
                type="text"
                id="address"
                placeholder="Address"
                value={address}
                onChange={(event) => {
                  setAddress(event.target.value);
                }}
              />

              <input
                className="job"
                type="text"
                id="job"
                placeholder="Profession"
                value={job}
                onChange={(event) => {
                  setJob(event.target.value);
                }}
              />

              <input
                className="uname"
                type="text"
                id="uname"
                placeholder="User Name"
                value={uname}
                onChange={(event) => {
                  setUname(event.target.value);
                }}
              />
            </div>
            <div className="pwdAlign">
              <input
                className="pwd"
                type="password"
                id="pwd"
                placeholder="Password"
                value={pwd}
                onChange={(event) => {
                  setPwd(event.target.value);
                }}
              />
              <input
                className="cpwd"
                type="text"
                id="cpwd"
                placeholder="Confirm Password"
                value={cpwd}
                onChange={(event) => {
                  setCpwd(event.target.value);
                }}
              />
            </div>
            <div className="btnAlign">
              <button type="submit">Sign Up</button>
            </div>

            <p>
              Alreay have an account? <span>Sign In</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GuardianSignup;
