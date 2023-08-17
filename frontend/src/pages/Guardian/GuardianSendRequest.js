// GuardianSendRequest.js
import React, { useState } from 'react';
import { Box, duration } from '@mui/material';
import Grid from '@mui/material/Grid';
import { LinearProgress } from '@mui/material';
import Stack from '@mui/material/Stack';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'; // Don't forget to import Button

import StepOne from '../../components/StepOne';
import StepTwo from '../../components/StepTwo';
import { GuardianMenuItem } from '../../components/GuardianMenuItem';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import axios from "axios";
import "../../styles/Guardian/GuardianSendRequest.css"

function GuardianSendRequest() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Initialize your form data here
    });

    const handleNextStep = async () => {

        try {
            await axios.post("http://localhost:8085/api/request/check", formData).then((res) => {
                console.log(res.data);

                if (res.data.message == "true") {
                    setCurrentStep(currentStep + 1);
                } else {
                    alert("Rooms not exist");
                }
            });

            //console.log(formData);
        } catch (err) {
            alert(err);
            //console.log(formData);
        }
    };



    const eldersData = {
        Elder1: { age: 70, gender: 'Male' },
        Elder2: { age: 65, gender: 'Female' },
        Elder3: { age: 80, gender: 'Male' },
        Elder4: { age: 75, gender: 'Female' },
    };

    const mealPlans = {
        plan1: ['Meal A', 'Meal B', 'Meal C', 'Meal D', 'Meal E', 'Meal F', 'Meal G', 'Meal H'],
        plan2: ['Meal X', 'Meal Y', 'Meal Z', 'Meal W', 'Meal V', 'Meal U', 'Meal T', 'Meal S'],
        plan3: ['Meal 1', 'Meal 2', 'Meal 3', 'Meal 4', 'Meal 5', 'Meal 6', 'Meal 7', 'Meal 8'],
    };

    const [selectedElder, setSelectedElder] = useState('');
    const [enrollDate, setEnrollDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [duration, setDuration] = useState('');
    const [roomType, setRoomType] = useState('');
    const [roomTypeDisabled, setRoomTypeDisabled] = useState(true);
    const [caregiverType, setCaregiverType] = useState('');
    const [mealPlan, setMealPlan] = useState('');
    const [firstChoice, setFirstChoice] = useState('');
    const [secondChoice, setSecondChoice] = useState('');

    const [firstChoiceItems, setFirstChoiceItems] = useState([]);
    const [secondChoiceItems, setSecondChoiceItems] = useState([]);

    const handleElderSelect = (event) => {
        const elderName = event.target.value;
        setSelectedElder(elderName);

        if (elderName in eldersData) {
            setAge(eldersData[elderName].age);
            setGender(eldersData[elderName].gender);
        } else {
            setAge('');
            setGender('');
        }
    };

    const handleEnrollDateChange = (event) => {
        const newEnrollDate = event.target.value;
        setEnrollDate(newEnrollDate);
        calculateDuration(newEnrollDate, endDate);
        setRoomTypeDisabled(false);
    };

    const handleEndDateChange = (event) => {
        const newEndDate = event.target.value;
        setEndDate(newEndDate);
        calculateDuration(enrollDate, newEndDate);
        setRoomTypeDisabled(false);
    };

    const handleRoomTypeChange = (event) => {
        setRoomType(event.target.value);
    };

    const handleCaregiverTypeChange = (event) => {
        setCaregiverType(event.target.value);
    };

    const handleMealPlanChange = (event) => {
        const newMealPlan = event.target.value;
        setMealPlan(newMealPlan);
        setFirstChoice('');
        setSecondChoice('');
    };

    const handleFirstChoiceItemChange = (event) => {
        const item = event.target.value;
        if (firstChoiceItems.includes(item)) {
            setFirstChoiceItems(firstChoiceItems.filter((i) => i !== item));
        } else if (firstChoiceItems.length < 3) {
            setFirstChoiceItems([...firstChoiceItems, item]);
        }
    };

    const handleSecondChoiceItemChange = (event) => {
        const item = event.target.value;
        if (secondChoiceItems.includes(item)) {
            setSecondChoiceItems(secondChoiceItems.filter((i) => i !== item));
        } else if (secondChoiceItems.length < 3) {
            setSecondChoiceItems([...secondChoiceItems, item]);
        }
    };

    const calculateDuration = (start, end) => {
        if (start && end) {
            const startDate = new Date(start);
            const endDate = new Date(end);
            const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
            const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
            setDuration(daysDiff);
        } else {
            setDuration('');
        }
    };

    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = () => {
        // Here, you can perform any necessary actions when the form is submitted,
        // such as sending the data to a server or performing other operations.
        // For this example, we'll just show the success popup.
        setShowPopup(true);
    };
    return (
        <div>
            <Header />
            <Box height={80} />
            <Box sx={{ display: 'flex' }}>
                <Sidebar menuItems={GuardianMenuItem} />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
                    <Grid container spacing={0} >
                        <Card>
                            <CardContent>
                                <div className="form-container">
                                    <h2>Elder Information</h2>
                                    <div className="row-container">
                                        <label htmlFor="elderSelect">Select Elder:</label>
                                        <select id="elderSelect" value={selectedElder} onChange={handleElderSelect}>
                                            <option value="">Select an elder</option>
                                            <option value="Elder1">Elder 1</option>
                                            <option value="Elder2">Elder 2</option>
                                            <option value="Elder3">Elder 3</option>
                                            <option value="Elder4">Elder 4</option>
                                        </select>


                                        <label htmlFor="age">Age:</label>
                                        <input type="text" id="age" name="age" value={age} readOnly />


                                        <label htmlFor="gender">Gender:</label>
                                        <input type="text" id="gender" name="gender" value={gender} readOnly />
                                        <br />

                                    </div>
                                    <div className="date-container">
                                        <label htmlFor="enrollDate">Enroll Date:</label>
                                        <input
                                            type="date"
                                            id="enrollDate"
                                            name="enrollDate"
                                            value={enrollDate}
                                            onChange={handleEnrollDateChange}
                                        />
                                        <br />


                                        <label htmlFor="endDate">End Date:</label>
                                        <input
                                            type="date"
                                            id="endDate"
                                            name="endDate"
                                            value={endDate}
                                            onChange={handleEndDateChange}
                                        />


                                        <label htmlFor="duration">Duration (days):</label>
                                        <input type="text" id="duration" name="duration" value={duration} readOnly />
                                        <br />
                                    </div>

                                    <div className="type-container">
                                        <label htmlFor="roomType">Room Type:</label>
                                        <select id="roomType" value={roomType} onChange={handleRoomTypeChange} disabled={roomTypeDisabled}>
                                            <option value="">Select room type</option>
                                            <option value="basic">Basic</option>
                                            <option value="classic">Classic</option>
                                            <option value="luxury">Luxury</option>
                                        </select>

                                        <br />
                                        <br />

                                        <label htmlFor="caregiverType">Caregiver Type:</label>
                                        <select id="caregiverType" value={caregiverType} onChange={handleCaregiverTypeChange}>
                                            <option value="">Select caregiver type</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>

                                    <label htmlFor="mealPlan">Meal Plan:</label>
                                    <select id="mealPlan" value={mealPlan} onChange={handleMealPlanChange}>
                                        <option value="">Select a meal plan</option>
                                        <option value="plan1">Meal Plan 1</option>
                                        <option value="plan2">Meal Plan 2</option>
                                        <option value="plan3">Meal Plan 3</option>
                                    </select>
                                    <div className="choice-container">
                                        <label>First Choice:</label>
                                        {mealPlan && mealPlans[mealPlan].map((item, index) => (
                                            <div key={index}>
                                                <input
                                                    type="checkbox"
                                                    name={`firstChoice_${index}`}
                                                    value={item}
                                                    checked={firstChoiceItems.includes(item)}
                                                    onChange={handleFirstChoiceItemChange}
                                                />
                                                <label htmlFor={`firstChoice_${index}`}>{item}</label>
                                            </div>
                                        ))}
                                        <br />
                                    </div>
                                    <div className="choice-container">
                                        <label>Second Choice:</label>
                                        {mealPlan && mealPlans[mealPlan].map((item, index) => (
                                            <div key={index}>
                                                <input
                                                    type="checkbox"
                                                    name={`secondChoice_${index}`}
                                                    value={item}
                                                    checked={secondChoiceItems.includes(item)}
                                                    onChange={handleSecondChoiceItemChange}
                                                />
                                                <label htmlFor={`secondChoice_${index}`}>{item}</label>
                                            </div>
                                        ))}
                                    </div>
                                    <button onClick={handleSubmit}>Submit</button>

                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Box>
            </Box>
        </div >
    )
}

export default GuardianSendRequest;

