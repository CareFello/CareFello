package com.carefello.backend.DTO;

import java.sql.Date;

public class RequestDTO {
    
    private String duration;
    private String elderAge;
    private String elderGender;
    private String elderName;
    private String guardianName;
    private String roomType;
    private Date startingDate;

    public RequestDTO() {

    }
    public RequestDTO(String duration, String elderAge, String elderGender,
    String elderName, String guardianName, String roomType, Date startingDate) {
        this.duration = duration;
        this.elderAge = elderAge;
        this.elderGender = elderGender;
        this.elderName = elderName;
        this.guardianName = guardianName;
        this.roomType = roomType;
        this.startingDate = startingDate;
    }
    public String getDuration() {
        return duration;
    }
    public String getElderAge() {
        return elderAge;
    }
    public String getElderGender() {
        return elderGender;
    }
    public String getElderName() {
        return elderName;
    }
    public String getGuardianName() {
        return guardianName;
    }
    public String getRoomType() {
        return roomType;
    }
    public Date getStartingDate() {
        return startingDate;
    }
}
