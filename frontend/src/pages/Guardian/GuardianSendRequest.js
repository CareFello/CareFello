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

function GuardianSendRequest() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Initialize your form data here
    });

    const handleNextStep = async () => {

        try {
            await axios.post("http://localhost:8085/api/request/check", formData).then((res) =>{
                console.log(res.data);

                if (res.data.message == "true"){
                    setCurrentStep(currentStep + 1);
                }else{
                    alert("Rooms not exist");
                }
            });
            
            //console.log(formData);
        } catch (err) {
            alert(err);
            //console.log(formData);
        }
    };

    const handlePrevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleSubmit = () => {
        console.log(formData);
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return <StepOne formData={formData} setFormData={setFormData} />;
            case 2:
                return <StepTwo formData={formData} setFormData={setFormData} />;
            // Add more cases for other steps
            default:
                return null;
        }
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
                                <Typography variant="h6" gutterBottom>
                                    Step {currentStep} of 3
                                </Typography>
                                <LinearProgress variant="determinate" value={(currentStep / 3) * 100} />
                                {renderStepContent()}
                                <Stack direction="row" spacing={2}>
                                    {currentStep === 1 && (
                                        <>
                                            <Button onClick={handleNextStep}>Next</Button>
                                            {/* Additional Next button */}

                                        </>
                                    )}
                                    {currentStep === 2 && (
                                        <>
                                            <Button onClick={handlePrevStep}>Previous</Button>
                                            <Button onClick={handleNextStep}>Next</Button>
                                        </>
                                    )}
                                    {currentStep === 3 && (
                                        <>
                                            <Button onClick={handlePrevStep}>Previous</Button>
                                            <Button onClick={handleSubmit}>Submit</Button>
                                        </>
                                    )}
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                </Box>
            </Box>
        </div>
    )
}

export default GuardianSendRequest;

