import React, { useState,useEffect } from 'react';
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
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const GuardianSendRequest = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [selectedMealItems, setSelectedMealItems] = React.useState([]);

  const idd = localStorage.getItem('myData');
  console.log(idd);

  //newly added
  const [name, setName] = useState('');
  const [elderid, setElderid] = useState('');
  const [age, setAge] = useState('');
  const [elderGender, setElderGender] = useState('');
  const [assStartDate, setAssStartDate] = useState('');
  const [assEndDate, setAssEndDate] = useState('');
  const [type, setType] = useState('');
  const [gender, setGender] = useState('');
  const [str, setStr] = useState('');
  const [ids, setIds] = useState('');
  const navigate = useNavigate();
  const [uniqueArray, setUniqueArray] = useState([]);
  const [allergyMeal, setAllergyMeal] = useState('');
  const [currentMedication, setCurrentMedication] = useState('');
  const [people, setPeople] = useState([]);
  const [elder, setElder] = useState([]);

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
  function calculateDuration(assStartDate, assEndDate) {
    if (!assStartDate || !assEndDate) {
      return '';
    }

    const start = new Date(assStartDate);
    const end = new Date(assEndDate);

    // Calculate the difference in milliseconds
    const durationMs = end - start;

    // Calculate the number of days
    const days = Math.floor(durationMs / (1000 * 60 * 60 * 24));

    return `${days} days`;
  }

  async function check(event){
    event.preventDefault();
    console.log(selectedMealItems);
  }


  //newly added
  async function Send(event) {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/beds/request", {
        name: name,
        age: age,
        elderGender: elderGender,
        gender: gender,
        assStartDate: assStartDate,
        assEndDate: assEndDate,
        type: type,
        assElderId: elderid,
      });
      console.log(response.data)
  
      if (response.data.length !== 0){
        const bedIds = response.data.map((item) => item.bed_id);

        const uniqueElements = [];
    
    bedIds.forEach((element) => {
      if (!uniqueElements.includes(element)) {
        uniqueElements.push(element);
      }
    });

    setUniqueArray(uniqueElements);
        

        
        axios.post(`http://localhost:8080/api/beds/request5/${uniqueArray}`,{
          name: name,
          age: age,
          elderGender: elderGender,
          gender: gender,
          assStartDate: assStartDate,
          assEndDate: assEndDate,
          type: type,
          assElderId: elderid,
        }).then((res) => {
          
          if (res.data.str === "good"){
            
            axios.post("http://localhost:8080/api/beds/request12",{id: res.data.id, assStartDate: assStartDate, assEndDate: assEndDate})
            .then((res) => {
              if (res.data.str == "good"){
                
                axios.post("http://localhost:8080/api/beds/request8",{id: res.data.id, assElderId: elderid, assStartDate: assStartDate, assEndDate: assEndDate, gender: gender, allergyMeal: allergyMeal, currentMedication: currentMedication, foodNot: selectedMealItems, type: type});
                alert("Request successfully sent");
                window.location.reload();
              }else{
                alert("No space");
              }
            })
            
          }else{
            alert("No space");
            
          }
          
        
        }).catch((error) => {
          console.error(error); 
        });
        
     
       
      
      }else{
        alert("No space");
      }
      

    } catch (err) {
      alert(err);
    }

  }

  useEffect(() => {
    // Make the GET request using Axios to fetch data from the backend
    axios.get(`http://localhost:8080/api/v1/guardian/{guardianId}/elders/get/${idd}`)
      .then((response) => setPeople(response.data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    // Make the GET request using Axios to fetch data from the backend

    axios.get(`http://localhost:8080/api/v1/guardian/{guardianId}/elders/get1/${name}`)
      .then((response) => setElder(response.data))
      .catch((error) => console.error(error));
  }, [name]);

  useEffect(() => {
    // Make the GET request using Axios to fetch data from the backend

    axios.get(`http://localhost:8080/api/v1/guardian/{guardianId}/elders/get1/${name}`)
      .then((response) => setElderid(response.data.elderid))
      .catch((error) => console.error(error));
  }, [name]);


  return (
    <div>
      <div className='page-body'>
        <Header />
        <Box height={100} />
        <Box sx={{ display: "flex" }}>
          <Sidebar menuItems={GuardianMenuItem} />
          <main className="main-content">
            <div className='form-body'>
              <h4>Send Request for Accommodation</h4>

              <div className="form-container">
                <label htmlFor="yourElder" className="your-elder-label">
                  Your Elder's Name
                </label>
                <Select
                  id="yourElder"
                  className='yourElder'
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                >
                  {people.map((person) => (
                    <MenuItem key={person.id} value={person.firstname}>{person.firstname}</MenuItem>
                  ))}
                  
                  
                </Select>

                <div className="age-gender-container">

                  <div>
                    <label htmlFor="elderAge" className="elder-age-label">
                      Age
                    </label>
                    <input
                      type="number"
                      id="elderAge"
                      className="elderAge"
                      value={elder.age}
                      onChange={(event) => {
                        const inputAge = parseInt(event.target.value, 10);
                        if (!isNaN(inputAge) && inputAge >= 0) {
                          setAge(inputAge);
                        }
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="elderGender" className="elder-gender-label">
                      Gender
                    </label>
                    <input
                      type='text'
                      id="elderGender"
                      className="elderGender"
                      value={elder.gender}
                      onChange={(event) => setElderGender(event.target.value)}
                    
                    />
                  </div>

                </div>

                {/* Enroll Date, Check-Out Date, and Duration */}
                <div className="date-duration-container">

                  <div className="date-inputs">
                    <label htmlFor="enrollDate" className="enroll-date-label">
                      Enroll Date
                    </label> <br />
                    <input
                      type="date"
                      id="enrollDate"
                      className="enrollDate"
                      placeholder="Enroll Date"
                      value={assStartDate}
                      onChange={(event) => setAssStartDate(event.target.value)}
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
                      value={assEndDate}
                      onChange={(event) => setAssEndDate(event.target.value)}
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
                      value={calculateDuration(assStartDate, assEndDate)}
                      readOnly
                    />
                  </div>
                </div>


                <label htmlFor="roomPackage">Select a Room Package for Your Elder</label>
                <Select
                  id="roomPackage"
                  className="roomPackage"
                  value={type}
                  onChange={(event) => setType(event.target.value)}
                >
                  <MenuItem value="basic">Basic</MenuItem>
                  <MenuItem value="classic">Classic</MenuItem>
                  <MenuItem value="luxury">Luxury</MenuItem>
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
                      <MenuItem value="basic">Meal plan 01</MenuItem>
                      <MenuItem value="classic">Meal plan 02</MenuItem>
                      <MenuItem value="luxury">Meal plan 03</MenuItem>
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
                  value={allergyMeal}
                  onChange={(event) => setAllergyMeal(event.target.value)}
                />

                <label htmlFor="Caregivergender">Select Caregiver's Type</label>
                <Select
                  id="Caregivergender"
                  className="Caregivergender"
                  value={gender}
                  onChange={(event) => setGender(event.target.value)}
                >
                  <MenuItem value="F">Female</MenuItem>
                  <MenuItem value="M">Male</MenuItem>
                </Select>

                <label htmlFor="medicationDetails">Current Medication Details of your elder</label>
                <textarea
                  id="medicationDetails"
                  className="medicationDetails"
                  rows="4"

                  value={currentMedication}
                  onChange={(event) => setCurrentMedication(event.target.value)}
                />

                <Button className="send-btn" variant="contained" onClick={Send}>Send</Button>

              </div>
            </div>
          </main>

        </Box>


      </div>
    </div>
  );
};

export default GuardianSendRequest;
