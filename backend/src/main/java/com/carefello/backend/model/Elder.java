package com.carefello.backend.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity

public class Elder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String nic;
    private LocalDate dob;
    private String relationship;
    private String gender;


    @ManyToOne
    @JoinColumn(name = "guardian_id")
    private Guardian guardian;

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

    public String getNic() {
        return nic;
    }

    public void setNic(String nic) {
        this.nic = nic;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public Guardian getGuardian() {
        return guardian;
    }

    public void setGuardian(Guardian guardian) {
        this.guardian = guardian;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getRelationship() {
        return relationship;
    }

    public void setRelationship(String relationship) {
        this.relationship = relationship;
    }

    public Elder() {
    }

    public Elder(int id, String name, String nic, LocalDate dob, String relationship, String gender, Guardian guardian) {
        this.id = id;
        this.name = name;
        this.nic = nic;
        this.dob = dob;
        this.relationship = relationship;
        this.gender = gender;
        this.guardian = guardian;
    }
}
