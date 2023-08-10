import React from 'react'
import '../styles/RequestCard.css';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import person from "../assets/cornish.png"


const RequestCard = ({ Gname, Ename, age }) => {
    return (
        <div className='student-card'>
            <div className="basic-info">
            <Grid item xs = {1}>
                <img src = {person} style={{width:"100px",height : "100px"}}/>
            </Grid>
            <Grid item xs = {11} className='cardCollapsed' style={{width:"500px",height : "200px"}}>
                <p>Guardian : {Gname}</p>
                <p>Elderly : {Ename}</p>
            </Grid>
            </div>
            <div className="hover-info">
            <Grid item xs = {1}>
                <img src = {person} style={{width:"100px",height : "100px"}}/>
            </Grid>
            <Grid item xs = {11} className='cardExpand'>
                <div className="basic-info-hover">
                    <h6>Guardian : {Gname}</h6>
                    <p>Elderly : {Ename}</p>
                </div>
                <div className="additional-info">
                    <p>Age of the Elderly:{age}</p>
                    <ul>
                        {/* {details.map((detail, index) => (
                            <li key={index}>{detail}</li>

                        ))} */}
                        <Button>Accept</Button>
                        <Button>Reject</Button>
                    </ul>

                </div>
            </Grid>
            </div>
            
        </div >
    )
}

export default RequestCard
