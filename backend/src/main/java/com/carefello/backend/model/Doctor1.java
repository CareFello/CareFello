package com.carefello.backend.model;
import lombok.Data;
import jakarta.persistence.*;
import java.sql.Time;


@Data
@Entity
@Table(name="doctor1")
public class Doctor1 {

    @Id
    @Column(name="id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(name="sunday", length = 255)
    private Time sunday;
    @Column(name="sunday1", length = 255)
    private Time sunday1;
    @Column(name="monday", length = 255)
    private Time monday;
    @Column(name="monday1", length = 255)
    private Time monday1;
    @Column(name="tuesday", length = 255)
    private Time tuesday;
    @Column(name="tuesday1", length = 255)
    private Time tuesday1;
    @Column(name="wednesday", length = 255)
    private Time wednesday;
    @Column(name="wednesday1", length = 255)
    private Time wednesday1;
    @Column(name="thursday", length = 255)
    private Time thusrday;
    @Column(name="thursday1", length = 255)
    private Time thusrday1;
    @Column(name="friday", length = 255)
    private Time friday;
    @Column(name="friday1", length = 255)
    private Time friday1;
    @Column(name="saturday", length = 255)
    private Time saturday;
    @Column(name="saturday1", length = 255)
    private Time saturday1;

}
