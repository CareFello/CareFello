// StepTwo.js
import React from 'react';
import TextField from '@mui/material/TextField';

function StepTwo({ formData, setFormData }) {
    return (
        <div>
            <TextField
                label="School"
                value={formData.school || ''}
                onChange={(e) => setFormData({ ...formData, school: e.target.value })}
            />
            <TextField
                label="University"
                value={formData.university || ''}
                onChange={(e) => setFormData({ ...formData, university: e.target.value })}
            />
            <TextField
                label="Degree"
                value={formData.degree || ''}
                onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
            />
            {/* Add more education qualification inputs */}
        </div>
    );
}

export default StepTwo;
