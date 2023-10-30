package com.carefello.backend.controller;

import com.carefello.backend.DTO.CaregiverDTO;

import com.carefello.backend.service.CaregiverService;
import com.carefello.backend.service.EmailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@CrossOrigin
@RequestMapping("api/v1/caregiver")

public class CaregiverController {
    @Autowired
    private CaregiverService caregiverService;
    // @Autowired
    // private EmailService emailService;
    @PostMapping(path = "/save")
    public String saveCaregiver(@RequestBody CaregiverDTO caregiverDTO)
    {
        String id = caregiverService.addCaregiver(caregiverDTO);

        /*try {
            emailService.sendSimpleEmail(caregiverDTO.getEmail(), caregiverDTO.getName1(), caregiverDTO.getName2());
            return "Email sent successfully";
        } catch (Exception e) {
            e.printStackTrace();
            return "Error sending email";
        }*/

        return id;
    }


    
}
