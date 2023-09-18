package com.carefello.backend.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.carefello.backend.DTO.ContactusDTO;
import com.carefello.backend.model.Contactus;
import com.carefello.backend.model.Image;
import com.carefello.backend.model.Person;
import com.carefello.backend.repo.ContactusRepo;
import com.carefello.backend.repo.ImageRepo;
import com.carefello.backend.repo.PersonRepo;

@CrossOrigin
@RestController
@RequestMapping("/api/persons")

public class PersonController{
    private final PersonRepo personRepo;

    @Autowired
    private ContactusRepo contactusRepo;
    @Autowired
    private ImageRepo imageRepo;
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

    @PostMapping("/upload")
    public void uploadImage(@RequestParam("file") MultipartFile file) throws IOException {
        Image imageEntity = new Image();
        imageEntity.setImag(file.getBytes());
        imageRepo.save(imageEntity);
    }

    @GetMapping("/{id}")
    public byte[] getImageById(@PathVariable int id) {
        Image imageEntity = imageRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Image not found with id " + id));
        return imageEntity.getImag();
    }

    @GetMapping("/all")
    public List<byte[]> getAllImages() {
    List<Image> images = imageRepo.findAll();
    List<byte[]> imageByteArrays = new ArrayList<>();
    
    for (Image image : images) {
        byte[] arr = image.getImag();
        imageByteArrays.add(arr);
    }

    // Now, 'imageByteArrays' is a List of byte[] arrays
    return imageByteArrays;
}



}




    

