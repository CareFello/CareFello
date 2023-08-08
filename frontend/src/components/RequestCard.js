import React from 'react'
import '../styles/RequestCard.css';
import { Button } from '@mui/material';

const RequestCard = ({ name, indexNo, details }) => {
    return (
        <div className='student-card'>
            <div className="basic-info">
                <p>Guardian's Name: {name}</p>
                <p>Elder's Name: {indexNo}</p>
            </div>
            <div className="hover-info">
                <div className="basic-info-hover">
                    <p>Name: {name}</p>
                    <p>Index No: {indexNo}</p>
                </div>
                <div className="additional-info">
                    <p>Additional Details:</p>
                    <ul>
                        {details.map((detail, index) => (
                            <li key={index}>{detail}</li>

                        ))}
                        <Button>Reject</Button>
                    </ul>

                </div>
            </div>
        </div >
    )
}

export default RequestCard
