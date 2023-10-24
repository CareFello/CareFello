package com.carefello.backend.service.impl;

import com.carefello.backend.DTO.MealPlanDTO;
import com.carefello.backend.Util.ImageUtil;
import com.carefello.backend.model.MealPlan;
import com.carefello.backend.repo.MealPlanRepo;
import com.carefello.backend.service.MealPlanService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;


@Service
public class MealPlanImpl implements MealPlanService {

    @Autowired
    private MealPlanRepo mealPlanRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public void addMealPlan(MealPlanDTO mealPlanDTO, MultipartFile imageFile) {
        MealPlan mealPlan = new MealPlan();
        mealPlan.setName(mealPlanDTO.getName());
        mealPlan.setDescription(mealPlanDTO.getDescription());
        mealPlan.setPrice(mealPlanDTO.getPrice());

        try {
            if (imageFile != null && !imageFile.isEmpty()) {
                // Check if an image file is provided
                byte[] compressedImage = ImageUtil.compressImage(imageFile.getBytes());
                mealPlan.setImage(compressedImage);
            }

            mealPlanRepo.save(mealPlan);
        } catch (IOException e) {
            // Handle the IOException appropriately (e.g., log the error)
            // You can also throw an exception or return an error response.
        }
    }



    @Override
    public List<MealPlanDTO> getAllMealPlans() {
        List<MealPlan> mealPlans = mealPlanRepo.findAll();
        return mealPlans.stream()
                .map(mealPlan -> {
                    MealPlanDTO mealPlanDTO = modelMapper.map(mealPlan, MealPlanDTO.class);

                    // Check if the MealPlan entity has an image field (e.g., mealPlanImage)
                    if (mealPlan.getImage() != null) {
                        byte[] decompressedImage = ImageUtil.decompressImage(mealPlan.getImage());
                        mealPlanDTO.setImage(decompressedImage);
                    } else {
                        // Set the image data field to null in MealPlanDTO
                        mealPlanDTO.setImage(null);
                    }

                    return mealPlanDTO;
                })
                .collect(Collectors.toList());
    }

}
