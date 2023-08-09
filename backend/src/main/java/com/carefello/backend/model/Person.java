package com.carefello.backend.model;

import java.util.List;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "person")

public class Person {
    @Id
    private Long id;
    private String name;
    @ElementCollection
    private List<String> test;
}
