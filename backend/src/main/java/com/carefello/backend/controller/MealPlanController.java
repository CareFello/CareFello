package com.carefello.backend.controller;

import com.carefello.backend.DTO.MealPlanDTO;
import com.carefello.backend.model.MealPlan;
import com.carefello.backend.service.MealPlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/MealPlan")
@CrossOrigin

public class MealPlanController {

    @Autowired
    private MealPlanService mealPlanService;

    @PostMapping("/addMealPlan")
    public ResponseEntity<String> addMealPlan(@RequestBody MealPlanDTO mealPlanDTO){
        MealPlan mealPlan = new MealPlan();
        mealPlan.setId(mealPlanDTO.getId());
        mealPlan.setName(mealPlanDTO.getName());
        mealPlan.setName(mealPlanDTO.getDescription());
        mealPlan.setPrice(mealPlanDTO.getPrice());

        mealPlanService.addMealPlan(mealPlanDTO);
        return ResponseEntity.ok("Meal Plan added succesfully");
    }

    @GetMapping("viewMealPlan")
    public ResponseEntity<List<MealPlanDTO>> getAllMealPlans(){
        List<MealPlanDTO> mealPlans = mealPlanService.getAllMealPlans();
        return  ResponseEntity.ok(mealPlans);
    }
}
