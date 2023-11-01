package com.carefello.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name="doctor")
public class Doctor {

    @Id
    @Column(name="user_id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int user_id;
    @Column(name="email", length = 255)
    private String email;
    @Column(name="password", length = 255)
    private String password;
    @Column(name="nic", length = 255)
    private String nic;
    @Column(name="first_name", length = 255)
    private String name1;
    @Column(name="last_name", length = 255)
    private String name2;
    @Column(name="contact_no", length = 255)
    private String cont;
    @Column(name="reg", length = 255)
    private String reg;

    public Doctor() {

    }

    public Doctor(String email, String password, String nic,
    String name1, String name2, String cont, String reg) {
        
        this.email = email;
        this.password = password;
        this.nic = nic;
        this.name1 = name1;
        this.name2 = name2;
        this.cont = cont;
        this.reg = reg;
       
    }

    public String getDoctorEmail() {
        return email;
    }

    public String getDoctorPassword() {
        return password;
    }

    // @OneToMany(mappedBy = "doctor",cascade = CascadeType.ALL, orphanRemoval = true)
    // private List<TimeSlot> timeSlots = new ArrayList<>();

    // public List<TimeSlot> getTimeSlots() {
    //     return timeSlots;
    // }

    // public void setTimeSlots(List<TimeSlot> timeSlots) {
    //     this.timeSlots = timeSlots;
    // }
}
