package com.carefello.backend.model;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "tempreq")

public class Tempreq {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private int elderid;
    private int bed_id;


    public Tempreq(int elderid, int bed_id){
        this.elderid = elderid;
        this.bed_id = bed_id;
    }

}

