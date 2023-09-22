package com.carefello.backend.service;

import com.carefello.backend.DTO.MealPlanDTO;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface MealPlanService {
    void addMealPlan(MealPlanDTO mealPlanDTO, MultipartFile imageFile);
    List<MealPlanDTO> getAllMealPlans();
}
