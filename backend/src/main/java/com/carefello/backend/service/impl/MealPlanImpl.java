package com.carefello.backend.service.impl;

import com.carefello.backend.DTO.MealPlanDTO;
import com.carefello.backend.model.MealPlan;
import com.carefello.backend.repo.MealPlanRepo;
import com.carefello.backend.service.MealPlanService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class MealPlanImpl implements MealPlanService {

    @Autowired
    private MealPlanRepo mealPlanRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public void addMealPlan(MealPlanDTO mealPlanDTO){
        MealPlan mealPlan = new MealPlan();
        mealPlan.setId(mealPlanDTO.getId());
        mealPlan.setName(mealPlanDTO.getName());
        mealPlan.setDescription(mealPlanDTO.getDescription());
        mealPlan.setPrice(mealPlanDTO.getPrice());

        mealPlanRepo.save(mealPlan);
    }

    @Override
    public List<MealPlanDTO> getAllMealPlans(){
        List<MealPlan> mealPlans = mealPlanRepo.findAll();
        return mealPlans.stream()
                .map(mealPlan -> modelMapper.map(mealPlan,MealPlanDTO.class))
                .collect(Collectors.toList());
    }
}
