package com.carefello.backend.DTO;

import java.sql.Time;
import java.time.LocalDateTime;

public class TimeSlotDTO {
    private int id;
    private LocalDateTime startTime;
    private LocalDateTime finishTime;
    private int maxElders;

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
}
