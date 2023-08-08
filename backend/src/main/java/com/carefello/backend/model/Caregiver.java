package com.carefello.backend.model;

import java.sql.Date;

import jakarta.persistence.*;
@Entity
@Table(name="caregiver")
public class Caregiver {

    @Id
    @Column(name="user_id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int user_id;
    @Column(name="email", length = 255)
    private String email;
    @Column(name="password", length = 255)
    private String password;
    @Column(name="dob", length = 255)
    private Date dob;
    @Column(name="address", length = 255)
    private String address;
    @Column(name="nic", length = 255)
    private String nic;
    @Column(name="rating", length = 255)
    private double rating;
    @Column(name="gender", length = 255)
    private char gender;
    @Column(name="availability", length = 45)
    private int availability;
    @Column(name="name1", length = 255)
    private String name1;
    @Column(name="name2", length = 255)
    private String name2;
    @Column(name="cont", length = 255)
    private String cont;
    

    public Caregiver() {

    }

    public Caregiver(String email, String password, Date dob, String address, String nic,
    char gender, int availability, String name1, String name2, String cont) {
        
        this.email = email;
        this.password = password;
        this.dob = dob;
        this.address = address;
        this.nic = nic;
        this.gender = gender;
        this.availability = availability;
        this.name1 = name1;
        this.name2 = name2;
        this.cont = cont;
       
    }

    public String getCaregiverEmail() {
        return email;
    }

    public String getCaregiverPassword() {
        return password;
    }
}
