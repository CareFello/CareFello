package com.carefello.backend.service;

import com.carefello.backend.DTO.MealDTO;
import com.carefello.backend.model.Meal;

import java.util.List;

public interface MealService {
    Meal addMealItem(int mealPlanId , MealDTO mealDTO);
    List<MealDTO> getAllMealItemsByMealPlanId(int mealPlanId);
    void deleteMealItem(int mealPlanId, int mealItemId);
}
