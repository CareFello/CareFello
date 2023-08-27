import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import '../styles/MealItemCard.css'; // Import your CSS file for styling
import { NavLink, useParams } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import axios from 'axios'
import DeleteIcon from '@mui/icons-material/Delete';



const MealItemCard = () => {
    const [mealItems, setMealItems] = useState([]);
    const params = useParams();

    const url = "http://localhost:8080/api/v1/MealPlan/" + params.id + "/meal/viewMealItem";

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setMealItems(response.data);
            })
            .catch(error => {
                console.error('Error fetching meal items:', error);
            });
    }, [params.id]);

    const handleDelete = (mealItemId) => {
        axios.delete(`http://localhost:8080/api/v1/MealPlan/${params.id}/meal/${mealItemId}`)
            .then(response => {
                // Remove the deleted meal item from the state
                setMealItems(prevItems => prevItems.filter(item => item.id !== mealItemId));
                // Show a success message to the user
                alert('Meal item deleted successfully');
            })
            .catch(error => {
                console.error('Error deleting meal item:', error);
            });
    };



    return (
        <div className="meal-item-container">
            <h2>Meal Plan Details</h2>

            <div className="meal-cards">
                {mealItems.map(mealItem => (
                    <Card key={mealItem.id} className="meal-card">
                        <CardContent>
                            <Typography variant="h6">{mealItem.itemName}</Typography>
                            <Typography variant="body1">Type: {mealItem.type}</Typography>
                            <Typography variant="body2">Nutritions: {mealItem.nutritions}</Typography>
                            {/* Other details */}
                            <DeleteIcon onClick={() => handleDelete(mealItem.id)} // Call a delete function on click
                                style={{ cursor: 'pointer' }} />
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default MealItemCard;