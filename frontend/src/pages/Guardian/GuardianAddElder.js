import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import '../../index.css';
import { Box } from '@mui/material'
import { Button, Card, Checkbox, Datepicker, Label, TextInput, Select, FileInput } from 'flowbite-react';
import { GuardianMenuItem } from "../../components/GuardianMenuItem";
import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';



function GuardianAddElder() {

  const { guardianId } = useParams();
  console.log("Guardian Id : " + guardianId)

  const [name, setName] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [relationship, setRelationship] = useState("");

  const [nameError, setNameError] = useState('');
  const [nicNoError, setNicNoError] = useState('');
  const [dobError, setDobError] = useState('');
  const [genderError, setGenderError] = useState('');
  const [relationshipError, setRelationshipError] = useState('');

  const handleSubmit = async (event) => {
    // Validation logic
    event.preventDefault();

    let isValid = true;

    if (!name) {
      setNameError('Elder name is required');
      isValid = false;
    } else {
      setNameError('');
    }


    if (!nic) {
      setNicNoError('NIC No is required');
      isValid = false;
    } else if (/^(19|20)\d{10}$/.test(nic) || /^9\d{8}V$/.test(nic)) {
      setNicNoError('');
    } else {
      setNicNoError('NIC No is invalid');
      isValid = false;
    }


    if (!gender) {
      setGenderError('Gender is required');
      isValid = false;
    } else {
      setGenderError('');
    }


    const dobDate = new Date(dob);
    const currentDate = new Date();
    const minBirthDate = new Date(currentDate);
    minBirthDate.setFullYear(currentDate.getFullYear() - 40);
    if (!dob) {
      setDobError("Birthday is required");
      isValid = false;
    }
    // Check if the DOB is in the future
    else if (dobDate > currentDate) {
      setDobError("Birthday cannot be future date");
      isValid = false;
    }
    // Check if the DOB is less than 40 years ago
    else if (dobDate > minBirthDate) {
      setDobError("Elder must be at least 40 years old");
      isValid = false;
    }
    else {
      setDobError("");
    }

    if (!relationship) {
      setRelationshipError('Ralationship to the elder is required');
      isValid = false;
    } else {
      setRelationshipError('');
    }
    // Add similar validation logic for other fields...

    if (isValid) {
      // Form submission logic here

      try {
        const url = "http://localhost:8080/api/v1/guardian/" + guardianId + "/elders/addElder";
        await axios.post(url, {
          name: name,
          nic: nic,
          gender: gender,
          dob: dob,
          relationship: relationship,
        });

        alert("Elder registration Successfull");
        window.location.reload();

        // if (response.status === 200) {
        //   alert("Elder added successfully");
        //   window.location.reload();
        // } else {
        //   console.error('Error:', response);
        //   alert('Error adding elder: ' + response.statusText);
        // }
      } catch (error) {
        console.error('Error:', error);
        alert("Maximum elder count reached or network error happen");
      }

    }
  }


  return (
    <div>
      <Header />
      <Box height={40} />
      <Box sx={{ display: 'flex' }}>
        <Sidebar menuItems={GuardianMenuItem} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
          <br />
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Grid item xs={9} spacing={1}>
                <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-left">
                  Thank you for thinking to connect your loved ones with our system.
                </h3>
                <p className="font-normal text-gray-700 dark:text-gray-400 text-left">
                  We will ensure that good care of them .
                </p>
              </Grid>
              <Box height={80} />
              <Grid item xs={9} spacing={1}>
                <Card className="max-w-sm">

                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    <p>
                    Welcome to CareFello. We understand the importance of your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect your data when you use our services. By using the System, you consent to the practices described in this policy.
                    </p>
                  </p>
                  <Button>
                    Read more
                  </Button>
                </Card>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <div>
                <div className="mb-1 block text-left">
                  <Label
                    htmlFor="small"
                    value="Elder Name"
                  />
                </div>
                <TextInput
                  id="name"
                  sizing="md"
                  type="text"
                  className='mb-2'
                  placeholder='Enter Full Name'
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
                <div className="error-message" style={{ color: 'red' }}>{nameError}</div>
                <div className="mb-2 block text-left">
                  <Label
                    htmlFor="small"
                    value="NIC No"
                  />
                </div>
                <TextInput
                  id="nic"
                  sizing="md"
                  type="text"
                  className='mb-2'
                  placeholder='Enter NIC No'
                  value={nic}
                  onChange={(event) => {
                    setNic(event.target.value);
                  }}
                />
                <div className="error-message" style={{ color: 'red' }}>{nicNoError}</div>
                <div className="mb-1 block text-left">
                  <Label
                    htmlFor="small"
                    value="Gender"
                  />
                  <Select
                    id="gender"
                    required
                    defaultValue=""
                    className='mb-2'
                    value={gender}
                    onChange={(event) => {
                      setGender(event.target.value);
                    }}
                  >
                    <option value="" disabled hidden>
                      Choose gender
                    </option>
                    <option value={'Male'}>
                      Male
                    </option>
                    <option value={'Female'}>
                      Female
                    </option>

                  </Select>
                </div>
                <div className="error-message" style={{ color: 'red' }}>{genderError}</div>
                <div className="mb-1 block text-left">
                  <Label
                    htmlFor="small"
                    value="Birthday"
                  />
                  <TextInput
                    id="dob"
                    sizing="md"
                    type="date"
                    className='mb-2'
                    value={dob}
                    onChange={(event) => {
                      setDob(event.target.value);
                    }} />
                  <div className="error-message" style={{ color: 'red' }}>{dobError}</div>
                </div>
                <div className="mb-1 block text-left">
                  <Label
                    htmlFor="small"
                    value="Relationship to Elder"
                  />
                  <Select
                    id="relationship"
                    required
                    className='mb-4'
                    value={relationship}
                    onChange={(event) => {
                      setRelationship(event.target.value);
                    }}
                  >
                    <option value="" disabled hidden>
                      Choose a relationship
                    </option>
                    <option value={'father'}>
                      Father
                    </option>
                    <option value={'mother'}>
                      Mother
                    </option>
                    <option value={'father-in-law'}>
                      Father-in-law
                    </option>
                    <option value={'mother-in-law'}>
                      Mother-in-law
                    </option>
                    <option value={'other'}>
                      Other
                    </option>
                  </Select>
                </div>
                <div className="error-message" style={{ color: 'red' }}>{relationshipError}</div>
                <div>
                  <Button as="span" className="cursor-pointer" onClick={handleSubmit}>Add Elder</Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default GuardianAddElder;
