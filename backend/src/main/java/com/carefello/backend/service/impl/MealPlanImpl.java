package com.carefello.backend.service.impl;

import com.carefello.backend.DTO.MealPlanDTO;
import com.carefello.backend.model.MealPlan;
import com.carefello.backend.repo.MealPlanRepo;
import com.carefello.backend.service.MealPlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class MealPlanImpl implements MealPlanService {

    @Autowired
    private MealPlanRepo mealPlanRepo;

    @Override
    public void addMealPlan(MealPlanDTO mealPlanDTO){
        MealPlan mealPlan = new MealPlan();
        mealPlan.setId(mealPlanDTO.getId());
        mealPlan.setName(mealPlanDTO.getName());
        mealPlan.setDescription(mealPlanDTO.getDescription());
        mealPlan.setPrice(mealPlanDTO.getPrice());

        mealPlanRepo.save(mealPlan);
    }
}
