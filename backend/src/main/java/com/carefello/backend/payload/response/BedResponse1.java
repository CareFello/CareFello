package com.carefello.backend.payload.response;
import java.sql.Date;

import lombok.Data;

@Data
public class BedResponse1 {

    public String guradianName; 
    public String elderName;
    public long duration;
    public String type;
    public char caregiverGender;
    public Date assStartDate;
    public String specRe;
    public int bed_id;
    public Date assEndDate;
    public int id;
    public long price;
    
    public BedResponse1(String guradianName, String elderName, long duration, String type, char caregiverGender, Date assStartDate, String specRe, int bed_id, Date assEnDate, int id, long price){
        this.guradianName = guradianName;
        this.elderName = elderName;
        this.duration = duration;
        this.type = type;
        this.caregiverGender = caregiverGender;
        this.assStartDate = assStartDate;
        this.specRe = specRe;
        this.bed_id = bed_id;
        this.assEndDate = assEnDate;
        this.id = id;
        this.price = price;
    }

    public BedResponse1(){
        
    }
}
