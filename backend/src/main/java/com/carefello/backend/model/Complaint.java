package com.carefello.backend.model;

import jakarta.persistence.*;

@Entity

public class Complaint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String type;
    private String details;

    @ManyToOne
    @JoinColumn(name = "guardian_id")
    private Guardian guardian;

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

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public Guardian getGuardian() {
        return guardian;
    }

    public void setGuardian(Guardian guardian) {
        this.guardian = guardian;
    }

    public Complaint() {
    }

    public Complaint(int id, String type, String details, Guardian guardian) {
        this.id = id;
        this.type = type;
        this.details = details;
        this.guardian = guardian;
    }
}
