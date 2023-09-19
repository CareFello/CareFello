import React, { useState, useEffect } from 'react';
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
import Button from '@mui/material/Button';
import axios from "axios";
import { GuardianMenuItem } from '../../components/GuardianMenuItem';
import { useNavigate } from 'react-router-dom';


const GuardianSendRequest = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [selectedMealItems, setSelectedMealItems] = useState([]);
  const [name, setName] = useState('');
  const [elderid, setElderid] = useState(33);
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
              <h4>Send Request for Accommodation</h4>

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


  // async function Send(event){
  //   event.preventDefault();
  //   try {
  //     const response = await axios.post("http://localhost:8080/api/beds/request", {
  //       name: name,
  //       age: age,
  //       elderGender: elderGender,
  //       gender: gender,
  //       assStartDate: assStartDate,
  //       assEndDate: assEndDate,
  //       type: type,
  //       assElderId: elderid,
  //     });
  //     func1(response.data);

  //   } catch (err) {
  //     alert(err);
  //   }
  // }

  // async function func1(myArray){
  //   if (myArray.length !== 0){
  //     const bedIds = myArray.map((item) => item.bed_id);
  //     const uniqueElements = [];
    
  //     bedIds.forEach((element) => {
  //     if (!uniqueElements.includes(element)) {
  //       uniqueElements.push(element);
  //     }
  //     });

  //     setUniqueArray(uniqueElements);
  //     func2(uniqueArray);
  //   }else{
  //     alert("bad");
  //   }
  // }

  // async function func2(myArray1){
  //       myArray1.map(async (item) => {
  //       try{
  //         const response1 = await axios.post(`http://localhost:8080/api/beds/request5/${item}`,{
  //           name: name,
  //           age: age,
  //           elderGender: elderGender,
  //           gender: gender,
  //           assStartDate: assStartDate,
  //           assEndDate: assEndDate,
  //           type: type,
  //           assElderId: elderid,
  //         });

  //         if (response1.data.str === "bad"){
            
  //         }else{
  //           setIds(response1.data.id)
  //           setStr("good");
  //         }

  //       } catch(err){
  //         alert(err);
  //       }
        
  //     });
      
  // }

  //   useEffect(() => {
  //     // This code will run whenever the 'str' state variable changes
      
  //     if (str === 'good') {
  //       console.log('good');
  //       axios.post("http://localhost:8080/api/beds/request8",{id: ids, assElderId: elderid});
  //       // setStr("bad");
  //       alert("hello");
  //     } 
  //   }, [str]);
 

  

// 19.09.2023

//   async function Send(event) {
//     event.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:8080/api/beds/request", {
//         name: name,
//         age: age,
//         elderGender: elderGender,
//         gender: gender,
//         assStartDate: assStartDate,
//         assEndDate: assEndDate,
//         type: type,
//         assElderId: elderid,
//       });
//       console.log(response.data)
  
//       if (response.data.length !== 0){
//         const bedIds = response.data.map((item) => item.bed_id);

//         const uniqueElements = [];
    
//     bedIds.forEach((element) => {
//       if (!uniqueElements.includes(element)) {
//         uniqueElements.push(element);
//       }
//     });

//     setUniqueArray(uniqueElements);
        

        
//         axios.post(`http://localhost:8080/api/beds/request5/${uniqueArray}`,{
//           name: name,
//           age: age,
//           elderGender: elderGender,
//           gender: gender,
//           assStartDate: assStartDate,
//           assEndDate: assEndDate,
//           type: type,
//           assElderId: elderid,
//         }).then((res) => {
          
//           if (res.data.str === "good"){
//             console.log(res.data.id);

//             axios.post("http://localhost:8080/api/beds/request8",{id: res.data.id, assElderId: elderid});

//             alert("good");
      
//           }else{
//             alert("bad");
            
//           }
          
        
//         }).catch((error) => {
//           console.error(error); 
//         });
        
     
       
      
//       }else{
//         alert("bad");
//       }
      

//     } catch (err) {
//       alert(err);
//     }

//   }

  

  
  


//   return (
//     <div>
//       <form>
//       <div style={{ display: 'flex' }}>
//         <Header />
//         <Sidebar menuItems={GuardianMenuItem} />
//         <div style={{marginTop: '100px'}}>
//         <h5>Send Request for Accommodation</h5>
//             <CardContent style={{ width: '100%', margin: '0 auto', marginTop: '100px', marginBottom: '20px' }}>
//               <div className='cardContent'>
//                 <div className='field' style={{gap: '20px'}}>
//                   <div className='subfield'>
//                     <label htmlFor="yourElder">Your Elder's Name</label>
//                     <Select
//                       id="yourElder"
//                       style={inputStyle}
//                       value={name}
//                       onChange={(event) => {
//                       setName(event.target.value);
//                       }}
//                     >
//                       <MenuItem value="Somasiri">Somasiri</MenuItem>
//                       <MenuItem value="Keerthi">Keerthi</MenuItem>
//                       <MenuItem value="Senarath">Senarath</MenuItem>
//                     </Select>
//                   </div>
// >>>>>>> main

                  <div>
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
                  </div>

                  <div>
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
      </form>
    </div>
  );
};

export default GuardianSendRequest;
