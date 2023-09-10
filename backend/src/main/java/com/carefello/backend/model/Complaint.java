package com.carefello.backend.model;

import jakarta.persistence.*;

@Entity

public class Complaint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String type;
    private String details;

    @ManyToOne
    @JoinColumn(name = "guardian_id")
    private Guardian guardian;
}
