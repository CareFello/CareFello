import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Registration.css";
import { Checkbox } from "@mui/material";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Reg from "../assets/care.png";
import axios from "axios";
import Background from "../assets/background_new.png";

function Registration() {
    
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [nic, setNic] = useState("");
    const [cont, setCont] = useState("");
    const [profession, setPro] = useState("");
    const [haddress, setHaddress] = useState("");
    const [waddress, setWaddress] = useState("");
    const [isValid, setIsValid] = useState(true);
    //conflict
    const [isValidnic, setIsValidnic] = useState(true);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidMobile, setIsValidMobile] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [confirmPassword, setConfirmPassword] = useState('');

    // Validation for Home Address
 const validateHomeAddress = () => {
    if (haddress.length === 0) {
      // If the home address is empty, display a required error message
      return "Home Address is required";
    }
    // If the home address is valid, return an empty string
    return "";
  };
  
  // Validation for Working Place Address
  const validateWorkingPlaceAddress = () => {
    if (waddress.length === 0) {
      // If the working place address is empty, display a required error message
      return "Working Place Address is required";
    }
    // If the working place address is valid, return an empty string
    return "";
  };
  

    async function save(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/v1/guardian/addGuardian", {
                email: email,
                password: password,
                nic: nic,
                fname: fname,
                lname: lname,
                cont: cont,
                profession: profession,
                haddress: haddress,
                waddress: waddress,

            });
            alert("Guardian registration Successfull");
            window.location.reload();

        } catch (err) {
            alert(err);
        }
    }


  return (
    <div
      className="registration-page"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="reg-container">
        <div className="reg-form06 bg-white bg-opacity-70 p-8 rounded-lg shadow-lg">
          <form action="#">
            <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
            <div className="mb-4 flex flex-wrap">
              <div className="w-full md:w-1/2 pr-2 mb-4 md:mb-0">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-900"
                >
                  First Name
                </label>
                <input
                  required
                  type="text"
                  name="first-name"
                  id="first-name"
                  className={`input-field ${
                    fname.length === 0 || fname.length > 20
                      ? "border-red-500"
                      : ""
                  }`}
                  value={fname}
                  onChange={(event) => {
                    setFname(event.target.value);
                  }}
                />
                {fname.length === 0 && (
                  <p className="text-red-500 text-sm">First Name is required</p>
                )}
                {fname.length > 20 && (
                  <p className="text-red-500 text-sm">
                    First Name should be less than or equal to 20 characters
                  </p>
                )}
              </div>
              <div className="w-full md:w-1/2 pl-2">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-900"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  className={`input-field ${
                    lname.length === 0 || lname.length > 20
                      ? "border-red-500"
                      : ""
                  }`}
                  value={lname}
                  onChange={(event) => {
                    setLname(event.target.value);
                  }}
                />
                {lname.length === 0 && (
                  <p className="text-red-500 text-sm">Last Name is required</p>
                )}
                {lname.length > 20 && (
                  <p className="text-red-500 text-sm">
                    Last Name should be less than or equal to 20 characters
                  </p>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className={`input-field ${
                  !isValidEmail ? "border-red-500" : ""
                }`}
                placeholder="Email (e.g., example@example.com)"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  const inputEmail = event.target.value;

                  // Regular expression for email validation
                  const emailPattern = /^[a-zA-Z][a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;


                  // Check if the email matches the pattern
                  setIsValid(emailPattern.test(inputEmail));
                }}
              />
              {!isValidEmail && (
                <p className="text-red-500 text-sm">
                  Please enter a valid email address
                </p>
              )}
            </div>

            <div className="mb-4 flex flex-wrap">
              <div className="w-full md:w-1/2 pr-2 mb-4 md:mb-0">
                <label
                  htmlFor="nic"
                  className="block text-sm font-medium text-gray-900"
                >
                  NIC Number
                </label>
                <input
                  type="text"
                  name="nic"
                  id="nic"
                  className={`input-field ${
                    !isValidnic ? "border-red-500" : ""
                  }`}
                  placeholder="NIC Number (e.g., 123456789012)"
                  value={nic}
                  onChange={(event) => {
                    setNic(event.target.value);
                    const inputNIC = event.target.value;

                    // Regular expression for NIC validation
                    const nicPattern = /^[0-9]{9}[vV]?$/;


                    // Check if the NIC matches the pattern
                    setIsValidnic(nicPattern.test(inputNIC));
                  }}
                />
                {!isValidnic && (
                  <p className="text-red-500 text-sm">
                    Please enter a valid NIC Number (9 or 12 digits with
                    optional 'V')
                  </p>
                )}
              </div>
              <div className="w-full md:w-1/2 pl-2">
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-900"
                >
                  Mobile Number
                </label>
                <input
                  type="text"
                  name="mobile"
                  id="mobile"
                  className={`input-field ${
                    !isValidMobile ? "border-red-500" : ""
                  }`}
                  placeholder="Mobile Number (e.g., 1234567890)"
                  value={cont}
                  onChange={(event) => {
                    setCont(event.target.value);
                    const inputMobile = event.target.value;

                    // Regular expression for mobile number validation (only numbers)
                    const mobilePattern = /^[0-9]*$/;

                    // Check if the mobile number matches the pattern
                    setIsValidMobile(mobilePattern.test(inputMobile));
                  }}
                />
                {!isValidMobile && (
                  <p className="text-red-500 text-sm">
                    Please enter a valid Mobile Number (only digits)
                  </p>
                )}
              </div>
            </div>

            <div className="mb-4">
            <label
                htmlFor="home-address"
                className="block text-sm font-medium text-gray-900"
            >
                Home Address
            </label>
            <input
                type="text"
                name="home-address"
                id="home-address"
                className={`input-field ${
                haddress.length === 0 ? "border-red-500" : ""
                }`}
                placeholder="Home Address"
                value={haddress}
                onChange={(event) => {
                setHaddress(event.target.value);
                }}
            />
            {haddress.length === 0 && (
                <p className="text-red-500 text-sm">Home Address is required</p>
            )}
            </div>

            <TextField
                required
                id="outlined-required"
                label="Profession"
                sx={{ m: 1, width: '52ch' }}
                value={profession}
                onChange={(event) => {
                    setPro(event.target.value);
                }}
                />


            <div className="mb-4">
            <label
                htmlFor="profession"
                className="block text-sm font-medium text-gray-900"
            >
                Profession
            </label>
            <input
                type="text"
                name="profession"
                id="profession"
                className={`input-field ${
                profession.length === 0 ? "border-red-500" : ""
                }`}
                placeholder="Profession"
                value={profession}
                onChange={(event) => {
                setPro(event.target.value);
                }}
            />
            {/* {profession.length === 0 && (
                <p className="text-red-500 text-sm">Profession is required</p>
            )} */}
            </div>

            <div className="mb-4">
            <label
                htmlFor="working-place-address"
                className="block text-sm font-medium text-gray-900"
            >
                Working Place Address
            </label>
            <input
                type="text"
                name="working-place-address"
                id="working-place-address"
                className={`input-field ${
                waddress.length === 0 ? "border-red-500" : ""
                }`}
                placeholder="Working Place Address"
                value={waddress}
                onChange={(event) => {
                setWaddress(event.target.value);
                }}
            />
            {/* {waddress.length === 0 && (
                <p className="text-red-500 text-sm">Working Place Address is required</p>
            )} */}
            </div>


            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className={`input-field ${
                  !isValidPassword ? "border-red-500" : ""
                }`}
                placeholder="Password (e.g., Abc@1234)"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  const inputPassword = event.target.value;

                  // Regular expression for password validation
                  const passwordPattern =
                    /^(?=.*\d)(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$/;

                  // Check if the password matches the pattern
                  setIsValidPassword(passwordPattern.test(inputPassword));
                }}
              />
              {!isValidPassword && (
                <p className="text-red-500 text-sm">
                  Please enter a valid password (at least 8 characters, one
                  uppercase letter, one digit, and one special character)
                </p>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-900"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                className={`input-field ${
                  password !== confirmPassword ? "border-red-500" : ""
                }`}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(event) => {
                  setConfirmPassword(event.target.value);
                }}
              />
              {password !== confirmPassword && (
                <p className="text-red-500 text-sm">Passwords do not match</p>
              )}
            </div>

            <button
              type="submit"
              onClick={save}
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
