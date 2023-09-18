package com.carefello.backend.payload.response;
import lombok.Data;

@Data
public class BedResponse {
    int id;
    String str; 
    
    public BedResponse(int id, String str){
        this.id = id;
        this.str = str;
    }
}


