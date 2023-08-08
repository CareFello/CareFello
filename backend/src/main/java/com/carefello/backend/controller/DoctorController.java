package com.carefello.backend.controller;

import com.carefello.backend.DTO.DoctorDTO;

import com.carefello.backend.service.DoctorService;
import com.carefello.backend.service.EmailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@CrossOrigin
@RequestMapping("api/v1/doctor")

public class DoctorController {
    @Autowired
    private DoctorService DoctorService;
    // @Autowired
    // private EmailService emailService;
    @PostMapping(path = "/save")
    public String saveDoctor(@RequestBody DoctorDTO DoctorDTO)
    {
        String id = DoctorService.addDoctor(DoctorDTO);

        /*try {
            emailService.sendSimpleEmail(DoctorDTO.getEmail(), DoctorDTO.getName1(), DoctorDTO.getName2());
            return "Email sent successfully";
        } catch (Exception e) {
            e.printStackTrace();
            return "Error sending email";
        }*/

        return id;
    }

    
}
