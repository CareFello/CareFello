import React from 'react';
import Sidebar from '../components/Sidebar'
import { ManagerMenuItem } from '../components/ManagerMenuItem'
import Header from '../components/Header'
import { Box } from '@mui/material'
import '../styles/ViewComplaints.css'
import { useState } from 'react';
import ComplaintCard from '../components/ComplaintCard';
import pp1 from '../assets/pp1.jpg';
import pp2 from '../assets/pp2.png';
import pp3 from '../assets/pp3.png';
import pp4 from '../assets/pp4.png';
import pp5 from '../assets/pp5.jpg';
import pp6 from '../assets/pp6.png';
import Elder from '../assets/Happy_Elder.jpeg';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';


const complaints = [
    {
        dp: pp2,
        Name: 'Vinuri Gamage',
        Complaint: 'Mr. A.D. Silva who is assigned to my father as a caregiver is not do the daily tasks properly.'
    },
    {
        dp: pp1,
        Name: 'Achala Punsara',
        Complaint: 'Mrs. Darsinha is not reported to the work for two days and my mother is not having any kind of help.'
    },
    {
        dp: pp5,
        Name: 'Pabasara senewirathna',
        Complaint: 'The medication facilities of the center is cannot be satisfied.'
    },
    {
        dp: pp4,
        Name: 'Praneeth Sapunthanthri',
        Complaint: 'Mr. K.V.P. Silva who is the doctor incharge for the center for past two weeks is not observed the patients medical status properly.'
    },

];

export default function ViewComplaints() {

    const [selectedOption, setSelectedOption] = useState('opened'); // You can set an initial value here

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const [activeTab, setActiveTab] = useState('All Complaints');

    // Define separate complaints for each tab
    const allComplaints = ['Complaint 01', 'Complaint 02', 'Complaint 03'];
    const caregiversComplaints = ['Caregivers Complaint 01', 'Caregivers Complaint 02'];
    const medicineComplaints = ['Medicine Complaint 01', 'Medicine Complaint 02', 'Medicine Complaint 03'];

    // Use an object to map tab names to their respective complaints
    const tabToComplaints = {
        'All Complaints': allComplaints,
        'About Caregivers': caregiversComplaints,
        'About Medicine': medicineComplaints,
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };



    return (    
        <div>
            <Header />
            <Box height={80} />
            <Box sx={{ display: 'flex' }}>
                <Sidebar menuItems={ManagerMenuItem} />
                <div className='app'>
                    <div className="top">
                        <div className="vertical-part">
                            <div className="vertical-line_1"></div>
                            <div className='box-text'>
                                Open<br></br>
                                <div className='boxname-1'><b>46</b></div>
                            </div>
                        </div>
                        <div className="vertical-part">
                            <div className="vertical-line_2"></div>
                            <div className='box-text'>
                                Closed<br></br>
                                <div className='boxname-1'><b>16</b></div>
                            </div>
                        </div>
                        <div className="vertical-part">
                            <div className="vertical-line_3"></div>
                            <div className='box-text'>
                                In-Progess<br></br>
                                <div className='boxname-1'><b>26</b></div>
                            </div>
                        </div>
                        <div className="vertical-part_total">
                            <div className="circle">
                                <div className="circle-text">
                                    Total
                                    <br></br>
                                    <div className='boxname-2'>
                                        <b>88</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="line">Guardian Complaints</div>
                    <div className="bottom-part">
                            <div
                                className={`tab ${activeTab === 'All Complaints' ? 'active' : ''}`}
                                onClick={() => handleTabClick('All Complaints')}
                            >
                                All Complaints
                            </div>
                            <div
                                className={`tab ${activeTab === 'About Caregivers' ? 'active' : ''}`}
                                onClick={() => handleTabClick('About Caregivers')}
                            >
                                About Caregivers
                            </div>
                            <div
                                className={`tab ${activeTab === 'About Medicine' ? 'active' : ''}`}
                                onClick={() => handleTabClick('About Medicine')}
                            >
                                About Medicine
                            </div>
                            <div className="vertical-part" style={{ width: '200px' }}>
                               
                            </div>
                            <div className="vertical-part" style={{ width: '200px' }}>
                                
                            </div>
                            <div className="vertical-part" style={{ width: '200px' }}>
                                
                            </div>
                    </div>
                    <div className="bottom">
                            {/* <div className="vertical-part">Complaint 01</div>
                            <div className="vertical-part">Complaint 02</div>
                            <div className="vertical-part">Complaint 03</div>
                            <div className="vertical-part">Complaint 04</div>
                            <div className="vertical-part">Complaint 05</div>
                            <div className="vertical-part">Complaint 06</div> */}

                            {complaints.map((complaint, index) => (
                            <div className="complaint-row" key={index}>
                                <img src={complaint.dp} alt={`DP for ${complaint.Name}`} className="complaint-dp" />
                                <div className="complaint-text">{complaint.Complaint}</div>
                                <div className="Rlybutton">Reply</div>
                                <div className="drop-down">
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
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Box>
        </div>
    )
}


