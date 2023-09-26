import React, { useState } from 'react';
import img from '../assets/reg_img.jpg';
import '../index.css';
import { Button} from 'flowbite-react';

function RegistrationForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isValidNic, setIsValidNic] = useState(true);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nic, setNic] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [profession, setProfession] = useState('');
  const [officeAddress, setOfficeAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleNicValidation = (event) => {
    const inputNic = event.target.value;
    // Example NIC validation: It should be 9 characters.
    setIsValidNic(inputNic.length === 9);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className='main-content bg-#F9FFFE'>
        <div className='flex flex-col  items-center mt-10 '>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-0 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign Up
            </h1><div className='content flex flex-row'>
            {/* <img class=" mr-2 flex items-center" src={img} alt="reg"></img> */}
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            
              <div className="name mb-2">
                <div className="fname">
                  <div className="mb-1 block">
                    <label
                      htmlFor="first-name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      First Name
                    </label>
                  </div>
                  <input
                    required
                    value={firstName}
                    id="first-name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                </div>

                <div className="lname ml-4">
                  <div className="mb-1 block">
                    <label
                      htmlFor="last-name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Last Name
                    </label>
                  </div>
                  <input
                    required
                    value={lastName}
                    id="last-name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    onChange={(event) => setLastName(event.target.value)}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="lname mb-2">
                <div className="mb-1 block">
                  <label
                    htmlFor="nic"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    NIC
                  </label>
                </div>
                <input
                  required
                  value={nic}
                  id="nic"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 ${isValidNic ? 'dark:placeholder-gray-400' : 'dark:placeholder-red-400'} dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  type="text"
                  onChange={(event) => {
                    setNic(event.target.value);
                    handleNicValidation(event);
                  }}
                />
              </div>

              <div className="lname mb-2">
                <div className="mb-1 block">
                  <label
                    htmlFor="mobile-number"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Mobile Number
                  </label>
                </div>
                <input
                  required
                  value={mobileNumber}
                  id="mobile-number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  onChange={(event) => setMobileNumber(event.target.value)}
                />
              </div>

              <div className="waddress mb-2">
                <div className="mb-1 block">
                  <label
                    htmlFor="home-address"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Home Address
                  </label>
                </div>
                <input
                  required
                  value={homeAddress}
                  id="home-address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark-bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  onChange={(event) => setHomeAddress(event.target.value)}
                />
              </div>


              <div className="lname mb-2">
                <div className="mb-1 block">
                  <label
                    htmlFor="profession"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Profession
                  </label>
                </div>
                <input
                  required
                  value={profession}
                  id="profession"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark-bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  onChange={(event) => setProfession(event.target.value)}
                />
              </div>

              <div className="waddress mb-2">
                <div className="mb-1 block">
                  <label
                    htmlFor="office-address"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Office Address
                  </label>
                </div>
                <input
                  required
                  value={officeAddress}
                  id="office-address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark-bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  onChange={(event) => setOfficeAddress(event.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
              </div>

              <div className="flex items-center">
                <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 mt-4 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                />
                <label
                    htmlFor="terms"
                    className="ml-2 font-light text-sm text-gray-500 dark:text-gray-300"
                >
                    I accept the{' '}
                    <a
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    href="#"
                    >
                    Terms and Conditions
                    </a>
                </label>
                </div>


              <Button
                type="submit"
                className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
              >
                Sign Up
              </Button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{' '}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </a>
              </p>
            </form>
            </div>
            
         </div>
        </div>
       </div>
       </div>
  );
}

export default RegistrationForm;
