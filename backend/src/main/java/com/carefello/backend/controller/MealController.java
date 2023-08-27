package com.carefello.backend.controller;

import com.carefello.backend.DTO.MealDTO;
import com.carefello.backend.model.Meal;
import com.carefello.backend.service.MealService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/MealPlan/{mealPlanId}/meal")
@CrossOrigin

public class MealController {
    @Autowired
    private MealService mealService;

    @PostMapping("/addMealItem")
    public ResponseEntity<Meal> addMealItem(
            @PathVariable int mealPlanId,
            @RequestBody MealDTO mealDTO
            ){
        Meal addMealItem = mealService.addMealItem(mealPlanId, mealDTO);
        return new ResponseEntity<>(addMealItem, HttpStatus.CREATED);
    }

    @GetMapping("/viewMealItem")
    public ResponseEntity<List<MealDTO>> getAllMealItems(@PathVariable int mealPlanId){
        List<MealDTO> meals = mealService.getAllMealItemsByMealPlanId(mealPlanId);
        return ResponseEntity.ok(meals);
    }

    @DeleteMapping("/deleteMealItem/{mealItemId}")
    public ResponseEntity<String> deleteMealItem(
            @PathVariable int mealPlanId,
            @PathVariable int mealItemId
    ){
        mealService.deleteMealItem(mealPlanId ,mealItemId);
        return ResponseEntity.ok("Meal item deleted successfully");
    }
}
