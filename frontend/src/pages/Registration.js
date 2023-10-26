import React, { useState } from 'react';
import img from '../assets/reg.png';
import '../index.css';
import { Button} from 'flowbite-react';
import '../styles/Registration.css';

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
    <div className='main-content' >
    <div className='flex flex-col items-center'>
      <div className="p-10 space-y-2 md:space-y-0 sm:p-8 " >
        
        <div className='content flex flex-row' sx={{boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        
          <form className="md:space-y-0 max-w-3xl w-full" onSubmit={handleSubmit}  style={{ width: '100%', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', background: 'linear-gradient(#D4F1F4, #75E6DA)' }}>
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Sign Up
        </h1>
            <div className="name flex space-x-4">
              <div className="fname">
                <label
                  htmlFor="first-name"
                  className="block mb-2 text-sm font-small text-gray-900 dark:text-white "
                >
                  First Name
                </label>
                <input
                  required
                  style={{ fontSize: '12px' }}
                  value={firstName}
                  id="first-name"
                  className="input-field"
                  type="text"
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </div>

              <div className="lname ml-4">
                <label
                  htmlFor="last-name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Name
                </label>
                <input
                  required
                  value={lastName}
                  style={{ fontSize: '12px' }}
                  id="last-name"
                  className="input-field"
                  type="text"
                  onChange={(event) => setLastName(event.target.value)}
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="text"
                  value={email}
                  name="email"
                  id="email"
                  style={{ fontSize: '12px' }}
                  className="input-field"
                  placeholder="name@company.com"
                  required=""
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="nic"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  NIC
                </label>
                <input
                  required
                  value={nic}
                  id="nic"
                  style={{ fontSize: '12px' }}
                  className={`input-field ${isValidNic ? 'dark:placeholder-gray-400' : 'dark:placeholder-red-400'}`}
                  type="text"
                  onChange={(event) => {
                    setNic(event.target.value);
                    handleNicValidation(event);
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="mobile-number"
                  className="block mb-2 text-gray-900 sm:text-sm "
                >
                  Mobile Number
                </label>
                <input
                  required
                  style={{ fontSize: '12px' }}
                  value={mobileNumber}
                  id="mobile-number"
                  className="input-field"
                  type="text"
                  onChange={(event) => setMobileNumber(event.target.value)}
                />
              </div>
            </div>

            <div className="textarea-row flex space-x-4">
              <div class="Home_ad">
                <label
                  htmlFor="home-address"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Home Address
                </label>
                <textarea
                  required
                  style={{ fontSize: '12px' }}
                  value={homeAddress}
                  id="home-address"
                  className="input-field"
                  style ={{ fontSize: '12px', width: '170px' }}
                  onChange={(event) => setHomeAddress(event.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="profession"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Profession
                </label>
                <input
                  required
                  value={profession}
                  style={{ fontSize: '12px' }}
                  id="profession"
                  className="input-field"
                  type="text"
                  onChange={(event) => setProfession(event.target.value)}
                />
              </div>

              <div className='Office_ad'>
                <label
                  htmlFor="office-address"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Work-place Address
                </label>
                <textarea
                style={{ fontSize: '12px' , width: '170px'}}
                  required
                  value={officeAddress}
                  id="office-address"
                  className="input-field"
                  onChange={(event) => setOfficeAddress(event.target.value)}
                />
              </div>
            </div>

            <div className="password-confirm-row flex space-x-4 mb-5">
              <div className='pw_2'>
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
                  style={{ fontSize: '12px' }}
                  className="input-field"
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
                  style={{ fontSize: '12px' }}
                  name="confirm-password"
                  id="confirm-password"
                  className="input-field"
                  required=""
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                     <div class="flex mt-3 items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                      <div class="ml-3 mb-2 text-sm">
                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button
              type="submit"
              className="text-xl font-bold leading-tight  tracking-tight text-gray-900 md:text-2xl dark:text-white"
              style={{ width: '150px' }}
            >
              Sign Up
            </Button>
            </div>

            <p className="text-sm font-light text-gray-500 mt-2 dark:text-gray-400">
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
  );
}

export default RegistrationForm;
