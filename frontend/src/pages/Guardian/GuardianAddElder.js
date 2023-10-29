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


  async function save(event) {
    event.preventDefault();
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
      alert("Maximum elder count reached");
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
                  Noteworthy technology acquisitions 2021
                </h3>
                <p className="font-normal text-gray-700 dark:text-gray-400 text-left">
                  Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
              </Grid>
              <Box height={80} />
              <Grid item xs={9} spacing={1}>
                <Card className="max-w-sm">

                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    <p>
                      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
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
                <div className="mb-2 block text-left">
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
                <div className="mb-2 block text-left">
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

                <div className="mb-2 block text-left">
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
                </div>
                <div className="mb-2 block text-left">
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

                <div>
                  <Button as="span" className="cursor-pointer" onClick={save}>Span Button</Button>
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
