package com.carefello.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.carefello.backend.model.Person;

import com.carefello.backend.repo.PersonRepo;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")


public class PersonController {

    @Autowired
    PersonRepo repo;

    

    @PostMapping("/addPerson")
    public void addPerson(@RequestBody Person person) {
        repo.save(person);
    }

    
}
