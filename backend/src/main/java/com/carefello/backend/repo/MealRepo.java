package com.carefello.backend.repo;

import com.carefello.backend.model.Meal;
import com.carefello.backend.model.MealPlan;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MealRepo extends JpaRepository<Meal , Integer> {
    List<Meal> findByMealPlanId(int mealPlanId);
}
