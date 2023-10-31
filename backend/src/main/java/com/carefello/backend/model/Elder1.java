package com.carefello.backend.model;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "elder1")

public class Elder1 {
    @Id
    private int elderid;
    private String firstname;
    private String lastname;
    private int age;
    private String gender;
    

    public Elder1(String firstname, String lastname, int age, String gender, int elderid){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.gender = gender;
        this.elderid = elderid;
    }

    public Elder1(){
        
    }

}
