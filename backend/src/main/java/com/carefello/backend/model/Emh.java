package com.carefello.backend.model;

import jakarta.persistence.*;
import lombok.Data;


@Data
@Entity
public class Emh {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String disease;
    private String description ;
    private int elderid;

    public Emh() {

    }

    public Emh(String disease, String description, int elderid) {
        this.disease = disease;
        this.description = description;
        this.elderid = elderid;
    }

}


