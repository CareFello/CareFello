package com.carefello.backend.service.impl;

import com.carefello.backend.DTO.MealDTO;
import com.carefello.backend.model.Meal;
import com.carefello.backend.model.MealPlan;
import com.carefello.backend.repo.MealPlanRepo;
import com.carefello.backend.repo.MealRepo;
import com.carefello.backend.service.MealService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class MealImpl implements MealService {
    @Autowired
    private MealRepo mealRepo;

    @Autowired
    private MealPlanRepo mealPlanRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public Meal addMealItem(int mealPlanId, MealDTO mealDTO){
        Meal meal = new Meal();
        meal.setId(mealDTO.getId());
        meal.setType(mealDTO.getType());
        meal.setItemName(mealDTO.getItemName());
        meal.setNutritions(mealDTO.getNutritions());

        Optional<MealPlan> mealPlanOptional = mealPlanRepo.findById(mealPlanId);
        if(mealPlanOptional.isPresent()){
            meal.setMealPlan(mealPlanOptional.get());
            return mealRepo.save(meal);
        }
        else {
            throw new RuntimeException("Meal Plan not found");
        }
    }

    @Override
    public List<MealDTO> getAllMealItemsByMealPlanId(int mealPlanId){
        Optional<MealPlan> mealPlanOptional = mealPlanRepo.findById(mealPlanId);
        if (mealPlanOptional.isPresent()){
            List<Meal> meals = mealRepo.findByMealPlanId(mealPlanId);
            return meals.stream()
                    .map(meal -> modelMapper.map(meal,MealDTO.class))
                    .collect(Collectors.toList());
        } else {
            throw new RuntimeException("Meal Plan not found");
        }
    }

    @Override
    public void deleteMealItem(int mealPlanId, int mealItemId){
        Optional<MealPlan> mealPlanOptional = mealPlanRepo.findById(mealPlanId);
        if (mealPlanOptional.isPresent()){
            Optional<Meal> mealOptional = mealRepo.findById(mealItemId);
            if (mealOptional.isPresent() && mealOptional.get().getMealPlan().getId() == mealPlanId){
                mealRepo.delete(mealOptional.get());
            } else {
                throw new RuntimeException("Meal item not found");
            }
        } else {
            throw new RuntimeException("Meal Plan not found");
        }
    }

}
