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
    @Column(name="fisrt_name", length = 255)
    private String first_name;
    @Column(name="email", length = 255)
    private String email;
    @Column(name="password", length = 255)
    private String password;
    @Column(name="last_anme", length = 255)
    private String last_name;
    @Column(name="contact_no", length = 255)
    private String contact_no;
    @Column(name="DOB", length = 255)
    private Date DOB;
    @Column(name="address", length = 255)
    private String address;
    @Column(name="nic", length = 255)
    private String nic;
    @Column(name="rating", length = 255)
    private double rating;
    @Column(name="gender", length = 255)
    private char gender;
    @Column(name="availability", length = 255)
    private int availability;

    public Caregiver() {

    }

    public Caregiver(int user_id, String first_name, String email, String password,
    String last_name, String contact_no, Date DOB, String address, String nic, double rating,
    char gender, int availability) {
        this.user_id = user_id;
        this.first_name = first_name;
        this.email = email;
        this.password = password;
        this.last_name = last_name;
        this.contact_no = contact_no;
        this.DOB = DOB;
        this.address = address;
        this.nic = nic;
        this.rating = rating;
        this.gender = gender;
        this.availability = availability;
    }

    public String getCaregiverEmail() {
        return email;
    }

    public String getCaregiverPassword() {
        return password;
    }

    public String getFirstName() {
        return first_name;
    }


}
