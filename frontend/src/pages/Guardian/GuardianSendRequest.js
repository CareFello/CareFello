// GuardianSendRequest.js
import React, { useState } from 'react';
import { Box } from '@mui/material';
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

function GuardianSendRequest() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Initialize your form data here
    });

    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const handlePrevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleSubmit = () => {
        // Handle form submission here
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

