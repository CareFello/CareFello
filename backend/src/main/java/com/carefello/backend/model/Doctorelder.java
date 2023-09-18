package com.carefello.backend.model;
import lombok.Data;
import jakarta.persistence.*;



@Data
@Entity
@Table(name="doctor2")
public class Doctorelder {

    @Id
    @Column(name="id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(name="docid", length = 45)
    private int docId;
    @Column(name="elderid", length = 45)
    private int elderId;
    @Column(name="day", length = 255)
    private String day;
}
