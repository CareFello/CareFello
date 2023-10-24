package com.carefello.backend.service;

import com.carefello.backend.DTO.MealDTO;
import com.carefello.backend.model.Meal;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface MealService {
    Meal addMealItem(int mealPlanId , MealDTO mealDTO, MultipartFile imageFile);
    List<MealDTO> getAllMealItemsByMealPlanId(int mealPlanId);
    void deleteMealItem(int mealPlanId, int mealItemId);
}
