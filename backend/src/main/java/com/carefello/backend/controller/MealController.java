package com.carefello.backend.controller;

import com.carefello.backend.DTO.MealDTO;
import com.carefello.backend.model.Meal;
import com.carefello.backend.service.MealService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("api/v1/MealPlan/{mealPlanId}/meal")
@CrossOrigin

public class MealController {
    @Autowired
    private MealService mealService;
    @PostMapping("/addMealItem")
    public ResponseEntity<String> addMealItem(
            @PathVariable("mealPlanId") int mealPlanId,
            @ModelAttribute MealDTO mealDTO,
            @RequestParam("imageFile") MultipartFile imageFile) {
        mealService.addMealItem(mealPlanId, mealDTO, imageFile);
        return ResponseEntity.ok("Meal Item added successfully");
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
