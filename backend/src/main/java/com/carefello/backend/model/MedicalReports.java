package com.carefello.backend.model;


import jakarta.persistence.*;
import lombok.Builder;

import java.util.ArrayList;
import java.util.List;

@Entity
@Builder
public class MedicalReports {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String type;
    private byte[] pdfData;

    @ManyToOne
    @JoinColumn(name = "diseaseId")
    private ElderMedicalHistory elderMedicalHistory;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public byte[] getPdfData() {
        return pdfData;
    }

    public void setPdfData(byte[] pdf) {
        this.pdfData = pdf;
    }

    public ElderMedicalHistory getElderMedicalHistory() {
        return elderMedicalHistory;
    }

    public void setElderMedicalHistory(ElderMedicalHistory elderMedicalHistory) {
        this.elderMedicalHistory = elderMedicalHistory;
    }

    public MedicalReports() {
    }

    public MedicalReports(int id, String name, String type, byte[] pdfData, ElderMedicalHistory elderMedicalHistory) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.pdfData = pdfData;
        this.elderMedicalHistory = elderMedicalHistory;
    }


}
