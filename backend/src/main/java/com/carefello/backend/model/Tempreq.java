package com.carefello.backend.model;
import java.sql.Date;
import java.util.List;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "tempreq")

public class Tempreq {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private int elderid;
    private int bed_id;
    private Date assStartDate;
    private Date assEndDate;
    private char gender;
    private String allergyMeal;
    private String currentMedication;
    private List<String> foodNot;
    private String type;
    private long price;
    private int pending;
    private int caregiverid;
    private int guardianid;

    public Tempreq(int elderid, int bed_id, Date assStartDate, Date assEndDate, char gender, String allergyMeal, String currentMedication, List<String> foodNot, String type, long price, int pending, int caregiverid, int guardianid){
        this.elderid = elderid;
        this.bed_id = bed_id;
        this.assStartDate = assStartDate;
        this.assEndDate = assEndDate;
        this.gender = gender;
        this.allergyMeal = allergyMeal;
        this.currentMedication = currentMedication;
        this.foodNot = foodNot;
        this.type = type;
        this.price = price;
        this.pending = pending;
        this.caregiverid = caregiverid;
        this.guardianid = guardianid;
    }

    public Tempreq(){
        
    }

}

