package com.carefello.backend.model;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class ElderMedicalHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String disease;
    private String description ;

    @ManyToOne
    @JoinColumn(name = "elderId")
    private Elder elder;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDisease() {
        return disease;
    }

    public void setDisease(String disease) {
        this.disease = disease;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Elder getElder() {
        return elder;
    }

    public void setElder(Elder elder) {
        this.elder = elder;
    }

    public ElderMedicalHistory() {
    }

    public ElderMedicalHistory(int id, String disease, String description, Elder elder) {
        this.id = id;
        this.disease = disease;
        this.description = description;
        this.elder = elder;
    }

    @OneToMany(mappedBy = "elderMedicalHistory",cascade = CascadeType.ALL, orphanRemoval = true)
    private List<MedicalReports> medicalReports = new ArrayList<>();

    public List<MedicalReports> getMedicalReports() {
        return medicalReports;
    }

    public void setMedicalReports(List<MedicalReports> medicalReports) {
        this.medicalReports = medicalReports;
    }

}
