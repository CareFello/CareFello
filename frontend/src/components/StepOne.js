// StepOne.js
import React from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import "../styles/Step.css"

function StepOne({ formData, setFormData }) {
    return (
        <div>
            <div>
                <label htmlFor="guardianName">Guardian Name:</label>
                <TextField
                    id="guardianName"
                    value={formData.guardianName || ''}
                    onChange={(e) => setFormData({ ...formData, guardianName: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="elderName">Elder Name:</label>
                <TextField
                    id="elderName"
                    value={formData.elderName || ''}
                    onChange={(e) => setFormData({ ...formData, elderName: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="elderGender">Elder Gender:</label>
                <Select
                    id="elderGender"
                    value={formData.elderGender || ''}
                    onChange={(e) => setFormData({ ...formData, elderGender: e.target.value })}
                >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                </Select>
            </div>
            <div>
                <label htmlFor="elderAge">Elder Age:</label>
                <TextField
                    id="elderAge"
                    value={formData.elderAge || ''}
                    onChange={(e) => setFormData({ ...formData, elderAge: e.target.value })}
                />
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
        </div>
    );
}

export default StepOne;
