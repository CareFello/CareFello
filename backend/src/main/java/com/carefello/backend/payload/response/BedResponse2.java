package com.carefello.backend.payload.response;
import java.sql.Date;

import lombok.Data;

@Data
public class BedResponse2 {
 
    public String elderName;
    public Date occuStartDate;
    public int bed_id;
    public Date occuEndDate;
    public int elderid;
    
    public BedResponse2(String elderName, Date occuStartDate, int bed_id, Date occuEndDate, int elderid){
       
        this.elderName = elderName;
        this.occuStartDate = occuStartDate;
        this.bed_id = bed_id;
        this.occuEndDate = occuEndDate;
        this.elderid = elderid;
    }

    public BedResponse2(){
        
    }
}
