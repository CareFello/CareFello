// StepTwo.js
import React from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import "../styles/Step.css"

function StepTwo({ formData, setFormData }) {
    return (
        <div>

            <div>
                <label htmlFor="mealPlan">Meal Plan:</label>
                <Select
                    id="elderGender"
                    value={formData.mealPlan || ''}
                    onChange={(e) => setFormData({ ...formData, mealPlan: e.target.value })}
                >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>

                </Select>
            </div>
            <div>
                <label htmlFor="caregiverGender">Caregiver Gender:</label>
                <Select
                    id="caregiverGender"
                    value={formData.mealPlan || ''}
                    onChange={(e) => setFormData({ ...formData, careGiverGender: e.target.value })}
                >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>

                </Select>
            </div>

            <div>
                <label htmlFor="startingDate">Starting Date:</label>
                <TextField
                    type="date"
                    id="startingDate"
                    value={formData.startingDate || ''}
                    onChange={(e) => setFormData({ ...formData, startingDate: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="duration">Duration:</label>
                <TextField
                    id="duration"
                    value={formData.duration || ''}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="roomType">Room Type:</label>
                <Select
                    id="roomType"
                    value={formData.roomType || ''}
                    onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                >
                    <MenuItem value="basic">Basic</MenuItem>
                    <MenuItem value="classic">Classic</MenuItem>
                    <MenuItem value="luxury">Luxury</MenuItem>
                </Select>
            </div>
            {/* Add more education qualification inputs */}
        </div>
    );
}

export default StepTwo;
