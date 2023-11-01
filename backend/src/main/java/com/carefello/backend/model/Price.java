package com.carefello.backend.model;
import java.sql.Date;
import java.util.List;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "price")

public class Price {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private int elderid;
    private int guardianid;
    private long price;
    private String name;

    public Price(int elderid, long price, int guardianid, String name){
        this.elderid = elderid;
        this.price = price;
        this.guardianid = guardianid;
        this.name = name;
    }

    public Price(){
        
    }

}
