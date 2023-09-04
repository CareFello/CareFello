import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import '../../styles/Guardian/GuardianSendRequest.css';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import { GuardianMenuItem } from '../../components/GuardianMenuItem';

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '8px',
  border: '1px solid #ccc',

};

const smallInputStyle = {
  ...inputStyle,
  height: '38px',
};

const selectBoxStyle = {
    ...smallInputStyle,
    height: '30px', // Adjust the height as needed
  };

const cardStyle = {
  padding: '0 400px',
};

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

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Header />
        <Sidebar menuItems={GuardianMenuItem} />
        <div style={{marginTop: '100px'}}>
        <h5>Send Request for Accommodation</h5>
            <CardContent style={{ width: '100%', margin: '0 auto', marginTop: '100px', marginBottom: '20px' }}>
              <div className='cardContent'>
                <div className='field' style={{gap: '20px'}}>
                  <div className='subfield'>
                    <label htmlFor="yourElder">Your Elder's Name</label>
                    <Select
                      id="yourElder"
                      style={inputStyle}
                      value={formData.yourElder || ''}
                      onChange={(e) => setFormData({ ...formData, yourElder: e.target.value })}
                    >
                      <MenuItem value="Somasiri">Somasiri</MenuItem>
                      <MenuItem value="Keerthi">Keerthi</MenuItem>
                      <MenuItem value="Senarath">Senarath</MenuItem>
                    </Select>
                  </div>

                  <div className='subfield'>
                    <label htmlFor="elderAge">Age</label>
                    <input
                      type="number"
                      id="elderAge"
                      style={smallInputStyle}
                      value={formData.elderAge || ''}
                      onChange={(e) => {
                        const inputAge = parseInt(e.target.value, 10);
                        if (!isNaN(inputAge) && inputAge >= 0) {
                          setFormData({ ...formData, elderAge: inputAge });
                        }
                      }}
                    />
                  </div>
                
                <div className='subfield'>
                  <label htmlFor="elderGender">Gender</label>
                  <Select
                    id="elderGender"
                    style={smallInputStyle}
                    value={formData.elderGender || ''}
                    onChange={(e) => setFormData({ ...formData, elderGender: e.target.value })}
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                  </Select>
                </div>
                </div>

                <div className='field'>
                <div className='subfield'>
                  <label htmlFor="enrollDate">Enroll Date</label>
                  <input
                    type="date"
                    id="enrollDate"
                    placeholder="Enroll Date"
                    style={smallInputStyle}
                    value={formData.enrollDate || ''}
                    onChange={(e) => setFormData({ ...formData, enrollDate: e.target.value })}/>
                </div>
                <div className='subfield'>
                  <label htmlFor="endDate">Check-Out Date</label>
                  <input
                    type="date"
                    id="endDate"
                    placeholder="End Date"
                    style={smallInputStyle}
                    value={formData.endDate || ''}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                  />
                </div>

                <div className='subfield'>
                  <label htmlFor="duration">Duration</label>
                  <input
                    type="text"
                    id="duration"
                    style={inputStyle}
                    value={formData.duration || ''}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  />
                </div>
                </div>
                <div className='field'>
                <div className='subfield'>
                  <label htmlFor="roomPackage">Select a Room Package for Your Elder</label>
                  <Select
                    id="roomPackage"
                    style={inputStyle}
                    value={formData.roomPackage || ''}
                    onChange={(e) => setFormData({ ...formData, roomPackage: e.target.value })}
                  >
                    <MenuItem value="Basic">Basic</MenuItem>
                    <MenuItem value="Classic">Classic</MenuItem>
                    <MenuItem value="Luxery">Luxery</MenuItem>
                  </Select>
                </div>

                <div className='subfield'>
                  <label htmlFor="mealPlan">Meal Plan</label>
                  <Select
                    id="mealPlan"
                    style={inputStyle}
                    value={formData.mealPlan || ''}
                    onChange={(e) => setFormData({ ...formData, mealPlan: e.target.value })}
                  >
                    <MenuItem value="Basic">Meal plan 01</MenuItem>
                    <MenuItem value="Classic">Meal plan 02</MenuItem>
                    <MenuItem value="Luxery">Meal plan 03</MenuItem>
                  </Select>
                </div>
                </div>
                <div className='field'>
                <div className='subfield'>
                  <FormControl>
                    <label>Remove meal items with allergies on your elder</label>
                    <Select
                      id="mealItemsDropdown"
                      multiple
                      style={inputStyle}
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
                  </FormControl>
                </div>

                <div className='subfield'>
                  <label htmlFor="otherMealItems">Mention if have any other meal items with allergies</label>
                  <input
                    type="text"
                    id="otherMealItems"
                    style={inputStyle}
                    value={formData.otherMealItems || ''}
                    onChange={(e) => setFormData({ ...formData, otherMealItems: e.target.value })}
                  />
                </div>
                </div>
                <div className='field'>
                <div className='subfield'>
                  <label htmlFor="gender">Select Caregiver's Type</label>
                  <Select
                    id="gender"
                    style={inputStyle}
                    value={formData.gender || ''}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  >
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="male">Male</MenuItem>
                  </Select>
                </div>
                <div className='subfield'>
                  <label htmlFor="medicationDetails">Current Medication Details of your elder</label>
                  <textarea
                    id="medicationDetails"
                    rows="4"
                    style={inputStyle}
                    value={formData.medicationDetails || ''}
                    onChange={(e) => setFormData({ ...formData, medicationDetails: e.target.value })}
                  />
                </div>
                </div>
              </div>
            </CardContent>
          
        </div>
      </div>
    </div>
  );
};

export default GuardianSendRequest;
