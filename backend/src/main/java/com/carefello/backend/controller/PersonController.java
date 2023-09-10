package com.carefello.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.carefello.backend.DTO.ContactusDTO;
import com.carefello.backend.model.Contactus;
import com.carefello.backend.model.Person;
import com.carefello.backend.repo.ContactusRepo;
import com.carefello.backend.repo.PersonRepo;

@CrossOrigin
@RestController
@RequestMapping("/api/persons")

public class PersonController{
    private final PersonRepo personRepo;

    @Autowired
    private ContactusRepo contactusRepo;
    public PersonController(PersonRepo personRepo){
        this.personRepo = personRepo;
    }

    @GetMapping("/get")
    public List<Person> getAllPerson(){
        return personRepo.findAll();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deletePerson(@PathVariable Long id) {
        personRepo.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/contact")
    public String getContactUs(@RequestBody ContactusDTO contactusDTO){
        Contactus contactus = new Contactus(
            contactusDTO.getName(),
            contactusDTO.getEmail(),
            contactusDTO.getSubject(),
            contactusDTO.getMessage()
        );
        contactusRepo.save(contactus);
        return contactus.getName();
    }
}




    

