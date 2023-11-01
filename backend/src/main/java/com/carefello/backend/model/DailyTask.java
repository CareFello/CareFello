package com.carefello.backend.model;


import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
public class DailyTask {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String taskName;
    private String description;
    private String date;
    private LocalTime time;
    private String status;

    @ManyToOne
    @JoinColumn(name = "elder_id")
    private Elder elder;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Elder getElder() {
        return elder;
    }

    public void setElder(Elder elder) {
        this.elder = elder;
    }

    public LocalTime getTime() {
        return time;
    }

    public void setTime(LocalTime time) {
        this.time = time;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public DailyTask() {
    }

    public DailyTask(int id, String taskName, String description, LocalTime time, String date, String status, Elder elder) {
        this.id = id;
        this.taskName = taskName;
        this.description = description;
        this.time = time;
        this.date = date;
        this.status = status;
        this.elder = elder;
    }
}
