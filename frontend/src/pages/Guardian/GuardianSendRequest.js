import React, { useState, useEffect } from 'react';
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
import Button from '@mui/material/Button';
import axios from "axios";
import { GuardianMenuItem } from '../../components/GuardianMenuItem';
import { useNavigate } from 'react-router-dom';

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
  const [selectedMealItems, setSelectedMealItems] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [elderGender, setElderGender] = useState('');
  const [assStartDate, setAssStartDate] = useState('');
  const [assEndDate, setAssEndDate] = useState('');
  const [type, setType] = useState('');
  const [gender, setGender] = useState('');
  const [str, setStr] = useState('bad');
  const [ids, setIds] = useState([]);
  const navigate = useNavigate();

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

  async function Send(event) {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8085/api/beds/request", {
        name: name,
        age: age,
        elderGender: elderGender,
        gender: gender,
        assStartDate: assStartDate,
        assEndDate: assEndDate,
        type: type,
      });
      console.log(response.data)
  
      if (response.data.length !== 0){
        const bedIds = response.data.map((item) => item.bed_id);
        bedIds.map((item) => {
        axios.post(`http://localhost:8085/api/beds/request5/${item}`,{
          name: name,
          age: age,
          elderGender: elderGender,
          gender: gender,
          assStartDate: assStartDate,
          assEndDate: assEndDate,
          type: type,
        }).then((res) => {
          console.log(res.data)
          if (res.data === "bad"){
            
          }else{
            // setStr("good");
            navigate('/ManagerDashboard');
          }
          
        
        }).catch((error) => {
          console.error(error); // Log the error for debugging
        });
        
      });
      if (str === 'good') {
          console.log('good');
      } else {
          alert("bad");
      }
      // window.location.reload();
      }else{
        alert("bad");
      }
      

    } catch (err) {
      alert(err);
    }

  }

  // useEffect(() => {
  //   // This code will run whenever the 'str' state variable changes
  //   if (str === 'good') {
  //     console.log('good');
  //   } else {
  //     console.log('bad');
  //   }
  // }, [str]);

  
  


  return (
    <div>
      <form>
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
                      value={name}
                      onChange={(event) => {
                      setName(event.target.value);
                      }}
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
                      value={age}
                      onChange={(event) => {
                      setAge(event.target.value);
                      }}
                    />
                  </div>
                
                <div className='subfield'>
                  <label htmlFor="elderGender">Gender</label>
                  <Select
                    id="elderGender"
                    style={smallInputStyle}
                    value={elderGender}
                      onChange={(event) => {
                      setElderGender(event.target.value);
                    }}
                  >
                    <MenuItem value="M">Male</MenuItem>
                    <MenuItem value="F">Female</MenuItem>
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
                    value={assStartDate}
                      onChange={(event) => {
                      setAssStartDate(event.target.value);
                      }}/>
                </div>
                <div className='subfield'>
                  <label htmlFor="endDate">Check-Out Date</label>
                  <input
                    type="date"
                    id="endDate"
                    placeholder="End Date"
                    style={smallInputStyle}
                    value={assEndDate}
                      onChange={(event) => {
                      setAssEndDate(event.target.value);
                      }}
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
                    value={type}
                      onChange={(event) => {
                      setType(event.target.value);
                    }}
                  >
                    <MenuItem value="basic">Basic</MenuItem>
                    <MenuItem value="classic">Classic</MenuItem>
                    <MenuItem value="luxury">Luxury</MenuItem>
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
                    value={gender}
                      onChange={(event) => {
                      setGender(event.target.value);
                    }}
                  >
                    <MenuItem value="F">Female</MenuItem>
                    <MenuItem value="M">Male</MenuItem>
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

<Button variant="contained" sx={{ m: 1, width: '30ch' }} onClick={Send}>
                                                        Send
                                                    </Button>
                </div>
                </div>
              </div>
            </CardContent>
          
        </div>
      </div>
      </form>
    </div>
  );
};

export default GuardianSendRequest;
