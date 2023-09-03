package com.carefello.backend.model;

import jakarta.persistence.*;

@Entity
public class Meal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String type;
    private String itemName;
    private String nutritions;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "meal_plan_id")
    private MealPlan mealPlan;

    public Meal() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getNutritions() {
        return nutritions;
    }

    public void setNutritions(String nutritions) {
        this.nutritions = nutritions;
    }

    public MealPlan getMealPlan() {
        return mealPlan;
    }

    public void setMealPlan(MealPlan mealPlan) {
        this.mealPlan = mealPlan;
    }

    public Meal(int id, String type, String itemName, String nutritions, MealPlan mealPlan) {
        this.id = id;
        this.type = type;
        this.itemName = itemName;
        this.nutritions = nutritions;
        this.mealPlan = mealPlan;
    }
}
