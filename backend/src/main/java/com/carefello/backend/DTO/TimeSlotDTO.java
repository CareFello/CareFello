package com.carefello.backend.DTO;

import java.sql.Date;
import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import lombok.Data;


@Data
public class TimeSlotDTO {
    private int id;
    private LocalTime startTime;
    private LocalTime finishTime;
    private int maxElders;
    private Date date;

    // public int getId() {
    //     return id;
    // }

    // public void setId(int id) {
    //     this.id = id;
    // }

    // public LocalDateTime getStartTime() {
    //     return startTime;
    // }

    // public void setStartTime(LocalDateTime startTime) {
    //     this.startTime = startTime;
    // }

    // public LocalDateTime getFinishTime() {
    //     return finishTime;
    // }

    // public void setFinishTime(LocalDateTime finishTime) {
    //     this.finishTime = finishTime;
    // }

    // public int getMaxElders() {
    //     return maxElders;
    // }

    // public void setMaxElders(int maxElders) {
    //     this.maxElders = maxElders;
    // }
}
