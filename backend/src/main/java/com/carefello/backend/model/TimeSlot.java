package com.carefello.backend.model;

import jakarta.persistence.*;

import java.sql.Date;
import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import lombok.Data;

@Data
@Entity

public class TimeSlot {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private Date date;
    private LocalTime startTime;
    private LocalTime finishTime;
    private int maxElders;
    private int docid;
    

    // public int getId() {
    //     return id;
    // }

    // public void setId(int id) {
    //     this.id = id;
    // }

    // public LocalTime getStartTime() {
    //     return startTime;
    // }

    // public void setStartTime {
    //     this.startTime = startTime;
    // }

    // public LocalTime getFinishTime() {
    //     return finishTime;
    // }

    // public void setFinishTime(LocalTime finishTime) {
    //     this.finishTime = finishTime;
    // }

    // public int getMaxElders() {
    //     return maxElders;
    // }

    // public void setMaxElders(int maxElders) {
    //     this.maxElders = maxElders;
    // }

    // public Doctor getDoctor() {
    //     return doctor;
    // }

    // public void setDoctor(Doctor doctor) {
    //     this.doctor = doctor;
    // }

    public TimeSlot() {
    }

    public TimeSlot(LocalTime startTime, LocalTime finishTime, int maxElders, Date date, int docid) {
        
        this.startTime = startTime;
        this.finishTime = finishTime;
        this.maxElders = maxElders;
        this.date = date;
        this.docid = docid;
    }
}
