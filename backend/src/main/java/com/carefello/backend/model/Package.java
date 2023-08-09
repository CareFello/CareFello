package com.carefello.backend.model;
import lombok.Data;


import jakarta.persistence.*;

@Data
@Entity
@Table(name="package")
public class Package {

    @Id
    @Column(name="id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(name="name", length = 255)
    private String name;
    @Column(name="price", length = 255)
    private String price;
    @Column(name="conten", length = 255)
    private String conten;

    
    

    public Package() {

    }

    public Package(String name, String price, String conten, int id) {
        
        this.name = name;
        this.price = price;
        this.conten = conten;
        this.id = id;
       
    }

    public String getName() {
        return name;
    }

    public String getPrice() {
        return price;
    }
    public String getConten() {
        return conten;
    }
}
