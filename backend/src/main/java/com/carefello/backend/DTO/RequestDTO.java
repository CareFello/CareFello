package com.carefello.backend.DTO;

import lombok.Data;


import java.sql.Date;


@Data
public class RequestDTO {

    private int bed_id;
    private Date assStartDate;
    private Date assEndDate;
    private int assElderId;
    private char gender;
    private int lowerage;
    private int upperage;
    private String type;
    private Date occuStartDate;
    private Date occuEndDate;
    private int occuElderId;
    private int free;
    private int occupied;
    private int assigned;
    private int caregiverId;
}
