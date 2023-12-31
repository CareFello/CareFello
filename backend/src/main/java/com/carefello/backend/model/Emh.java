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
    private String name;
    private String type;
    private byte[] pdfData;

    public Emh() {

    }

    public Emh(String disease, String description, int elderid, String name, String type, byte[] pdfData) {
        this.disease = disease;
        this.description = description;
        this.elderid = elderid;
        this.name = name;
        this.type = type;
        this.pdfData = pdfData;
    }

}


