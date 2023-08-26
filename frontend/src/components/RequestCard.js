import React from 'react'
import '../styles/RequestCard.css';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { NavLink } from "react-router-dom";



const RequestCard = ({ Gname, Egender, Eage, dp }) => {



    return (
        <div className='student-card'>
            <div className="basic-info">
                <Grid container alignItems="flex-start">
                    <Grid item xs={1}>
                        <img src={dp} style={{ width: "100px", height: "100px" }} />
                    </Grid>
                    <Grid item xs={11} className='cardCollapsed' style={{ width: "500px", height: "200px", marginTop: "17px" }}>
                        <p>Guardian : {Gname}</p>
                        <p>Elderly : {Egender}, {Eage}</p>
                        {/* <p>Age of the Elderly : {Eage}</p> */}
                    </Grid>
                </Grid>
            </div>

            <div className="hover-info">
                <Grid container alignItems="flex-start">
                    <Grid item xs={1}>
                        <img src={dp} style={{ width: "100px", height: "100px", color: "white" }} />
                    </Grid>
                    <Grid item xs={11} className='cardExpand'>
                        <div className="basic-info-hover" style={{ marginTop: "17px", color: "white" }} >
                            <h6>Guardian : {Gname}</h6>
                            <p>Elderly : {Egender}, {Eage}</p>
                            {/* <p>Gender of the Elderly : {Egender}</p> */}
                        </div>
                        <div className="additional-info">
                            {/* <p>Age of the Elderly: {Eage}</p> */}
                            <ul>
                                {/* {details.map((detail, index) => (
                                    <li key={index}>{detail}</li>
                                ))} */}
                                <Button className='btn' style={{
                                    textTransform: "lowercase", backgroundColor: "#E48586", fontWeight: "bold", marginRight: "8px", marginLeft: "30px", marginTop: "20px", color: "white", borderRadius: "20px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
                                }}>Reject</Button>
                                <Button className='btn' style={{ textTransform: "lowercase", backgroundColor: "#05445E", fontWeight: "bold", marginRight: "8px", marginTop: "20px", color: "#D4F1F4", borderRadius: "20px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>
                                    <NavLink
                                        to="/RequestContinue"
                                    >
                                        Continue
                                    </NavLink>
                                </Button>
                            </ul>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default RequestCard
