import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import '../styles/MealPlanCard.css'; // Import your CSS file for styling
import { NavLink } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import axios from 'axios';
import meal from "../assets/meal1.jpg";

const MealPlanCard = () => {
    const [mealPlans, setMealPlans] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/MealPlan/viewMealPlan') // Update the URL to match your backend endpoint
            .then(response => {
                setMealPlans(response.data); // Assuming your API returns an array of meal plans
            })
            .catch(error => console.error('Error fetching meal plans:', error));
    }, []);

    return (
        <div className="meal-plan-container">
            {mealPlans.map(mealPlan => (
                <Card key={mealPlan.id} className="meal-plan-card">
                    <CardMedia
                        component="img"
                        height="140"
                        image={mealPlan.image ? `data:image/jpeg;base64,${mealPlan.image}` : meal} // Use the image data from your API
                        alt="Meal Plan Image"
                    />
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
