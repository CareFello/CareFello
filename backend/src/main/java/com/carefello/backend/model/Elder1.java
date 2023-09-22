package com.carefello.backend.model;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "elder1")

public class Elder1 {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int elderid;
    private String firstname;
    private String lastname;
    private int age;
    private char gender;


    public Elder1(String firstname, String lastname, int age, char gender){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.gender = gender;
    }

    public Elder1(){
        
    }

}
