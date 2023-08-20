package com.carefello.backend.repo;

import com.carefello.backend.model.MealPlan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MealPlanRepo extends JpaRepository<MealPlan , Integer> {
}
