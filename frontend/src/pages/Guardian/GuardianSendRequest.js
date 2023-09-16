import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Box, Checkbox, Container, Button } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import '../../styles/Guardian/GuardianSendRequest.css';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import { GuardianMenuItem } from '../../components/GuardianMenuItem';


const GuardianSendRequest = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [selectedMealItems, setSelectedMealItems] = React.useState([]);

  const handleMealItemToggle = (mealItem) => () => {
    const currentIndex = selectedMealItems.indexOf(mealItem);
    const newSelected = [...selectedMealItems];

    if (currentIndex === -1) {
      newSelected.push(mealItem);
    } else {
      newSelected.splice(currentIndex, 1);
    }

    setSelectedMealItems(newSelected);
  };

  const isMealItemSelected = (mealItem) => selectedMealItems.indexOf(mealItem) !== -1;

  // Calculate the duration between two dates
  function calculateDuration(enrollDate, endDate) {
    if (!enrollDate || !endDate) {
      return '';
    }

    const start = new Date(enrollDate);
    const end = new Date(endDate);

    // Calculate the difference in milliseconds
    const durationMs = end - start;

    // Calculate the number of days
    const days = Math.floor(durationMs / (1000 * 60 * 60 * 24));

    return `${days} days`;
  }


  return (
    <div>
      <div className='page-body'>
        <Header />
        <Box height={100} />
        <Box sx={{ display: "flex" }}>
          <Sidebar menuItems={GuardianMenuItem} />
          <main className="main-content">
            <div className='form-body'>
              <h5>Send Request for Accommodation</h5>

              <div className="form-container">
                <label htmlFor="yourElder" className="your-elder-label">
                  Your Elder's Name
                </label>
                <Select
                  id="yourElder"
                  className='yourElder'
                  value={formData.yourElder || ''}
                  onChange={(e) => setFormData({ ...formData, yourElder: e.target.value })}
                >
                  <MenuItem value="Somasiri">Somasiri</MenuItem>
                  <MenuItem value="Keerthi">Keerthi</MenuItem>
                  <MenuItem value="Senarath">Senarath</MenuItem>
                </Select>

                <div className="age-gender-container">
                  <label htmlFor="elderAge" className="elder-age-label">
                    Age
                  </label>
                  <input
                    type="number"
                    id="elderAge"
                    className="elderAge"
                    value={formData.elderAge || ''}
                    onChange={(e) => {
                      const inputAge = parseInt(e.target.value, 10);
                      if (!isNaN(inputAge) && inputAge >= 0) {
                        setFormData({ ...formData, elderAge: inputAge });
                      }
                    }}
                  />

                  <label htmlFor="elderGender" className="elder-gender-label">
                    Gender
                  </label>
                  <Select
                    id="elderGender"
                    className="elderGender"
                    value={formData.elderGender || ''}
                    onChange={(e) => setFormData({ ...formData, elderGender: e.target.value })}
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                  </Select>

                </div>

                {/* Enroll Date, Check-Out Date, and Duration */}
                <div className="date-duration-container">
                  <div className="date-inputs">
                    <label htmlFor="enrollDate" className="enroll-date-label">
                      Enroll Date
                    </label>
                    <input
                      type="date"
                      id="enrollDate"
                      className="enrollDate"
                      placeholder="Enroll Date"
                      value={formData.enrollDate || ''}
                      onChange={(e) => setFormData({ ...formData, enrollDate: e.target.value })}
                    />
                  </div>
                  <div className="date-inputs">
                    <label htmlFor="endDate" className="end-date-label">
                      Check-Out Date
                    </label>
                    <input
                      type="date"
                      id="endDate"
                      className="endDate"
                      placeholder="End Date"
                      value={formData.endDate || ''}
                      onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    />
                  </div>
                  <div className="duration-input">
                    <label htmlFor="duration" className="duration-label">
                      Duration
                    </label>
                    <input
                      type="text"
                      id="duration"
                      className="duration"
                      value={calculateDuration(formData.enrollDate, formData.endDate)}
                      readOnly
                    />
                  </div>
                </div>


                <label htmlFor="roomPackage">Select a Room Package for Your Elder</label>
                <Select
                  id="roomPackage"
                  className="roomPackage"
                  value={formData.roomPackage || ''}
                  onChange={(e) => setFormData({ ...formData, roomPackage: e.target.value })}
                >
                  <MenuItem value="Basic">Basic</MenuItem>
                  <MenuItem value="Classic">Classic</MenuItem>
                  <MenuItem value="Luxery">Luxery</MenuItem>
                </Select>

                {/* Meal Plan and Allergy Items */}
                <div className="meal-plan-allergy-container">
                  <div className="meal-plan-input">
                    <label htmlFor="mealPlan" className="meal-plan-label">
                      Meal Plan
                    </label>
                    <Select
                      id="mealPlan"
                      className="mealPlan"
                      value={formData.mealPlan || ''}
                      onChange={(e) => setFormData({ ...formData, mealPlan: e.target.value })}
                    >
                      <MenuItem value="Basic">Meal plan 01</MenuItem>
                      <MenuItem value="Classic">Meal plan 02</MenuItem>
                      <MenuItem value="Luxery">Meal plan 03</MenuItem>
                    </Select>
                  </div>

                  <div className="allergy-items-input">
                    <label htmlFor="mealItemsDropdown" className="allergy-items-label">
                      Remove meal items with allergies on your elder
                    </label>
                    <Select
                      id="mealItemsDropdown"
                      className="mealItemsDropdown"
                      multiple
                      value={selectedMealItems}
                      onChange={(e) => setSelectedMealItems(e.target.value)}
                    >
                      <MenuItem disabled value="">
                        <em>Select meal items</em>
                      </MenuItem>
                      <MenuItem value="Dhal Curry">
                        <Checkbox checked={isMealItemSelected("Dhal Curry")} />
                        Dhal Curry
                      </MenuItem>
                      <MenuItem value="Chicken Curry">
                        <Checkbox checked={isMealItemSelected("Chicken Curry")} />
                        Chicken Curry
                      </MenuItem>
                      <MenuItem value="Polsambol">
                        <Checkbox checked={isMealItemSelected("Polsambol")} />
                        Polsambol
                      </MenuItem>
                      <MenuItem value="Boiled Egg">
                        <Checkbox checked={isMealItemSelected("Boiled Egg")} />
                        Boiled Egg
                      </MenuItem>
                      <MenuItem value="Bread">
                        <Checkbox checked={isMealItemSelected("Bread")} />
                        Bread
                      </MenuItem>
                      <MenuItem value="String Hoppers">
                        <Checkbox checked={isMealItemSelected("String Hoppers")} />
                        String Hoppers
                      </MenuItem>
                    </Select>
                  </div>
                </div>

                <label htmlFor="otherMealItems">Mention if have any other meal items with allergies</label>
                <input
                  type="text"
                  id="otherMealItems"
                  className="otherMealItems"
                  value={formData.otherMealItems || ''}
                  onChange={(e) => setFormData({ ...formData, otherMealItems: e.target.value })}
                />

                <label htmlFor="Caregivergender">Select Caregiver's Type</label>
                <Select
                  id="Caregivergender"
                  className="Caregivergender"
                  value={formData.gender || ''}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                >
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="male">Male</MenuItem>
                </Select>

                <label htmlFor="medicationDetails">Current Medication Details of your elder</label>
                <textarea
                  id="medicationDetails"
                  className="medicationDetails"
                  rows="4"

                  value={formData.medicationDetails || ''}
                  onChange={(e) => setFormData({ ...formData, medicationDetails: e.target.value })}
                />

                <Button className="send-btn" variant="contained">Send</Button>

              </div>
            </div>
          </main>

        </Box>


      </div>
    </div>
  );
};

export default GuardianSendRequest;
