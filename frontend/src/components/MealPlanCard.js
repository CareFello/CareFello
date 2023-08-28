// MealPlanCard.js

import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import '../styles/MealPlanCard.css'; // Import your CSS file for styling
import { NavLink } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



const MealPlanCard = () => {
    const [mealPlans, setMealPlans] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/MealPlan/viewMealPlan') // Update the URL to match your backend endpoint
            .then(response => response.json())
            .then(data => setMealPlans(data))
            .catch(error => console.error('Error fetching meal plans:', error));
    }, []);

    return (
        <div className="meal-plan-container">
            {mealPlans.map(mealPlan => (

                <Card key={mealPlan.id} className="meal-plan-card">
                    <CardContent>
                        <Typography variant="h6">{mealPlan.name}</Typography>
                        <Typography variant="body1">LKR {mealPlan.price}</Typography>
                        <Typography variant="body2">{mealPlan.description}</Typography>
                        {/* Other details */}
                        <NavLink to={`/MealPlan/${mealPlan.id}`} key={mealPlan.id}>
                            <ArrowForwardIosIcon style={{ marginTop: "-20%", marginLeft: "95%" }} />
                        </NavLink>
                    </CardContent>

                </Card>
            ))}
        </div>
    );
};

export default MealPlanCard;

