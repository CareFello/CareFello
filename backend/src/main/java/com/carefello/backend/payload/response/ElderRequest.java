package com.carefello.backend.payload.response;
import lombok.Data;

@Data
public class ElderRequest {
    public int age;
    public String guardianName; 
    public String gender;
    public int elderid;
    public int id;
    
    public ElderRequest(int age, String guardianName, String gender, int elderid, int id){
        this.age = age;
        this.guardianName = guardianName;
        this.gender = gender;
        this.elderid = elderid;
        this.id = id;
    }

    public ElderRequest(){
        
    }
}
