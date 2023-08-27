package com.carefello.backend.DTO;

public class MealDTO {

    private int id;
    private String type;
    private String itemName;
    private String nutritions;

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
}
