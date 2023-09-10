package com.carefello.backend.model;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "contactus")

public class Contactus {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String name;
    private String email;
    private String subject;
    private String message;

    public Contactus() {

    }

    public Contactus(String name, String email,String subject,
    String message) {
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.message = message;
    }
}
