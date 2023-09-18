package com.carefello.backend.model;


import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class DailyTask {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String taskName;
    private String description;
    private LocalDateTime time;
    private boolean status;

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

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public Elder getElder() {
        return elder;
    }

    public void setElder(Elder elder) {
        this.elder = elder;
    }

    public LocalDateTime getTime() {
        return time;
    }

    public void setTime(LocalDateTime time) {
        this.time = time;
    }

    public DailyTask() {
    }

    public DailyTask(int id, String taskName, String description, LocalDateTime time, boolean status, Elder elder) {
        this.id = id;
        this.taskName = taskName;
        this.description = description;
        this.time = time;
        this.status = status;
        this.elder = elder;
    }
}
