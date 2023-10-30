package com.carefello.backend.payload.response;
import lombok.Data;

@Data
public class ElderInfo {
    public int age;
    public String firstname; 
    public String gender;
    public String lastname;
    public int id;
    
    public ElderInfo(int age, String firstname, String gender, String lastname, int id){
        this.age = age;
        this.firstname = firstname;
        this.gender = gender;
        this.lastname = lastname;
        this.id = id;
    }

    public ElderInfo(){
        
    }
}
