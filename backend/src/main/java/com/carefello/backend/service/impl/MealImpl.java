package com.carefello.backend.service.impl;

import com.carefello.backend.DTO.MealDTO;
import com.carefello.backend.Util.ImageUtil;
import com.carefello.backend.model.Meal;
import com.carefello.backend.model.MealPlan;
import com.carefello.backend.repo.MealPlanRepo;
import com.carefello.backend.repo.MealRepo;
import com.carefello.backend.service.MealService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
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
    public Meal addMealItem(int mealPlanId, MealDTO mealDTO, MultipartFile imageFile) {
        Meal meal = new Meal();
        meal.setId(mealDTO.getId());
        meal.setType(mealDTO.getType());
        meal.setItemName(mealDTO.getItemName());
        meal.setNutritions(mealDTO.getNutritions());

        Optional<MealPlan> mealPlanOptional = mealPlanRepo.findById(mealPlanId);
        if (mealPlanOptional.isPresent()) {
            meal.setMealPlan(mealPlanOptional.get());

            try {
                if (imageFile != null && !imageFile.isEmpty()) {
                    // Check if an image file is provided
                    byte[] compressedImage = ImageUtil.compressImage(imageFile.getBytes());
                    meal.setImage(compressedImage);
                }

                return mealRepo.save(meal);
            } catch (IOException e) {
                // Handle the IOException appropriately (e.g., log the error)
                // You can also throw an exception or return an error response.
                return null; // Add this line to return null in case of an exception
            }
        } else {
            throw new RuntimeException("Meal Plan not found");
        }
    }



    @Override
    public List<MealDTO> getAllMealItemsByMealPlanId(int mealPlanId) {
        Optional<MealPlan> mealPlanOptional = mealPlanRepo.findById(mealPlanId);
        if (mealPlanOptional.isPresent()) {
            List<Meal> meals = mealRepo.findByMealPlanId(mealPlanId);
            return meals.stream()
                    .map(meal -> {
                        MealDTO mealDTO = modelMapper.map(meal, MealDTO.class);

                        // Check if the Meal entity has an image field (e.g., mealImage)
                        if (meal.getImage() != null) {
                            byte[] decompressedImage = ImageUtil.decompressImage(meal.getImage());
                            mealDTO.setImage(decompressedImage);
                        } else {
                            // Set the image data field to null in MealDTO
                            mealDTO.setImage(null);
                        }

                        return mealDTO;
                    })
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
