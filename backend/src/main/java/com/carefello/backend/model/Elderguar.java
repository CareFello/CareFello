package com.carefello.backend.model;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "elderguar")

public class Elderguar {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private int guardianid;
    private int elderid;


    public Elderguar(int guardianid, int elderid){
        this.guardianid = guardianid;
        this.elderid = elderid;
    }

    public Elderguar(){
        
    }

}
