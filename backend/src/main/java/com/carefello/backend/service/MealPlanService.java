package com.carefello.backend.service;

import com.carefello.backend.DTO.MealPlanDTO;

import java.util.List;

public interface MealPlanService {
    void addMealPlan(MealPlanDTO mealPlanDTO);
    List<MealPlanDTO> getAllMealPlans();
}
