package com.carefello.backend.payload.response;
import lombok.Data;

@Data
public class ElderInfo {
    public int age;
    public String firstname; 
    public char gender;
    public String lastname;
    public int id;
    
    public ElderInfo(int age, String firstname, char gender, String lastname, int id){
        this.age = age;
        this.firstname = firstname;
        this.gender = gender;
        this.lastname = lastname;
        this.id = id;
    }

    public ElderInfo(){
        
    }
}
