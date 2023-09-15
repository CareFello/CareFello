package com.carefello.backend.model;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "image")

public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
 
    @Lob
    private byte[] imag;

    public Image() {

    }

}
