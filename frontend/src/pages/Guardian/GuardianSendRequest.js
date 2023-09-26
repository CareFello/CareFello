import React from 'react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import { Box } from '@mui/material'
import { GuardianMenuItem } from "../../components/GuardianMenuItem"
import { useState } from "react";
import axios from "axios";
import { Button, Card, Checkbox, Label, TextInput, Select, Radio, Textarea } from 'flowbite-react';
import '../../index.css';
import InputAdornment from '@mui/material/InputAdornment';
import { IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function AddDoctor() {
  const [duration, setDuration] = useState("");




  return (
    <div className='addDoctor'>
      <Header />
      <Box height={80} />
      <Box sx={{ display: 'flex' }}>
        <Sidebar menuItems={GuardianMenuItem} />
        <div className='app'>
          <div className='main-container'>
            <div className='top-part'>
              <div className='topic_reg'>Send Accommodation Request</div>
            </div>
            <div className="bottom-part">
              <div className="vertical-part_1" style={{}}>
                <form className="flex max-w-2xl flex-col gap-4">
                  <div className='name mb-2'>
                    <div className='fname'>
                      <div className="mb-1 block text-left">
                        <Label
                          className="form-label"
                          htmlFor="base"
                          value="Elder Name"
                        />
                      </div>
                      <Select
                        id="gender"
                        required
                        defaultValue=""
                        className='mb-2 w-full'
                      // value={gender}
                      // onChange={(event) => {
                      //   setGender(event.target.value);
                      // }}
                      >
                        <option value="" disabled hidden>
                          Select a Elder registerd Under your Profile
                        </option>
                        <option value={'male'}>
                          Elder 1
                        </option>
                        <option value={'female'}>
                          Elder 2
                        </option>

                      </Select>
                    </div>
                    <div className='lname ml-4'>
                      <div className="mb-1 block text-left">
                        <Label
                          htmlFor="base"
                          value="Gender"
                          className="form-label"
                        />
                      </div>
                      <TextInput
                        required
                        disabled
                        id="base"
                        // label={isValidnic ? "NIC No" : <p style={{ color: 'red' }}>Invalid NIC No</p>}
                        // value={nic}
                        // onChange={(event) => {
                        //   setname2(event.target.value);
                        // }}
                        sizing="md"
                        type="text"
                        placeholder='will fill when you select elder'
                      />
                    </div>
                    <div className='lname ml-4'>
                      <div className="mb-1 block text-left">
                        <Label
                          htmlFor="base"
                          value="Age"
                          className="form-label"
                        />
                      </div>
                      <TextInput
                        required
                        disabled
                        id="base"
                        // label={isValidnic ? "NIC No" : <p style={{ color: 'red' }}>Invalid NIC No</p>}
                        // value={nic}
                        // onChange={(event) => {
                        //   setname2(event.target.value);
                        // }}
                        sizing="md"
                        type="number"
                        placeholder='will fill when you select elder'
                      />
                    </div>
                  </div>
                  <div className='name mb-2'>
                    <div className='fname'>
                      <div className="mb-1 block text-left">
                        <Label
                          className="form-label"
                          htmlFor="base"
                          value="Enroll Date "
                        />
                      </div>
                      <TextInput
                        id="enrollDate"
                        sizing="md"
                        type="date"
                        className="mb-2 w-full"

                      />

                    </div>
                    <div className='lname ml-4'>
                      <div className="mb-1 block text-left">
                        <Label
                          htmlFor="base"
                          value="End Date"
                          className="form-label"
                        />
                      </div>
                      <TextInput
                        id="endDate"
                        sizing="md"
                        type="date"
                        className="mb-2"

                      />

                    </div>
                    <div className='lname ml-4'>
                      <div className="mb-1 block text-left">
                        <Label
                          htmlFor="base"
                          value="Duration"
                          className="form-label"
                        />
                      </div>
                      <TextInput
                        required
                        disabled
                        id="base"
                        className='w-full'
                        // label={isValidnic ? "NIC No" : <p style={{ color: 'red' }}>Invalid NIC No</p>}
                        // value={nic}
                        // onChange={(event) => {
                        //   setname2(event.target.value);
                        // }}
                        sizing="md"
                        type="number"
                        placeholder='will fill when you enter enroll date and Finish date'
                      />
                    </div>
                  </div>

                  <div className='name mb-2'>
                    <div className='fname'>
                      <div className="mb-1 block text-left">
                        <Label
                          className="form-label"
                          htmlFor="base"
                          value="Elder Name"
                        />
                      </div>
                      <Select
                        id="gender"
                        required
                        defaultValue=""
                        className='mb-2 w-full'
                      // value={gender}
                      // onChange={(event) => {
                      //   setGender(event.target.value);
                      // }}
                      >
                        <option value="" disabled hidden>
                          Select a available Package for above Duration
                        </option>
                        <option value={'basic'}>
                          Basic
                        </option>
                        <option value={'classic'}>
                          Classic
                        </option>
                        <option value={'classic'} disabled>
                          Luxury
                        </option>

                      </Select>
                    </div>
                    <div className='lname ml-4'>
                      <div className="mb-1 block text-left">
                        <Label
                          htmlFor="base"
                          value="Caregiver Type"
                          className="form-label"
                        />
                      </div>
                      <Select
                        id="gender"
                        required
                        defaultValue=""
                        className='mb-2 w-full'
                      // value={gender}
                      // onChange={(event) => {
                      //   setGender(event.target.value);
                      // }}
                      >
                        <option value="" disabled hidden>
                          Select Caregiver Gender
                        </option>
                        <option value={'male'}>
                          Male
                        </option>
                        <option value={'female'}>
                          Female
                        </option>


                      </Select>
                    </div>

                  </div>

                  <div className='name mb-2'>
                    <div className='fname'>
                      <div className="mb-1 block text-left">
                        <Label
                          className="form-label"
                          htmlFor="base"
                          value="Meal Plan"
                        />
                      </div>
                      <Select
                        id="gender"
                        required
                        defaultValue=""
                        className='mb-2 w-full'
                      // value={gender}
                      // onChange={(event) => {
                      //   setGender(event.target.value);
                      // }}
                      >
                        <option value="" disabled hidden>
                          Select Your Preffered Meal Plan
                        </option>
                        <option value={'mealplan1'}>
                          Diabetic Free
                        </option>
                        <option value={'mealplan2'}>
                          Cholestrol Free
                        </option>
                        <option value={'mealplan3'}>
                          Fully Veg Items
                        </option>


                      </Select>
                    </div>
                    <div className='lname ml-4'>
                      <div className="mb-1 block text-left">
                        <Label
                          htmlFor="base"
                          value="Special Note about Meals"
                          className="form-label"
                        />
                      </div>
                      <Textarea

                        id="base"
                        className='w-96'
                        // label={isValidnic ? "NIC No" : <p style={{ color: 'red' }}>Invalid NIC No</p>}
                        // value={nic}
                        // onChange={(event) => {
                        //   setname2(event.target.value);
                        // }}
                        sizing="sm"
                        type="text"
                        placeholder=''
                      />
                    </div>

                  </div>
                  <Button type="submit" >
                    Register Account
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </div>
  )
}

export default AddDoctor;
