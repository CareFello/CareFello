package com.carefello.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import com.carefello.backend.DTO.RequestDTO;

import org.springframework.web.bind.annotation.RestController;
import com.carefello.backend.model.Bed;
import com.carefello.backend.model.Caregiver1;
import com.carefello.backend.payload.response.BedResponse;
import com.carefello.backend.repo.BedRepo;
import com.carefello.backend.service.RequestService;

@CrossOrigin
@RestController
@RequestMapping("/api/beds")

public class BedController{
    private final BedRepo bedRepo;

    @Autowired
    private RequestService requestService;

    public BedController(BedRepo bedRepo){
        this.bedRepo = bedRepo;
    }

    @GetMapping("/get")
    public List<Bed> findBeds(){
        return bedRepo.findAll();
    }

    @PostMapping("/request")
    public List<Bed> elderRequest(@RequestBody RequestDTO requestDTO){
        return requestService.validateRequest(requestDTO);
    
    }

    

    @PostMapping("/request1")
    public List<Caregiver1> elderRequest1(@RequestBody RequestDTO requestDTO){
        return requestService.validateRequest1(requestDTO);

    }

    @GetMapping("/request2/{id}")
    public Optional<Bed> findBed(@PathVariable int id){
        return bedRepo.findById(id);
    }

    @PostMapping("/request3")
    public String assignElder1(@RequestBody RequestDTO requestDTO){
        String str = requestService.assignElder(requestDTO);
        return str;
    }

    @PostMapping("/request7")
    public String assignCaregiver1(@RequestBody RequestDTO requestDTO){
        String str = requestService.assignCaregiver(requestDTO);
        return str;
    }

    @GetMapping("/request4/{id}")
    public List<Bed> findBeds(@PathVariable int id){
        return bedRepo.findAllBeds(id);
    }

    @PostMapping("/request5/{id}")
    public ResponseEntity<?> findBeds1(@PathVariable int id, @RequestBody RequestDTO requestDTO){
        BedResponse str = requestService.validateRequest2(id, requestDTO);
        return ResponseEntity.ok(str);
    }

    @PostMapping("/request6/{id}")
    public String findCaregivers(@PathVariable int id, @RequestBody RequestDTO requestDTO){
        String str = requestService.validateRequest3(id, requestDTO);
        return str;
    }

}
