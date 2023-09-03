package com.carefello.backend.DTO;

import lombok.Data;
import java.sql.Date;


@Data
public class RequestDTO {

    private Date assStartDate;
    private Date assEndDate;
    private int assElderId;
    private char gender;
    private int lowerage;
    private int upperage;

}
