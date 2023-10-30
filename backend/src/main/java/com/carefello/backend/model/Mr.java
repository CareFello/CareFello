package com.carefello.backend.model;


import jakarta.persistence.*;
import lombok.Builder;

import java.util.ArrayList;
import java.util.List;
import lombok.Data;

@Data
@Entity
public class Mr {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String type;
    private byte[] pdfData;
    private int recordid;

    public Mr() {

    }

    public Mr(String name, String type, byte[] pdfData, int recordid) {
        this.name = name;
        this.type = type;
        this.pdfData = pdfData;
        this.recordid = recordid;
    }


}
