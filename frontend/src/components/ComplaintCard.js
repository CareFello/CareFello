import React from 'react'
//import '../styles/ComplaintCard.css';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { NavLink } from "react-router-dom";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const ComplaintCard = ({ Name,Complaint,dp }, props) => {

    const { selectedOption, handleChange } = props;

    return (
        <div className='student-card'>
            <div className="basic-info">
                <Grid container alignItems="flex-start">
                <Grid item xs={2}>
                    <img src={dp} style={{ width: '0', height: '0' }} alt="DP" />
                </Grid>
                    <Grid item xs={9} className='cardCollapsed' style={{ width: "500px", height: "200px", marginTop: "17px" }}>
                        <p>{Name}</p>
                        <p>{Complaint}</p>
                    </Grid>
                    <Grid item xs={2}>
                    <FormControl fullWidth>
                        <Select
                        labelId="select-label"
                        id="select"
                        value={selectedOption}
                        onChange={handleChange}
                        >
                        <MenuItem value="opened">Opened</MenuItem>
                        <MenuItem value="closed">Closed</MenuItem>
                        <MenuItem value="in-progress">In Progress</MenuItem>
                        </Select>
                    </FormControl>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default ComplaintCard
