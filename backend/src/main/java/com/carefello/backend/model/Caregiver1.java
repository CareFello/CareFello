package com.carefello.backend.model;

import java.sql.Date;
import lombok.Data;
import jakarta.persistence.*;

@Data
@Entity
@Table(name="caregiver1")
public class Caregiver1 {

    @Id
    @Column(name="id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(name="user_id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int user_id;
    @Column(name="gender", length = 255)
    private char gender;
    @Column(name="free", length = 45)
    private int free;
    @Column(name="age", length = 45)
    private int age;
    @Column(name="assigned", length = 45)
    private int assigned;
    @Column(name="occupied", length = 45)
    private int occupied;
    @Column(name="occuStartDate", length = 255)
    private Date occuStartDate;
    @Column(name="occuEndDate", length = 255)
    private Date occuEndDate;
    @Column(name="assStartDate", length = 255)
    private Date assStartDate;
    @Column(name="assEndDate", length = 255)
    private Date assEndDate;
    

    public Caregiver1() {

    }

    public Caregiver1(char gender, int free, int age, int assigned, int occupied,
    Date occuStarDate, Date occuEnDate, Date assStarDate, Date assEndDate, int user_id) {
        
        this.gender = gender;
        this.free = free;
        this.age = age;
        this.assigned = assigned;
        this.occupied = occupied;
        this.occuStartDate = occuStarDate;
        this.occuEndDate = occuEnDate;
        this.assStartDate = assStarDate;
        this.assEndDate = assEndDate;
        this.user_id = user_id;

       
    }

    // public char getCaregiver1Gender() {
    //     return gender;
    // }

}
