package com.carefello.backend.model;

import jakarta.persistence.*;

import java.sql.Time;
import java.time.LocalDateTime;

@Entity

public class TimeSlot {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private LocalDateTime startTime;
    private LocalDateTime finishTime;
    private int maxElders;

    @ManyToOne
    @JoinColumn(name = "doctor_id")
    private Doctor doctor;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public LocalDateTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalDateTime startTime) {
        this.startTime = startTime;
    }

    public LocalDateTime getFinishTime() {
        return finishTime;
    }

    public void setFinishTime(LocalDateTime finishTime) {
        this.finishTime = finishTime;
    }

    public int getMaxElders() {
        return maxElders;
    }

    public void setMaxElders(int maxElders) {
        this.maxElders = maxElders;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    public TimeSlot() {
    }

    public TimeSlot(int id, LocalDateTime startTime, LocalDateTime finishTime, int maxElders, Doctor doctor) {
        this.id = id;
        this.startTime = startTime;
        this.finishTime = finishTime;
        this.maxElders = maxElders;
        this.doctor = doctor;
    }
}
